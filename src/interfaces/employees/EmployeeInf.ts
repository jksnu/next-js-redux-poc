export interface EmployeeDataInf {
    name: string;
    email: string;
    phone: string;
    department: string;
}

export interface EmployeePropInf {
    onShowFormFlag: (flag: number) => void;
    onEdit: (deptList: EmployeeDataInf[]) => void;
    employees: EmployeeDataInf[];
}

export interface AddEmployeeFormPropsInf {
    onClick: (data: EmployeeDataInf[]) => void;
}

export interface EditEmployeeFormPropsInf {
    onClick: (data: EmployeeDataInf[]) => void;
    employees: EmployeeDataInf[];
}