import axios from "../../../api/axios";
import { uploadFile } from "../../../redux/actions/fileActions";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getFiles } from "../../../redux/actions/fileActions";

const UploadFile = (props) => {
  // eslint-disable-next-line react/prop-types
  const chapterId = props.chapterId;
  // eslint-disable-next-line react/prop-types
  const token = props.token;
  const dispatch = useDispatch();
  const [fileValue, setFileValue] = useState(null);
  const [errorMessage, seterrorMessage] = useState("");

  useEffect(() => {}, [fileValue]);

  const submitFile = async (e) => {
    e.preventDefault();
    if (!fileValue) {
      seterrorMessage("selecciona un archivo");
      console.log("no se ha seleccionado ningún archivo");
      return;
    }

    const formData = new FormData();
    formData.append("file", fileValue);
    formData.append("chapterId", chapterId); // Añadir el chapterId al FormData

    try {
      await axios.post("modules/chapters/files", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      dispatch(uploadFile(fileValue));
      alert("pdf subido correctamente");
      setFileValue(null); // Asegúrate de resetear a null para evitar warnings
      dispatch(getFiles(chapterId, token));
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleBrowseClick = () => {
    document.getElementById("multi-upload-input").click();
  };

  return (
    <form
      className="container mx-auto h-full w-full flex flex-col justify-end items-center"
      onSubmit={submitFile}
    >
      <div className="flex w-full justify-end">
        <div
          id="multi-upload-button"
          className=" w-full inline-flex items-center justify-center flex-nowrap px-1 py-2 cursor-pointer text-sm  tracking-widest rounded-l-lg bg-light-blueBtn hover:bg-light-blueBtnHvr dark:bg-dark-blueBtn dark:hover:bg-dark-blueBtnHvr text-light-text dark:text-dark-text active:bg-gray-900  transition"
          onClick={handleBrowseClick}
        >
          Buscar pdf
        </div>
        <div className="w-full lg:w-full border border-gray-300 flex items-center justify-center bg-light-lightBackground dark:bg-dark-darkBackground">

          <p className=" w-full flex-nowrap text-light-text dark:text-dark-text" >{fileValue ? fileValue.name : errorMessage} </p>
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 cursor-pointer text-sm  tracking-widest rounded-r-lg bg-light-blueBtn hover:bg-light-blueBtnHvr dark:bg-dark-blueBtn dark:hover:bg-dark-blueBtnHvr text-light-text dark:text-dark-text active:bg-gray-900  transition"
        >
          Listo
        </button>
      </div>
      <input
        type="file"
        id="multi-upload-input"
        className="hidden"
        onChange={(e) => setFileValue(e.target.files[0])}
        multiple
      />
    </form>
  );
};

export default UploadFile;
