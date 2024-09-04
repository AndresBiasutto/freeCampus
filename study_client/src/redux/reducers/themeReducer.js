import { TOGGLE_THEME } from "../actions/authActions";

const initialThemeState = {
  darkMode: false,
};

const themeReducer = (state = initialThemeState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};

export default themeReducer;