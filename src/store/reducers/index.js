import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { loader } from "./loaderReducer";
import { predictionReducer } from "./predictionReducer";

export const rootReducer = combineReducers({
  authReducer: authReducer,
  loaderReducer: loader,
  predictionReducer: predictionReducer,
});
