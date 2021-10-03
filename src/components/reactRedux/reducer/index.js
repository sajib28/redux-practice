import { counterReducer } from "./counterReducer";
import { userReducer } from "./userReducer";
import { combineReducers } from "redux";

export const allReducers = combineReducers({
  counterReducer,
  userReducer
});
