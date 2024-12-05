import {
    UPDATE_USER,
    GET_ALL_USERS,
    GET_USER_BY_NAME,
    GET_USER,
    CREATE_USER,
    CLEAR_SEARCH,
    FILTER_USERS,
    DELETE_USER,
    REGISTER_USER
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
        case DELETE_USER:
          return {
            ...state,
            // Guardar el mensaje del backend en el estado de `user`
            user: action.payload,  // El payload contendrá el mensaje de éxito.
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
      case REGISTER_USER:
        return {
          ...state,
          registerToken: action.payload,
        };
        case GET_USER_BY_NAME:
          return {
            ...state,
            studentSearch: action.payload,
          };
        case FILTER_USERS:
          return {
            ...state,
            studentSearch: action.payload,
          };
      default:
        return state;
    }
  };
  
  export default userReducer;