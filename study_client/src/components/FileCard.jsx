import { FaFilePdf, FaArrowRight } from "react-icons/fa";
import PropTypes from "prop-types";

const FileCard = (props) => {
  const file = props.file;
  return (
    <div className="relative mt-6 flex w-56 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-sm font-thin leading-snug tracking-normal text-blue-gray-900 antialiased">
          {file.data.originalname}
        </h5>
        <FaFilePdf className="text-9xl text-gray-100" />
      </div>
      <div className="p-6 pt-0">
        <a
          className="!font-medium !text-blue-gray-900 !transition-colors hover:!text-pink-500"
          href={file.data.publicurl}
          target="_blank"
          rel="noreferrer"
        >
          <button
            className="flex select-none items-center gap-2 rounded-lg py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-dark="true"
          >
            Leer el archivo
            <FaArrowRight />
          </button>
        </a>
      </div>
    </div>
  );
};

FileCard.propTypes = {
    file: PropTypes.shape({
      data: PropTypes.shape({
        originalname: PropTypes.string.isRequired,
        publicurl: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  };
  
export default FileCard;
