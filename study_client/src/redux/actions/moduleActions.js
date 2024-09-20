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
export const UPDATE_MODULE = "UPDATE_MODULE";
import axios from "../../api/axios";

export const createModule = (subject) => ({
  type: CREATE_MODULE,
  payload: subject,
});
export const getModules = (token) => {
  return async (dispatch) => {
    const apiData = (
      await axios.get(`${"modules"}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    ).data;
    dispatch({ type: GET_MODULES, payload: apiData });
  };
};
export const getOneModule = (id, token) => {
  return async (dispatch) => {
    const apiData = (
      await axios.get(`modules/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    ).data;
    dispatch({ type: GET_MODULE, payload: apiData });
  };
};
export const getOneChapter = (id, token) => {
  return async (dispatch) => {
    const apiData = (
      await axios.get(`modules/chapters/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    ).data;
    dispatch({ type: GET_CHAPTER, payload: apiData });
  }; 
};
export const addModule = (moduleData, token) => async (dispatch) => {
  try {
    // const response = await axios.post('https://freecampus-back.onrender.com/modules', moduleData);
    const response = await axios.post("modules", moduleData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: ADD_MODULE_SUCCESS, payload: response.data });
    dispatch(getModules(token));
  } catch (error) {
    dispatch({ type: ADD_MODULE_FAILURE, payload: error });
  }
};
export const updateModule = (moduleId, updateData, token) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch(`modules/${moduleId}`, updateData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: UPDATE_MODULE, payload: response.data });
      dispatch(getModules(token));
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };
};
export const addChapter = (formData, token) => async (dispatch) => {
  try {
    // const response = await axios.post('https://freecampus-back.onrender.com/modules', moduleData);
    const response = await axios.post("modules/chapters", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: ADD_CHAPTER_SUCCESS, payload: response.data });
    dispatch(getModules(token));
  } catch (error) {
    dispatch({ type: ADD_CHAPTER_FAILURE, payload: error });
  }
};
export const addVideo = (moduleData, token) => async (dispatch) => {
  try {
    const response = await axios.post("modules/chapters/videos", moduleData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // const response = await axios.post('https://freecampus-back.onrender.com/modules/videos', moduleData);
    dispatch({ type: ADD_VIDEO_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: ADD_VIDEO_FAILURE, payload: error });
  }
};
export const deleteModule = (id, token) => {
  return async (dispatch) => {
    const apiData = (
      await axios.delete(`modules/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    ).data;
    dispatch(getModules(token));
    dispatch({ type: DELETE_MODULE, payload: apiData });
  };
};
