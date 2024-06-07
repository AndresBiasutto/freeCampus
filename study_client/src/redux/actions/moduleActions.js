export const CREATE_MODULE = "CREATE_MODULE";
export const GET_MODULES = "GET_MODULES";
export const GET_MODULE = "GET_MODULE";
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