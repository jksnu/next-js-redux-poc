'use client';
import { EmployeeDataInf, EmployeePropInf } from "@/interfaces/employees/EmployeeInf";
import { deleteEmployees, getEmployees } from "@/services/EmployeeService";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { activePageChanged, employeeDeleted, selectEmployees } from "@/redux/slices/employeeSlice";

const EmployeeList: React.FC<EmployeePropInf> = ({ onEdit }) => {
  const dispatch = useAppDispatch();
  const TempEmployees = useAppSelector(selectEmployees);
  const [employeesSeleted, setEmployeesSeleted] = useState<string[]>([]);

  const seleectEmployee = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, checked } = e.target;
    if (checked) {
      let tempselected: string[] = employeesSeleted.concat([value]);
      setEmployeesSeleted([...new Set(tempselected)]);
    } else {
      setEmployeesSeleted(employeesSeleted.filter((email: string) => value !== email));
    }
  }
  const selectAll = (): void => {
    let tempemployees: string[] = [];
    let checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[type="checkbox"]');
    let selectAllCheckbox = document.getElementById('selectAllDepartment') as HTMLInputElement;
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = selectAllCheckbox.checked;
      tempemployees.push(checkbox.value);
    });
    if (selectAllCheckbox.checked) {
      setEmployeesSeleted(tempemployees);
    } else {
      setEmployeesSeleted([]);
    }
  }
  const openAddForm = (): void => {
    dispatch(activePageChanged("add"));
  }
  const deleteEmployee = async (): Promise<void> => {
    if (employeesSeleted.length === 0) {
      alert("Please select an Employee");
    } else {
      dispatch(employeeDeleted(employeesSeleted));
    }
  }
  const openEditForm = (): void => {
    if(employeesSeleted.length === 0) {
      alert("Please select an Employee");
    } else if(employeesSeleted.length > 1) {
      alert("Please select only one Employee for edit");
    } else {
      const selectedEmp: EmployeeDataInf[] = TempEmployees.filter((emp: EmployeeDataInf) => employeesSeleted.includes(emp.email));
      onEdit(selectedEmp);
      dispatch(activePageChanged("edit"));
    }
  }
  return (
    <div>
      <h4>Employee List</h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col"><input type="checkbox" id="selectAllDepartment" name="selectdepartments" value="alldepartments" onClick={selectAll} /></th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Department</th>
          </tr>
        </thead>
        <tbody>
          {TempEmployees.map((row: EmployeeDataInf, index: number) => (
            <tr key={index}>
              <td><input type="checkbox" value={row.email} onChange={seleectEmployee} /></td>
              <td key={row.name}>{row.name}</td>
              <td key={row.email}>{row.email}</td>
              <td key={row.phone}>{row.phone}</td>
              <td key={row.department}>{row.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-secondary me-1" onClick={openAddForm}>Add</button>
      <button className="btn btn-secondary me-1" onClick={openEditForm}>Edit</button>
      <button className="btn btn-secondary me-1" onClick={deleteEmployee}>Delete</button>
    </div>
  );
}

export default EmployeeList;