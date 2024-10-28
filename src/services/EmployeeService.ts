import { EmployeeDataInf } from "@/interfaces/employees/EmployeeInf";

export const getEmployees = async (): Promise<EmployeeDataInf[]> => {
    return localStorage.getItem("employees") ? JSON.parse(localStorage.getItem("employees") || "") : [];
}

export const addEmployee = async (formData: EmployeeDataInf): Promise<EmployeeDataInf[]> => {
    try {
        const employees: string = window.localStorage.getItem("employees") || "";
        let empObjArray: EmployeeDataInf[] = [];
        if (employees && employees.length > 0) {
            empObjArray = JSON.parse(employees);
        }
        empObjArray.push(formData);
        window.localStorage.setItem("employees", JSON.stringify(empObjArray));
        return empObjArray;
    } catch (error) {
        throw error;
    }
}

export const editEmployee = async (formData: EmployeeDataInf): Promise<EmployeeDataInf[]> => {
    try {
        const employeesstr: string = window.localStorage.getItem("employees") || "";
        let employees: EmployeeDataInf[] = employeesstr.length > 0 ? JSON.parse(employeesstr) : [];
        employees = employees.filter((empObj) => empObj.email !== formData.email);
        employees.push(formData);
        window.localStorage.setItem("employees", JSON.stringify(employees));
        return employees;
    } catch (error) {
        throw error;
    }
}

export const deleteEmployees = async (selectedEmployees: string[]): Promise<EmployeeDataInf[]> => {
    try {
        let allEmps: EmployeeDataInf[] = await getEmployees();
        let remainingEmps: EmployeeDataInf[] = allEmps.filter((emp: EmployeeDataInf) => !selectedEmployees.includes(emp.email));
        window.localStorage.setItem("employees", JSON.stringify(remainingEmps));
        return remainingEmps;
    } catch (error) {
        throw error;
    }
}

