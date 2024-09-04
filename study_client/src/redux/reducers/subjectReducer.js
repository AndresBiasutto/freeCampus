import {
    CREATE_SUBJECT,
    GET_SUBJECTS,
    GET_SUBJECT,
    DELETE_SUBJECT,
    GET_SUBJECT_BY_NAME,
    ADD_STUDENT,
    UPDATE_SUBJECT,
    SET_EXAM_DATE,
    SET_SCHEDULE_DATE,
  } from "../actions/subjectActions";
  
  const initialSubjectState = {
    subjects: [],
    subject: {},
    subjectSearch: [],
    students: [],
  };
  
  const subjectReducer = (state = initialSubjectState, action) => {
    switch (action.type) {
      case CREATE_SUBJECT:
      case SET_EXAM_DATE:
      case SET_SCHEDULE_DATE:
      case UPDATE_SUBJECT:
      case GET_SUBJECT:
        return {
          ...state,
          subject: action.payload,
        };
      case GET_SUBJECTS:
        return {
          ...state,
          subjects: action.payload,
        };
      case GET_SUBJECT_BY_NAME:
        return {
          ...state,
          subjectSearch: action.payload,
        };
      case ADD_STUDENT:
        return {
          ...state,
          students: action.payload,
        };
      case DELETE_SUBJECT:
        return {
          ...state,
          subject: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default subjectReducer;