'use client';
import { DepartmentDataInf, DepartmentPropInf } from "@/interfaces/departments/DepartmentInf";
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { selectDepartments, departmentDeleted, activePageChanged } from "@/redux/slices/departmentSlice";

const DepartmentList: React.FC<DepartmentPropInf> = ({ onEdit }) => {
  let TempDepartments = useAppSelector(selectDepartments);
  const dispatch = useAppDispatch();
  const [departmentsSeleted, setdepartmentsSeleted] = useState<string[]>([]);

  const seleectDepartment = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, checked } = e.target;
    if (checked) {
      let tempselected: string[] = departmentsSeleted.concat([value]);
      setdepartmentsSeleted([...new Set(tempselected)]);
    } else {
      setdepartmentsSeleted(departmentsSeleted.filter((email: string) => value !== email));
    }
  }
  const selectAll = (): void => {
    let tempdepartments: string[] = [];
    let checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[type="checkbox"]');
    let selectAllCheckbox = document.getElementById('selectAllDepartment') as HTMLInputElement;
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = selectAllCheckbox.checked;
      tempdepartments.push(checkbox.value);
    });
    if (selectAllCheckbox.checked) {
      setdepartmentsSeleted(tempdepartments);
    } else {
      setdepartmentsSeleted([]);
    }
  }
  const openAddForm = (): void => {
    dispatch(activePageChanged("add"));
  }
  const deleteDepartment = async (): Promise<void> => {
    if (departmentsSeleted.length === 0) {
      alert("Please select an Department");
    } else {
      dispatch(departmentDeleted(departmentsSeleted));
    }
  }
  const openEditForm = (): void => {
    if(departmentsSeleted.length === 0) {
      alert("Please select an Department");
    } else if(departmentsSeleted.length > 1) {
      alert("Please select only one Department for edit");
    } else {
      const selectedDept: DepartmentDataInf[] = TempDepartments.filter((dept: DepartmentDataInf) => departmentsSeleted.includes(dept.email));
      onEdit(selectedDept);
      dispatch(activePageChanged("edit"));
    }
  }
  return (
    <div>
      <h4>Department List</h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col"><input type="checkbox" id="selectAllDepartment" name="selectdepartments" value="alldepartments" onClick={selectAll} /></th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {TempDepartments.map((row: DepartmentDataInf, index: number) => (
            <tr key={index}>
              <td><input type="checkbox" value={row.email} onChange={seleectDepartment} /></td>
              <td key={row.name}>{row.name}</td>
              <td key={row.email}>{row.email}</td>
              <td key={row.phone}>{row.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-secondary me-1" onClick={openAddForm}>Add</button>
      <button className="btn btn-secondary me-1" onClick={openEditForm}>Edit</button>
      <button className="btn btn-secondary me-1" onClick={deleteDepartment}>Delete</button>
    </div>
  );
}

export default DepartmentList;