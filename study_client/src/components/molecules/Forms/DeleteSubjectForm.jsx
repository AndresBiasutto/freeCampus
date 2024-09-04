import { MdOutlineCancel } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { deleteSubject } from "../../../redux/actions/subjectActions";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types"


const DeleteSubjectForm = ({ handleToggleModal, subjectId}) => {
    const dispatch= useDispatch();

    const deleteHandler = (subjectId) => {
        console.log(subjectId);
        dispatch(deleteSubject(subjectId));
        setTimeout(() => {
        handleToggleModal()            
        }, 1000);

      };
  return (
    <div className=" flex items-center justify-center">
    <div className=" bg-light-lightBackground dark:bg-dark-darkBackground p-4 rounded-lg flex justify-around items-center flex-col">
      <p className=" text-light-text dark:text-dark-text mb-2">
        Todos los datos relacionados tambien seran borrados
      </p>
      <div className=" w-auto flex flex-row items-center justify-between gap-4">
        <button
          onClick={() => deleteHandler(subjectId)}
          className=" flex justify-center items-center h-6 w-6 rounded-xl bg-red-300 hover:bg-red-400 text-dark-text dark:text-light-text"
        >
          <MdDeleteOutline />
        </button>
        <button
          onClick={handleToggleModal}
          className=" flex justify-center items-center h-6 w-6 rounded-xl bg-gray-500 hover:bg-gray-600 text-dark-text dark:text-light-text"
        >
          <MdOutlineCancel />
        </button>
      </div>
    </div>
  </div>
  )
}

DeleteSubjectForm.propTypes= {
    handleToggleModal: PropTypes.func,
    subjectId: PropTypes.string
}

export default DeleteSubjectForm