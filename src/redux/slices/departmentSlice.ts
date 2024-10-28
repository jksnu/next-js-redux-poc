import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DepartmentDataInf } from '@/interfaces/departments/DepartmentInf';
import { RootState } from "../store";

export interface DepartmentState {
  value: DepartmentDataInf[],
  activePage: string
}


//const initialState: DepartmentDataInf[] = [];
const initialState: DepartmentState = {
  value: [],
  activePage: "list"
}

export const departmentSlice = createSlice({
  name: 'departments',
  initialState,
  reducers: {
    departmentAdded: (state, action: PayloadAction<DepartmentDataInf>) => {
      state.value.push(action.payload);
      state.activePage = "list";
    },
    departmentEdited: (state, action: PayloadAction<DepartmentDataInf>) => {
      state.value = state.value.filter((empObj) => empObj.email !== action.payload.email);
      state.value.push(action.payload);
      state.activePage = "list";
    },
    departmentDeleted: (state, action: PayloadAction<string[]> ) => {
      state.value = state.value.filter((dept: DepartmentDataInf) => !action.payload.includes(dept.email));
      state.activePage = "list";
    },
    activePageChanged: (state, action: PayloadAction<string>) => {
      state.activePage = action.payload;
    }
  }
});

export const { departmentAdded, departmentDeleted, activePageChanged, departmentEdited } = departmentSlice.actions;
export const selectDepartments = (state: RootState) => state.departmentReducer.value;
export const selectActivePage = (state: RootState) => state.departmentReducer.activePage;
export default departmentSlice.reducer;

