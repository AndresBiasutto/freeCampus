import {
  LOGIN_SUCCESS,
  LOGOUT,
  LOAD_USER_FROM_STORAGE,
} from "./actions/actions";
import { GET_ALL_USERS, GET_USER_BY_NAME, CLEAR_SEARCH, GET_USER } from "./actions/userActions";
import { NAVIGATION_ROUTE } from "./actions/navActions";
import { UPLODAD_FILE, GET_FILES } from "./actions/fileActions";
import {
  CREATE_SUBJECT,
  GET_SUBJECTS,
  GET_SUBJECT,
  DELETE_SUBJECT,
  GET_SUBJECT_BY_NAME,
  ADD_STUDENT
} from "./actions/subjectActions";
import {
  CREATE_MODULE,
  GET_MODULES,
  GET_MODULE,
  ADD_MODULE_SUCCESS,
} from "./actions/moduleActions";

const initialState = {
  auth: {
    isAuthenticated: false,
    user: null,
    role: null,
    id: null,
    enrolledSubjects:[]
  },
  route: "home",
  file: null,
  files: null,
  subjects: [],
  subject: {},
  subjectSearch: [],
  module: {},
  users: [],
  user:{},
  studentSearch: [],
  students: []
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
          enrolledSubjects:action.payload.enrolledSubjects
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
