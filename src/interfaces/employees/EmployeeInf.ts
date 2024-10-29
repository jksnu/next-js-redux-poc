export interface EmployeeDataInf {
    name: string;
    email: string;
    phone: string;
    department: string;
}
export interface EmployeePropInf {
    onEdit: (deptList: EmployeeDataInf[]) => void;
}
export interface AddEmployeeFormPropsInf {
}

export interface EditEmployeeFormPropsInf {
    employees: EmployeeDataInf[];
}