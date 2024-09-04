import {
  LOGIN_SUCCESS,
  LOGOUT,
  LOAD_USER_FROM_STORAGE,
  GET_USER,
} from "../actions/authActions";

const initialAuthState = {
  isAuthenticated: false,
  user: null,
  role: null,
  id: null,
  enrolledSubjects: [],
};

const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        ...action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        role: null,
      };
    case LOAD_USER_FROM_STORAGE:
      return {
        ...state,
        isAuthenticated: true,
        ...action.payload,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
