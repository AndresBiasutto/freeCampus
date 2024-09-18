import ModalMolecule from "../../molecules/CommonMolecules/ModalMolecule";
import useToggleModal from "../../../hooks/useToggleModal";
import PropTypes from "prop-types";
import { RiUserAddLine } from "react-icons/ri";
import RegisterUserForm from "../../molecules/Forms/RegisterUserForm";


const CreateUserBtn = ({id}) => {
    const { showModal, handleToggleModal } = useToggleModal();
  return (
    <>
      <button
        className="h-10 p-2 m-2 flex justify-center items-center gap-2 bg-light-blueBtn hover:bg-light-blueBtnHvr dark:bg-dark-blueBtn dark:hover:bg-dark-blueBtnHvr transition rounded-lg text-light-text dark:text-dark-text "
        onClick={handleToggleModal}
      >
        Agregar Usuario <RiUserAddLine />

      </button>

      <ModalMolecule
        showModal={showModal}
        handleToggleModal={handleToggleModal}
      >
      <RegisterUserForm id={id} handleToggleModal={handleToggleModal} />
      </ModalMolecule>
    </>
  );
};
CreateUserBtn.propTypes = {
  id: PropTypes.string,
};
export default CreateUserBtn