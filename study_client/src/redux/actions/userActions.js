import axios from "../../api/axios";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_USER_BY_NAME = "GET_USER_BY_NAME";
export const CLEAR_SEARCH = "CLEAR_SEARCH";
export const GET_USER = "GET_USER";
export const UPDATE_USER = "UPDATE_USER";
export const CREATE_USER = "CREATE_USER";

export const getAllUsers = () => {
  return async (dispatch) => {
    const apiData = (await axios.get(`users`)).data;
    dispatch({ type: GET_ALL_USERS, payload: apiData });
  };
};

export const getUserByName = (userName) => {
  return async (dispatch) => {
    const apiData = (await axios.get(`users/?name=${userName}`)).data;
    dispatch({ type: GET_USER_BY_NAME, payload: apiData });
  };
};

export const getOneUser = (id) => {
  return async (dispatch) => {
    try {
      const apiData = (await axios.get(`users/${id}`)).data;
      dispatch({ type: GET_USER, payload: apiData });
    } catch (error) {
      console.error(`Error fetching user with ID ${id}:`, error);
    }
  };
};

export const clearUserSearch = () => {
  return async (dispatch) => {
    const clear = [];
    dispatch({ type: CLEAR_SEARCH, payload: clear });
  };
};

export const updateUser= (userId, update)=>{
  return async (dispatch) => {
    try {
      const apiData = (await axios.patch(`users/${userId}`, update)).data;
      dispatch({ type: UPDATE_USER, payload: apiData });
    } catch (error) {
      console.error(`Error fetching user with ID ${userId}:`, error);
    }
  };
}

export const createUser = (newUser)=>{
  return async (dispatch) => {
    try {
      const apiData = (await axios.post("/users/signUp", newUser)).data;
      dispatch({ type: CREATE_USER, payload: apiData });
    } catch (error) {
      console.error(error);
    }
  };
}