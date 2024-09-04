import { NAVIGATION_ROUTE } from "../actions/navActions";

const initialNavState = {
  route: "home",
};

const navigationReducer = (state = initialNavState, action) => {
  switch (action.type) {
    case NAVIGATION_ROUTE:
      return {
        ...state,
        route: action.payload,
      };
    default:
      return state;
  }
};

export default navigationReducer;