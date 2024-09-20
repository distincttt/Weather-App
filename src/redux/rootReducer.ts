import { combineReducers } from "@reduxjs/toolkit";
import weatherSlice from "./weatherSlice";

export const rootReducer = combineReducers({ weatherSlice });
