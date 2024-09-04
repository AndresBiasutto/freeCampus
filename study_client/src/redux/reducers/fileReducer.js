import { UPLODAD_FILE, GET_FILES } from "../actions/fileActions";

const initialFileState = {
  file: null,
  files: null,
};

const fileReducer = (state = initialFileState, action) => {
  switch (action.type) {
    case UPLODAD_FILE:
      return {
        ...state,
        file: action.payload,
      };
    case GET_FILES:
      return {
        ...state,
        files: action.payload,
      };
    default:
      return state;
  }
};

export default fileReducer;