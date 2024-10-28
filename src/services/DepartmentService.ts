import { DepartmentDataInf } from "@/interfaces/departments/DepartmentInf";

export const getDepartments = async (): Promise<DepartmentDataInf[]> => {
    return localStorage.getItem("departments") ? JSON.parse(localStorage.getItem("departments") || "") : [];
}

export const addDepartment = async (formData: DepartmentDataInf): Promise<DepartmentDataInf[]> => {
    try {
        const departments: string = window.localStorage.getItem("departments") || "";
        let deptObjArray: DepartmentDataInf[] = [];
        if (departments && departments.length > 0) {
            deptObjArray = JSON.parse(departments);
        }
        deptObjArray.push(formData);
        window.localStorage.setItem("departments", JSON.stringify(deptObjArray));
        return deptObjArray;
    } catch (error) {
        throw error;
    }
}

export const editDepartment = async (formData: DepartmentDataInf): Promise<DepartmentDataInf[]> => {
    try {
        const departmentsstr: string = window.localStorage.getItem("departments") || "";
        let departments: DepartmentDataInf[] = departmentsstr.length > 0 ? JSON.parse(departmentsstr) : [];
        departments = departments.filter((empObj) => empObj.email !== formData.email);
        departments.push(formData);
        window.localStorage.setItem("departments", JSON.stringify(departments));
        return departments;
    } catch (error) {
        throw error;
    }
}

export const deleteDepartments = async (selectedDepartments: string[]): Promise<DepartmentDataInf[]> => {
    try {
        let allDepts: DepartmentDataInf[] = await getDepartments();
        let remainingDepts: DepartmentDataInf[] = allDepts.filter((dept: DepartmentDataInf) => !selectedDepartments.includes(dept.email));
        window.localStorage.setItem("departments", JSON.stringify(remainingDepts));
        return remainingDepts;
    } catch (error) {
        throw error;
    }
}

