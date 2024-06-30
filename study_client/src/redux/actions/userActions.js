export const GET_ALL_USERS= "GET_ALL_USERS";
export const GET_USER_BY_NAME= "GET_USER_BY_NAME";
export const CLEAR_SEARCH= "CLEAR_SEARCH";
export const GET_USER= "GET_USER";
import axios from "../../api/axios"

export const getAllUsers = () => {
    return async (dispatch) => {
      const apiData = (await axios.get(`${"users"}`)).data;
      dispatch({ type: GET_ALL_USERS, payload: apiData });
    };
  };
  export const getUserByName = (userName) => {
    return async (dispatch) => {
      const apiData = (await axios.get(`users/?name=${userName}`)).data;
      dispatch({ type: GET_USER_BY_NAME, payload: apiData });
    };
  };
  export const getOneUser = (id)=> {
    return async (dispatch)=>{
        const apiData= (await axios.get(`users/${id}`)).data
        console.log(apiData);
        dispatch({type: GET_USER, payload: apiData})
    }
  }
  export const clearUserSearch = () => {
    return async (dispatch) => {
      const clear = []
      dispatch({ type: CLEAR_SEARCH, payload: clear });
    };
  };