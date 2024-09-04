import {
    UPDATE_USER,
    GET_ALL_USERS,
    GET_USER_BY_NAME,
    GET_USER,
    CREATE_USER,
    CLEAR_SEARCH,
  } from "../actions/userActions";
  
  const initialUserState = {
    users: [],
    user: {},
    studentSearch: [],
    registerToken: null,
  };

const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
      case UPDATE_USER:
      case GET_USER:
        return {
          ...state,
          user: action.payload,
        };
      case GET_ALL_USERS:
        return {
          ...state,
          users: action.payload,
        };
      case CLEAR_SEARCH:
        return {
          ...state,
          studentSearch: action.payload,
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
      default:
        return state;
    }
  };
  
  export default userReducer;