export const CREATE_MODULE = "CREATE_MODULE";
export const GET_MODULES = "GET_MODULES";
export const GET_MODULE = "GET_MODULE";
export const GET_CHAPTER = "GET_CHAPTER";
export const ADD_MODULE_SUCCESS = "ADD_MODULE_SUCCESS";
export const ADD_MODULE_FAILURE = "ADD_MODULE_FAILURE";
export const ADD_CHAPTER_SUCCESS = "ADD_CHAPTER_SUCCESS";
export const ADD_CHAPTER_FAILURE = "ADD_CHAPTER_FAILURE";
export const ADD_VIDEO_SUCCESS = "ADD_VIDEO_SUCCESS";
export const ADD_VIDEO_FAILURE = "ADD_VIDEO_FAILURE";
export const DELETE_MODULE = "DELETE_MODULE";
import axios from "../../api/axios";

export const createModule = (subject) => ({
  type: CREATE_MODULE,
  payload: subject,
});
export const getModules = () => {
  return async (dispatch) => {
    const apiData = (await axios.get(`${"modules"}`)).data;
    dispatch({ type: GET_MODULES, payload: apiData });
  };
};
export const getOneModule = (id)=> {
  return async (dispatch)=>{
      const apiData= (await axios.get(`modules/${id}`)).data
      dispatch({type: GET_MODULE, payload: apiData})
  }
}
export const getOneChapter = (id)=> {
  return async (dispatch)=>{
      const apiData= (await axios.get(`modules/chapters/${id}`)).data
      dispatch({type: GET_CHAPTER, payload: apiData})
  }
}
export const addModule = (moduleData) => async (dispatch) => {
  try {
    // const response = await axios.post('https://freecampus-back.onrender.com/modules', moduleData);
     const response = await axios.post('modules', moduleData);
    dispatch({ type: ADD_MODULE_SUCCESS, payload: response.data });
    dispatch(getModules());
  } catch (error) {
    dispatch({ type: ADD_MODULE_FAILURE, payload: error });
  }
};
export const addChapter = (formData) => async (dispatch) => {
  try {
    // const response = await axios.post('https://freecampus-back.onrender.com/modules', moduleData);
     const response = await axios.post('modules/chapters', formData);
    dispatch({ type: ADD_CHAPTER_SUCCESS, payload: response.data });
    dispatch(getModules());
  } catch (error) {
    dispatch({ type: ADD_CHAPTER_FAILURE, payload: error });
  }
};
export const addVideo = (moduleData) => async (dispatch) => {
  try {
    const response = await axios.post('modules/chapters/videos', moduleData);
    // const response = await axios.post('https://freecampus-back.onrender.com/modules/videos', moduleData);
    dispatch({ type: ADD_VIDEO_SUCCESS, payload: response.data });

  } catch (error) {
    dispatch({ type: ADD_VIDEO_FAILURE, payload: error });
  }
};
export const deleteModule = (id)=> {
  return async (dispatch)=>{
      const apiData= (await axios.delete(`modules/${id}`)).data
      dispatch(getModules())
      dispatch({type: DELETE_MODULE, payload: apiData})
  }
}