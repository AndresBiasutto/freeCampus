import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const GoBack = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  return (
    <div>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        title="Volver a la página anterior"
        onClick={goBack}
      >
        <IoIosArrowBack />
        <span className="sr-only">volver</span>
      </button>
    </div>
  );
};

export default GoBack;
