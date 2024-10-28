'use client';
import { DepartmentDataInf, EditDepartmentFormPropsInf } from "@/interfaces/departments/DepartmentInf";
import { useAppDispatch } from "@/redux/hooks";
import { departmentEdited } from "@/redux/slices/departmentSlice";
//import { editDepartment } from "@/services/DepartmentService";
import { useState } from "react";

const EditDepartment: React.FC<EditDepartmentFormPropsInf> = ({ departments }) => {
    const dispatch = useAppDispatch();
    const [formData, setFormData] = useState<DepartmentDataInf>(departments[0]);
    const handleSubmit = async (): Promise<void> => {
        dispatch(departmentEdited(formData));
        setFormData({ name: "", email: "", phone: "" });
    }
    const cancelSubmit = (): void => {
        setFormData({ name: "", email: "", phone: "" });
    }
    const onValueChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    return (
        <div className="container d-flex justify-content-center">
            <form name="department">
                <h4>Edit Department Details</h4>
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
                <button className="btn btn-secondary me-1" type="button" onClick={handleSubmit}>Submit</button>
                <button className="btn btn-secondary me-1" type="button" onClick={cancelSubmit}>Cancel</button>
            </form>
        </div>
    );
}

export default EditDepartment;