import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { loader } from "./loaderReducer";

export const rootReducer = combineReducers({
  authReducer: authReducer,
  loaderReducer: loader,
});
