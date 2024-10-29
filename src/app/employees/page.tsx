'use client';
import AddEmployee from "@/components/employees/AddEmployee";
import EmployeeList from "@/components/employees/EmployeeList";
import EditEmployee from "@/components/employees/EditEmployee";
import { EmployeeDataInf } from "@/interfaces/employees/EmployeeInf";
import { useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { selectActivePage } from "@/redux/slices/employeeSlice";

export default function Departments() {
  const showForm = useAppSelector(selectActivePage);
  const [employeesSeleted, setEmployeesSeleted] = useState<EmployeeDataInf[]>([]);

  const getSelectedEmployees = (depts: EmployeeDataInf[]): void => {
    setEmployeesSeleted(depts);
  }

  return (
    <div className="text-center">
      {showForm === "list" && <EmployeeList onEdit={getSelectedEmployees} />}
      {showForm === "edit" && <EditEmployee employees={employeesSeleted}/>}
      {showForm === "add" && <AddEmployee />}
    </div>
  );
}
