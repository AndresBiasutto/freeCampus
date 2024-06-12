export const CREATE_MODULE = "CREATE_MODULE";
export const GET_MODULES = "GET_MODULES";
export const GET_MODULE = "GET_MODULE";
export const ADD_MODULE_SUCCESS = "ADD_MODULE_SUCCESS";
export const ADD_MODULE_FAILURE = "ADD_MODULE_FAILURE";
import axios from "../../api/axios";

export const createModule = (subject) => ({
  type: CREATE_MODULE,
  payload: subject,
});
export const getModules = () => {
  return async (dispatch) => {
    const apiData = (await axios.get(`${"modules"}`)).data;
    console.log(apiData);
    dispatch({ type: GET_MODULES, payload: apiData });
  };
};
export const getOneModule = (id)=> {
  return async (dispatch)=>{
      const apiData= (await axios.get(`modules/${id}`)).data
      dispatch({type: GET_MODULE, payload: apiData})
  }
}
export const addModule = (moduleData) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3001/modules', moduleData);
    dispatch({ type: ADD_MODULE_SUCCESS, payload: response.data });
    dispatch(getModules());
  } catch (error) {
    dispatch({ type: ADD_MODULE_FAILURE, payload: error });
  }
};