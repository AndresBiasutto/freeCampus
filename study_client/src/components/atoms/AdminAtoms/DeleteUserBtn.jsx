import { TiUserDeleteOutline } from "react-icons/ti";
import useToggleModal from "../../../hooks/useToggleModal";
import ModalMolecule from "../../molecules/CommonMolecules/ModalMolecule";
import DeleteUserForm from "../../molecules/Forms/DeleteUserForm";
import PropTypes from "prop-types";

const DeleteUserBtn = ({ userId }) => {
  const { showModal, handleToggleModal } = useToggleModal();

  return (
    <div>
      <button onClick={handleToggleModal} className=" flex justify-center items-center h-6 w-6 rounded-xl bg-light-redBtn hover:bg-light-redBtnHvr dark:bg-dark-redBtn dark:hover:bg-dark-redBtnHvr text-light-text dark:text-dark-text">
        <TiUserDeleteOutline />
      </button>
      <ModalMolecule
        showModal={showModal}
        handleToggleModal={handleToggleModal}
      >
        <DeleteUserForm userId={userId} handleToggleModal={handleToggleModal} />
      </ModalMolecule>
    </div>
  );
};
DeleteUserBtn.propTypes = {
  userId: PropTypes.string,
};
export default DeleteUserBtn;
