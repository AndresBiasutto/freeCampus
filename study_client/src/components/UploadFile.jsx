import { uploadFile } from "../redux/actions/fileActions";
import axios from "../api/axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getFiles } from "../redux/actions/fileActions";

const UploadFile = (props) => {
  // eslint-disable-next-line react/prop-types
  const moduleId = props.moduleId;
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
    formData.append("moduleId", moduleId); // Añadir el moduleId al FormData

    try {
      await axios.post("files/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      console.log(fileValue);
      dispatch(uploadFile(fileValue));
      alert("pdf subido correctamente");
      setFileValue(null); // Asegúrate de resetear a null para evitar warnings
      dispatch(getFiles());
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleBrowseClick = () => {
    document.getElementById("multi-upload-input").click();
  };

  return (
    <form
      className="container mx-auto h-full flex flex-col justify-center items-center"
      onSubmit={submitFile}
    >
      <div className="flex w-full justify-start">
        <div
          id="multi-upload-button"
          className="inline-flex items-center px-4 py-2 bg-sky-700 border border-sky-800 rounded-l font-semibold cursor-pointer text-sm text-white tracking-widest hover:bg-sky-300 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
          onClick={handleBrowseClick}
        >
          Buscar pdf
        </div>
        <div className="w-4/12 lg:w-3/12 border border-gray-300 flex items-center justify-between  bg-sky-100">
          <span id="multi-upload-text" className="p-2"></span>
          <p>{fileValue ? fileValue.name : errorMessage} </p>
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 bg-sky-700 border border-sky-300 rounded-r-lg font-semibold cursor-pointer text-sm text-white tracking-widest hover:bg-sky-300 active:bg-sky-300 focus:outline-none focus:border-sky-300 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
        >
          LISTO!
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
