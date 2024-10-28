export interface DepartmentDataInf {
    name: string;
    email: string;
    phone: string;
}

export interface DepartmentPropInf {
    onEdit: (deptList: DepartmentDataInf[]) => void;
}

export interface AddDepartmentFormPropsInf {
}

export interface EditDepartmentFormPropsInf {
    departments: DepartmentDataInf[];
}