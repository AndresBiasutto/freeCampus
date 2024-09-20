import { MdOutlineCancel } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { deleteUser } from "../../../redux/actions/userActions";
import { useState } from "react";

const DeleteUserForm = ({ handleToggleModal, userId }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  const {token} = useSelector(state => state.auth)
  const [showMessage, setShowMessage] = useState(false);

  const deleteHandler = (userId) => {
    dispatch(deleteUser(userId, token));
    setShowMessage(true); // Mostrar el mensaje después de un tiempo.
    setTimeout(() => {

      setTimeout(() => {
        handleToggleModal(); // Cerrar el modal después de un tiempo.
      }, 2000);
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-light-lightBackground dark:bg-dark-darkBackground p-4 rounded-lg flex justify-around items-center flex-col">
        <p className="text-light-text dark:text-dark-text mb-2">
          Todos los datos relacionados también serán borrados.
        </p>
        <div className="w-auto flex flex-row items-center justify-between gap-4">
          <button
            onClick={() => deleteHandler(userId)}
            className="flex justify-center items-center h-6 w-6 rounded-xl bg-red-300 hover:bg-red-400 text-dark-text dark:text-light-text"
          >
            <MdDeleteOutline />
          </button>
          <button
            onClick={handleToggleModal}
            className="flex justify-center items-center h-6 w-6 rounded-xl bg-gray-500 hover:bg-gray-600 text-dark-text dark:text-light-text"
          >
            <MdOutlineCancel />
          </button>
        </div>
        {showMessage && user.data && <p>{user.data}</p>}
      </div>
    </div>
  );
};

DeleteUserForm.propTypes = {
  handleToggleModal: PropTypes.func,
  userId: PropTypes.string,
};

export default DeleteUserForm;
