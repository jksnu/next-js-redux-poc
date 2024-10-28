'use client';
import AddEmployee from "@/components/employees/AddEmployee";
import EmployeeList from "@/components/employees/EmployeeList";
import EditEmployee from "@/components/employees/EditEmployee";
import { EmployeeDataInf } from "@/interfaces/employees/EmployeeInf";
import { useState } from "react";

export default function Departments() {
  const [showForm, setShowForm] = useState(0);
  const [TempEmployees, setTempEmployees] = useState<EmployeeDataInf[]>([]);
  const [employeesSeleted, setEmployeesSeleted] = useState<EmployeeDataInf[]>([]);

  const getEmployee = (updatedEmployees: EmployeeDataInf[]): void => {
    setTempEmployees(updatedEmployees);
    setShowForm(0);
  }
  const updateShowFormFlag = (flagVal: number): void => {
    setShowForm(flagVal);
  }
  const getSelectedEmployees = (depts: EmployeeDataInf[]): void => {
    setEmployeesSeleted(depts);
  }

  return (
    <div className="text-center">
      {showForm === 0 && <EmployeeList employees={TempEmployees} onShowFormFlag={updateShowFormFlag} onEdit={getSelectedEmployees} />}
      {showForm === 2 && <EditEmployee onClick={getEmployee} employees={employeesSeleted}/>}
      {showForm === 1 && <AddEmployee onClick={getEmployee} />}
    </div>
  );
}
