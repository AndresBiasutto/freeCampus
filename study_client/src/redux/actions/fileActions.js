export const UPLODAD_FILE= "UPLODAD_FILE";
export const GET_FILES= "GET_FILES";
import axios from "../../api/axios";

export const uploadFile = (file) => ({
    type: UPLODAD_FILE,
    payload: file,
  });
  export const getFiles = ()=> {
    return async (dispatch)=>{
        const apiData= (await axios.get(`${"files"}`)).data
        dispatch({type: GET_FILES, payload: apiData})
    }
}