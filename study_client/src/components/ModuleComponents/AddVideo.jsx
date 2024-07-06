import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getFiles } from "../../redux/actions/fileActions";
import { addVideo } from "../../redux/actions/moduleActions";

const AddVideo = ({ moduleId }) => {
  const dispatch = useDispatch();
  const [linkValue, setLinkValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {}, [linkValue]);

  const submitLink = async (e) => {
    e.preventDefault();
    if (!linkValue) {
      setErrorMessage("Añadir URL del video");
      console.log("No se ha seleccionado ningún link");
      return;
    }

    const videoData = {
      videoUrl: linkValue,
      moduleId: moduleId,
    };

    try {
      console.log(videoData);
      dispatch(addVideo(videoData));
      setLinkValue("");
      dispatch(getFiles());
    } catch (error) {
      console.error("Error uploading video:", error);
    }
  };

  const handleLinkChange = (e) => {
    setLinkValue(e.target.value);
    setErrorMessage("");
  };

  return (
    <form
      className="container mx-auto h-full flex flex-col justify-center items-center"
      onSubmit={submitLink}
    >
      <div className="flex w-full justify-start">
        <input
          type="text"
          value={linkValue}
          onChange={handleLinkChange}
          placeholder="Agregar URL del video"
          className="px-4 py-2 border border-gray-300 rounded-l"
        />
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 bg-sky-700 border border-sky-300 rounded-r-lg font-semibold cursor-pointer text-sm text-white tracking-widest hover:bg-sky-300 active:bg-sky-300 focus:outline-none focus:border-sky-300 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
        >
          LISTO!
        </button>
      </div>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </form>
  );
};

export default AddVideo;
