import { combineReducers } from "redux";

import info from "./basicDataReducer";
import primaryDataReducer from "./primaryDataReducer";
//import primaryInfo from "./primaryInfoReducer";
//import userExperienceData from "./userExperienceReducer"

export default combineReducers({
  basic_info: info,
  primary_info: primaryDataReducer,
});
