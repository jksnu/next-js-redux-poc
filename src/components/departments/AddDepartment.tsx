'use client';
import { AddDepartmentFormPropsInf, DepartmentDataInf } from "@/interfaces/departments/DepartmentInf";
import { useState } from "react";
import { departmentAdded } from "@/redux/slices/departmentSlice";
import { useAppDispatch } from "@/redux/hooks";

const AddDepartment: React.FC<AddDepartmentFormPropsInf> = () => {
    const [formData, setFormData] = useState<DepartmentDataInf>({
        name: "",
        email: "",
        phone: ""
    });
    const dispatch = useAppDispatch();

    const handleSubmit = async (): Promise<void> => {
        dispatch(departmentAdded(formData));
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
                <h4>Add Department Details</h4>
                <div className="row mb-2">
                    <label className="col-sm-3 col-form-label">Name:</label>
                    <div className="col-sm-9">
                        <input type="text" id="name" value={formData.name} onChange={onValueChange} required className="form-control" />
                    </div>
                </div>
                <div className="row mb-2">
                    <label className="col-sm-3 col-form-label">Email:</label>
                    <div className="col-sm-9">
                        <input type="text" id="email" value={formData.email} onChange={onValueChange} required className="form-control" />
                    </div>
                </div>
                <div className="row mb-2">
                    <label className="col-sm-3 col-form-label">Phone:</label>
                    <div className="col-sm-9">
                        <input type="text" id="phone" value={formData.phone} onChange={onValueChange} className="form-control" />
                    </div>
                </div>
                <button className="btn btn-secondary me-1" type="button" onClick={handleSubmit}>Submit</button>
                <button className="btn btn-secondary me-1" type="button" onClick={cancelSubmit}>Cancel</button>
            </form>
        </div>
    );
}

export default AddDepartment;