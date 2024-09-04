import { combineReducers } from "redux";
import authReducer from "./authReducer";
import themeReducer from "./themeReducer";
import navigationReducer from "./navigationReducer";
import fileReducer from "./fileReducer";
import subjectReducer from "./subjectReducer";
import moduleReducer from "./moduleReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
  navigation: navigationReducer,
  files: fileReducer,
  subjects: subjectReducer,
  subject: subjectReducer,
  modules: moduleReducer,
  users: userReducer,
  user: userReducer,
  chapter: moduleReducer,
  video: moduleReducer,
  file: moduleReducer,
  studentSearch: userReducer
});

export default rootReducer;