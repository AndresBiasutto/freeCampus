import axios from "../../api/axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getFiles } from "../../redux/actions/fileActions";

const AddVideo = (props) => {
  // eslint-disable-next-line react/prop-types
  const moduleId = props.moduleId;
  const dispatch = useDispatch();
  const [linkValue, setLinkValue] = useState(null);
  const [errorMessage, seterrorMessage] = useState("");

  useEffect(() => {}, [linkValue]);

  const submitLink = async (e) => {
    e.preventDefault();
    if (!linkValue) {
      seterrorMessage("añadir url del video");
      console.log("no se ha seleccionado ningún link");
      return;
    }

    const formData = new FormData();
    formData.append("file", linkValue);
    formData.append("moduleId", moduleId); // Añadir el moduleId al FormData

    try {
      await axios.post("files/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      console.log(linkValue);
      setLinkValue(null); // Asegúrate de resetear a null para evitar warnings
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
      onSubmit={submitLink}
    >
      <div className="flex w-full justify-start">
        <div
          id="multi-upload-button"
          className="inline-flex items-center px-4 py-2 bg-sky-700 border border-sky-800 rounded-l font-semibold cursor-pointer text-sm text-white tracking-widest hover:bg-sky-300 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
          onClick={handleBrowseClick}
        >
         Agregar url del video {linkValue ? linkValue : errorMessage}
        </div>

        <input type="text" value={linkValue} onChange={(e) => setLinkValue(e.target.value)} />
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 bg-sky-700 border border-sky-300 rounded-r-lg font-semibold cursor-pointer text-sm text-white tracking-widest hover:bg-sky-300 active:bg-sky-300 focus:outline-none focus:border-sky-300 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
        >
          LISTO!
        </button>
        <p>{linkValue ? linkValue.name : errorMessage} </p>
      </div>
      <input
        type="text"
        id="multi-upload-input"
        className="hidden"
        onChange={(e) => setLinkValue(e.target.files[0])}
        multiple
      />
    </form>
  );
};

export default AddVideo;
