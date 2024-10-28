'use client';
import AddDepartment from "@/components/departments/AddDepartment";
import DepartmentList from "@/components/departments/DepartmentList";
import EditDepartment from "@/components/departments/EditDepartments";
import { DepartmentDataInf } from "@/interfaces/departments/DepartmentInf";
import { useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { selectActivePage } from "@/redux/slices/departmentSlice";

export default function Departments() {
  //const [showForm, setShowForm] = useState(0);
  const activePage = useAppSelector(selectActivePage);
  const [departmentsSeleted, setDepartmentsSeleted] = useState<DepartmentDataInf[]>([]);

  // const getDepartment = (): void => {
  //   setShowForm(0);
  // }
  // const updateShowFormFlag = (flagVal: number): void => {
  //   setShowForm(flagVal);
  // }
  const getSelectedDepartments = (depts: DepartmentDataInf[]): void => {
    setDepartmentsSeleted(depts);
  }

  return (
    <div className="text-center">
      {activePage === "list" && <DepartmentList onEdit={getSelectedDepartments} />}
      {activePage === "edit" && <EditDepartment departments={departmentsSeleted}/>}
      {activePage === "add" && <AddDepartment />}
    </div>
  );
}
