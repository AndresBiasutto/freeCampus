import {
  CREATE_MODULE,
  GET_MODULES,
  GET_MODULE,
  ADD_MODULE_SUCCESS,
  ADD_VIDEO_SUCCESS,
  ADD_VIDEO_FAILURE,
  ADD_CHAPTER_FAILURE,
  ADD_CHAPTER_SUCCESS,
  GET_CHAPTER,
} from "../actions/moduleActions";

const initialModuleState = {
  module: {},
  modules: [],
  chapter: {},
};

const moduleReducer = (state = initialModuleState, action) => {
  switch (action.type) {
    case GET_MODULES:
      return {
        ...state,
        modules: action.payload,
      };
    case CREATE_MODULE:
      return {
        ...state,
        module: action.payload,
      };
    case GET_MODULE:
      return {
        ...state,
        module: action.payload,
      };
    case GET_CHAPTER:
      return {
        ...state,
        chapter: action.payload,
      };
    case ADD_MODULE_SUCCESS:
      return {
        ...state,
        module: action.payload,
      };
    case ADD_CHAPTER_SUCCESS:
      return {
        ...state,
        chapter: action.payload,
      };
    case ADD_CHAPTER_FAILURE:
      return {
        ...state,
        chapter: action.payload,
      };
    case ADD_VIDEO_SUCCESS:
      return {
        ...state,
        module: action.payload,
      };
    case ADD_VIDEO_FAILURE:
      return {
        ...state,
        module: action.payload,
      };
    default:
      return state;
  }
};

export default moduleReducer;
