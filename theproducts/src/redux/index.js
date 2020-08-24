import { combineReducers } from "redux";
import global from "./global/reducer";

const rootReducer = combineReducers({
  global,
});

export default rootReducer;
