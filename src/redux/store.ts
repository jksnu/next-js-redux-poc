import { configureStore } from "@reduxjs/toolkit";
import departmentSlice from "./slices/departmentSlice"
import employeeSlice from "./slices/employeeSlice";
import newsSlice from "./slices/newsSlice";

export const store =  configureStore({
  reducer: {
    departmentReducer: departmentSlice,
    employeeReducer: employeeSlice,
    newsReducer: newsSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;