import {
  LOGIN_SUCCESS,
  LOGOUT,
  LOAD_USER_FROM_STORAGE,
  TOGGLE_THEME,
} from "./actions/actions";
import {
  UPDATE_USER,
  GET_ALL_USERS,
  GET_USER_BY_NAME,
  CLEAR_SEARCH,
  GET_USER,
  CREATE_USER,
} from "./actions/userActions";
import { NAVIGATION_ROUTE } from "./actions/navActions";
import { UPLODAD_FILE, GET_FILES } from "./actions/fileActions";
import {
  CREATE_SUBJECT,
  GET_SUBJECTS,
  GET_SUBJECT,
  DELETE_SUBJECT,
  GET_SUBJECT_BY_NAME,
  ADD_STUDENT,
  UPDATE_SUBJECT
} from "./actions/subjectActions";
import {
  CREATE_MODULE,
  GET_MODULES,
  GET_MODULE,
  ADD_MODULE_SUCCESS,
  ADD_VIDEO_SUCCESS,
  ADD_VIDEO_FAILURE,
} from "./actions/moduleActions";

const initialState = {
  auth: {
    isAuthenticated: false,
    user: null,
    role: null,
    id: null,
    enrolledSubjects: [],
  },
  darkMode:false,
  registerToken: null,
  route: "home",
  file: null,
  files: null,
  subjects: [],
  subject: {},
  subjectSearch: [],
  module: {},
  users: [],
  user: {},
  studentSearch: [],
  students: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        auth: {
          isAuthenticated: true,
          id: action.payload.id,
          user: action.payload.user,
          role: action.payload.role,
          name: action.payload.name,
          image: action.payload.image,
          token: action.payload.token,
          email: action.payload.email,
          enrolledSubjects: action.payload.enrolledSubjects,
          description: action.payload.description,
          contactNumber: action.payload.contactNumber,
        },
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        role: null,
        name: null,
        image: null,
      };
    case TOGGLE_THEME:
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    case LOAD_USER_FROM_STORAGE:
      return {
        ...state,
        auth: {
          isAuthenticated: true,
          ...action.payload,
        },
      };
    case NAVIGATION_ROUTE:
      return {
        ...state,
        route: action.payload,
      };
    case UPLODAD_FILE:
      return {
        ...state,
        file: action.payload,
      };
    case GET_FILES:
      return {
        ...state,
        files: action.payload,
      };
    case GET_SUBJECTS:
      return {
        ...state,
        subjects: action.payload,
      };
    case GET_SUBJECT_BY_NAME:
      return {
        ...state,
        subjectSearch: action.payload,
      };
    case CREATE_SUBJECT:
      return {
        ...state,
        subject: action.payload,
      };
    case UPDATE_SUBJECT:
      return {
        ...state,
        subject: action.payload,
      };
    case GET_SUBJECT:
      return {
        ...state,
        subject: action.payload,
      };
    case ADD_STUDENT:
      return {
        ...state,
        students: action.payload,
      };
    case DELETE_SUBJECT:
      return {
        ...state,
        subject: action.payload,
      };
    case GET_MODULES:
      return {
        ...state,
        modules: action.payload,
      };
    case CREATE_MODULE:
      return {
        ...state,
        module: action.payload,
      };
    case GET_MODULE:
      return {
        ...state,
        module: action.payload,
      };
    case ADD_MODULE_SUCCESS:
      return {
        ...state,
        module: action.payload,
      };
    case ADD_VIDEO_SUCCESS:
      return {
        ...state,
        module: action.payload,
      };
    case ADD_VIDEO_FAILURE:
      return {
        ...state,
        module: action.payload,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case CREATE_USER:
      return {
        ...state,
        registerToken: action.payload,
      };
    case GET_USER_BY_NAME:
      return {
        ...state,
        studentSearch: action.payload,
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        studentSearch: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
