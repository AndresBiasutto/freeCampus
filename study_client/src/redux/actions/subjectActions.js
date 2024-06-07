export const CREATE_SUBJECT = "CREATE_SUBJECT";
export const GET_SUBJECTS = "GET_SUBJECTS";
export const GET_SUBJECT = "GET_SUBJECT";
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