import { useState } from "react";
import { useDispatch } from "react-redux";
import { getFiles } from "../../../redux/actions/fileActions";
import { addVideo } from "../../../redux/actions/moduleActions";
import { RiVideoAddLine } from "react-icons/ri";
import Spinner from "../../SistemComponents/Spinner";
import PropTypes from "prop-types";

const AddVideo = ({ chapterId }) => {
  const dispatch = useDispatch();
  const [linkValue, setLinkValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isUploading, setIsUploading] = useState(false); // Nuevo estado

  const submitLink = async (e) => {
    e.preventDefault();
    if (!linkValue) {
      setErrorMessage("Añadir URL del video");
      return;
    }

    const videoData = {
      videoUrl: linkValue,
      chapterId: chapterId,
    };

    try {
      setIsUploading(true); // Empezar a cargar
      dispatch(addVideo( videoData, chapterId));
      await dispatch(getFiles());
      setLinkValue("");
      setIsUploading(false); // Terminar de cargar
    } catch (error) {
      console.error("Error uploading video:", error);
      setIsUploading(false); // Terminar de cargar si hay error
    }
  };

  const handleLinkChange = (e) => {
    setLinkValue(e.target.value);
    setErrorMessage("");
  };

  return (
    <form
      className="mb-2 mx-auto h-full w-full flex flex-col justify-end items-center"
      onSubmit={submitLink}
    >
      <div className="flex w-full justify-end">
        <input
          type="text"
          value={linkValue}
          onChange={handleLinkChange}
          placeholder="Agregar URL del video"
          className="px-4 py-2 border border-gray-300 rounded-l-lg bg-light-lightBackground dark:bg-dark-darkBackground"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-light-blueBtn hover:bg-light-blueBtnHvr dark:bg-dark-blueBtn dark:hover:bg-dark-blueBtnHvr rounded-r-lg cursor-pointer text-light-text dark:text-dark-text tracking-wides disabled:opacity-25 transition"
          disabled={isUploading} // Deshabilitar el botón durante la carga
        >
          {!linkValue && !isUploading && <RiVideoAddLine />} {/* Icono */}
          {linkValue && !isUploading && "Agregar video"} {/* Texto si hay link */}
          {isUploading && <Spinner />} {/* Spinner durante la carga */}
        </button>
      </div>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </form>
  );
};

AddVideo.propTypes = {
  chapterId: PropTypes.string.isRequired,
};

export default AddVideo;
