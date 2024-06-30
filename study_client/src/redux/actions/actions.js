export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";
export const LOAD_USER_FROM_STORAGE = "LOAD_USER_FROM_STORAGE";

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const logout = () => ({
  type: LOGOUT,
});

export const loadUserFromStorage = () => {
  return (dispatch) => {
    const token = window.localStorage.getItem('token');
    const name = window.localStorage.getItem('name');
    const role = window.localStorage.getItem('role');
    const image = window.localStorage.getItem('image');
    const id= window.localStorage.getItem('id')
    const enrolledSubjects= window.localStorage.getItem('enrolledSubjects')

    if (token) {
      const user = {
        token,
        name,
        role,
        image,
        id,
        enrolledSubjects
      };
      dispatch(loginSuccess(user));
    }
  };
};
