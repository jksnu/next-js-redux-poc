import { EmployeeDataInf } from "@/interfaces/employees/EmployeeInf";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

const initialState = {
  value: <EmployeeDataInf[]> [],
  activePage: "list"
}

export interface initialState {
  value: EmployeeDataInf[],
  activePage: string
}

export const employeeSlice = createSlice ({
  name: "employees",
  initialState,
  reducers: {
    employeeAdded: (state, action: PayloadAction<EmployeeDataInf>) => {
      state.value.push(action.payload);
      state.activePage = "list";
    },
    employeeEdited: (state, action: PayloadAction<EmployeeDataInf>) => {
      state.value = state.value.filter((empObj) => empObj.email !== action.payload.email);
      state.value.push(action.payload);
      state.activePage = "list";
    },
    employeeDeleted: (state, action: PayloadAction<string[]> ) => {
      state.value = state.value.filter((dept: EmployeeDataInf) => !action.payload.includes(dept.email));
      state.activePage = "list";
    },
    activePageChanged: (state, action: PayloadAction<string>) => {
      state.activePage = action.payload;
    }
  }
});

export const { employeeAdded, employeeDeleted, activePageChanged, employeeEdited } = employeeSlice.actions;
export const selectEmployees = (state: RootState) => state.employeeReducer.value;
export const selectActivePage = (state: RootState) => state.employeeReducer.activePage;
export default employeeSlice.reducer;