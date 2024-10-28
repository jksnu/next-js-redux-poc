'use client';
import { DepartmentDataInf } from "@/interfaces/departments/DepartmentInf";
import { EmployeeDataInf, EditEmployeeFormPropsInf } from "@/interfaces/employees/EmployeeInf";
import { getDepartments } from "@/services/DepartmentService";
import { editEmployee } from "@/services/EmployeeService";
import { useState, useEffect } from "react";

const EditEmployee: React.FC<EditEmployeeFormPropsInf> = ({ onClick, employees }) => {
    const [departments, setDepartments] = useState<DepartmentDataInf[]>([]);
    const [formData, setFormData] = useState<EmployeeDataInf>(employees[0]);

    console.log(employees);
    const handleSubmit = async (): Promise<void> => {
        let empObjArray: EmployeeDataInf[] = await editEmployee(formData);
        setFormData({ name: "", email: "", phone: "", department: "" });
        onClick(empObjArray);
    }
    const cancelSubmit = (): void => {
        setFormData({ name: "", email: "", phone: "", department: "" });
        onClick([]);
    }
    const onValueChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>): void => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }
    useEffect(() => {
        const fetchDepartments = async (): Promise<void> => {
            try {
                setDepartments(await getDepartments());
            } catch (error) {
                throw error;
            }
        }
        fetchDepartments();
    }, departments);

    return (
        <div className="container d-flex justify-content-center">
            <form name="employee">
                <h4>Edit Employee Details</h4>
                <div className="row mb-2">
                    <label className="col-sm-3 col-form-label">Name:</label>
                    <div className="col-sm-9">
                        <input type="text" id="name" value={formData?formData.name:""} onChange={onValueChange} required className="form-control" />
                    </div>
                </div>
                <div className="row mb-2">
                    <label className="col-sm-3 col-form-label">Email:</label>
                    <div className="col-sm-9">
                        <input type="text" id="email" readOnly value={formData?formData.email:""} onChange={onValueChange} required className="form-control" />
                    </div>
                </div>
                <div className="row mb-2">
                    <label className="col-sm-3 col-form-label">Phone:</label>
                    <div className="col-sm-9">
                        <input type="text" id="phone" value={formData?formData.phone:""} onChange={onValueChange} className="form-control" />
                    </div>
                </div>
                <div className="row mb-2">
                    <label className="col-sm-3 col-form-label">Department:</label>
                    <div className="col-sm-9">
                        <select id="department" onChange={onValueChange} className="form-control">
                            <option value="">Select Department</option>
                            {departments.map((department, index) => {
                                return (
                                    <option key={index} value={department.name} selected={formData?formData.department === department.name: false}>{department.name}</option>
                                );
                            })}
                        </select>
                    </div>
                </div>
                <button className="btn btn-secondary me-1" type="button" onClick={handleSubmit}>Submit</button>
                <button className="btn btn-secondary me-1" type="button" onClick={cancelSubmit}>Cancel</button>
            </form>
        </div>
    );
}

export default EditEmployee;