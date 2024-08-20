import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";


const GoForward = () => {
    const navigate= useNavigate();

  const GoForward= ()=> navigate(1);
  return (
    <button className=" rounded-xl h-6 w-6 flex justify-center items-center bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-dark-text" title="Volver a la página anterior" onClick={GoForward} ><IoIosArrowForward /></button>
  )
}

export default GoForward