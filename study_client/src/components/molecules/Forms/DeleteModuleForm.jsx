import { deleteModule } from "../../../redux/actions/moduleActions";
import { useDispatch, useSelector } from "react-redux";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import PropTypes from "prop-types"

const DeleteModuleForm = ({moduleId, handleToggleModal}) => {
  const {token}= useSelector(state => state.auth)
    const dispatch= useDispatch();

    const deleteHandler = (moduleId) => {
         dispatch(deleteModule(moduleId, token))



         handleToggleModal();
      };

  return (
    <div className="absolute left-0 flex items-center justify-center">
    <div className=" bg-light-lightBackground dark:bg-dark-darkBackground p-4 rounded-lg shadow-lg flex justify-around items-center flex-col">
      <h2 className=" text-light-text dark:text-dark-text mb-2" >Todos los datos relacionados tambien seran borrados</h2>
      <div className=" w-auto flex flex-row items-center justify-between gap-4">
      <button
      onClick={() => deleteHandler(moduleId)}
       className=" flex justify-center items-center h-6 w-6 rounded-xl bg-red-300 hover:bg-red-400 text-dark-text dark:text-light-text">
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

DeleteModuleForm.propTypes={
    moduleId: PropTypes.string,
    handleToggleModal: PropTypes.func
}

export default DeleteModuleForm