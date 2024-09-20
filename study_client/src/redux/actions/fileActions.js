export const UPLODAD_FILE = "UPLODAD_FILE";
export const GET_FILES = "GET_FILES";
import axios from "../../api/axios";
import { getOneChapter } from "./moduleActions";

export const uploadFile = (file) => ({
  type: UPLODAD_FILE,
  payload: file,
});
export const getFiles = (chapterId, token) => {
  return async (dispatch) => {
    const apiData = (
      await axios.get(`${"files"}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    ).data;
    dispatch(getOneChapter(chapterId, token));
    dispatch({ type: GET_FILES, payload: apiData });
  };
};
