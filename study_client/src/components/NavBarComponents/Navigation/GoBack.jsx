import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";


const GoBack = () => {
    const navigate= useNavigate();

  const goBack= ()=> navigate(-1);
  return (
    <button className=" rounded-xl h-6 w-6 flex justify-center items-center bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-dark-text" title="Volver a la página anterior" onClick={goBack} ><IoIosArrowBack /></button>
  )
}

export default GoBack