export const CREATE_SUBJECT = "CREATE_SUBJECT";
export const GET_SUBJECTS = "GET_SUBJECTS";
export const GET_SUBJECT = "GET_SUBJECT";
export const DELETE_SUBJECT = "DELETE_SUBJECT";
export const UPDATE_SUBJECT = "UPDATE_SUBJECT";
export const GET_SUBJECT_BY_NAME = "GET_SUBJECT_BY_NAME";
export const ADD_STUDENT = "ADD_STUDENT";
export const SET_EXAM_DATE= "SET_EXAM_DATE";
export const SET_SCHEDULE_DATE= "SET_SCHEDULE_DATE";
import axios from "../../api/axios";

export const createSubject = (subject) => ({
  type: CREATE_SUBJECT,
  payload: subject,
});
export const getSubjects = () => {
  return async (dispatch) => {
    const apiData = (await axios.get(`${"subjects"}`)).data;
    dispatch({ type: GET_SUBJECTS, payload: apiData });
  };
};
export const getOneSubject = (id)=> {
  return async (dispatch)=>{
      const apiData= (await axios.get(`subjects/${id}`)).data
      dispatch({type: GET_SUBJECT, payload: apiData})
  }
}
export const deleteSubject = (subjectId) => {
  return async (dispatch) => {
    const apiData = (await axios.delete(`subjects/${subjectId}`)).data;
    dispatch(getSubjects())
    dispatch({ type: GET_SUBJECTS, payload: apiData });
  };
};
export const setExamDate = ( calendarData) => {
  return async (dispatch) => {
    const apiData = (await axios.post(`subjects/examdates`, calendarData)).data;
    dispatch(getSubjects())
    dispatch({ type: SET_EXAM_DATE, payload: apiData });
  };
};
export const setScheduleTime = ( scheduleDates) => {
  return async (dispatch) => {
    const apiData = (await axios.post(`subjects/scheduledates`, scheduleDates)).data;
    dispatch(getSubjects())
    dispatch({ type: SET_SCHEDULE_DATE, payload: apiData });
  };
};
export const getSubjectByName= (name)=>{
  return async (dispatch)=>{
      const apidata= (await axios.get(`subjects/?name=${name}`)).data
      console.log(apidata);
      dispatch({type: GET_SUBJECT_BY_NAME, payload: apidata})
  }
}
export const updateSubject= (subjectId, updateData)=>{
  return async (dispatch) =>{
    try {
      const response = await axios.patch(`subjects/${subjectId}`, updateData)
      dispatch({ type: UPDATE_SUBJECT, payload: response.data });
      dispatch(getSubjects())
    } catch (error) {
      console.error("Error adding student:", error);
    }
  }
}
export const addUser = (subjectId, student) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch(`subjects/${subjectId}/students`, {
        studentsId: [student.studentId]
      });
      dispatch({ type: ADD_STUDENT, payload: response.data });
      dispatch(getOneSubject(subjectId))
    } catch (error) {
      console.error("Error adding student:", error);
      // Handle the error as needed
    }
  };
};