import axios from "../../api/axios";

export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_USER_BY_NAME = "GET_USER_BY_NAME";
export const CLEAR_SEARCH = "CLEAR_SEARCH";
export const GET_USER = "GET_USER";
export const UPDATE_USER = "UPDATE_USER";
export const CREATE_USER = "CREATE_USER";
export const FILTER_USERS = "FILTER_USERS";
export const DELETE_USER = "DELETE_USER";

export const getAllUsers = (token) => {
  return async (dispatch) => {
    const apiData = (
      await axios.get(`users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    ).data;
    dispatch({ type: GET_ALL_USERS, payload: apiData });
  };
};

export const getUserByName = (userName, token) => {
  return async (dispatch) => {
    const apiData = (await axios.get(`users/?name=${userName}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })).data;
    dispatch({ type: GET_USER_BY_NAME, payload: apiData });
  };
};

export const filterUsers = (userName, token) => {
  return async (dispatch) => {
    const apiData = (await axios.get(`users/?name=${userName}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })).data;
    dispatch({ type: FILTER_USERS, payload: apiData });
  };
};

export const getOneUser = (id, token) => {
  return async (dispatch) => {
    try {
      const apiData = (await axios.get(`users/${id}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })).data;
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

export const updateUser = (userId, update, token) => {
  return async (dispatch) => {
    try {
      const apiData = (await axios.patch(`users/${userId}`, update, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })).data;
      dispatch({ type: UPDATE_USER, payload: apiData });
      dispatch(getOneUser(userId, token))
    } catch (error) {
      console.error(`Error fetching user with ID ${userId}:`, error);
    }
  };
};
export const deleteUser = (userId, token ) => {
  return async (dispatch) => {
    try {
      const apiData = (await axios.delete(`users/delete/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })).data;

      // Capturar el mensaje del backend (asume que el mensaje llega en `apiData.message`)
      dispatch({ type: DELETE_USER, payload: apiData });

      // Actualizar la lista de usuarios
      dispatch(getAllUsers(token));
    } catch (error) {
      console.error(`Error deleting user with ID ${userId}:`, error);
    }
  };
};
export const createUser = (newUser, token) => {
  return async (dispatch) => {
    try {
      const apiData = (
        await axios.post("/users/signUp", newUser, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      ).data;
      dispatch({ type: CREATE_USER, payload: apiData });
      dispatch(getAllUsers(token));
    } catch (error) {
      console.error(error);
    }
  };
};
