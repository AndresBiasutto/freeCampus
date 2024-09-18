import { LiaUserEditSolid } from "react-icons/lia";
import useToggleModal from "../../../hooks/useToggleModal";
import ModalMolecule from "../../molecules/CommonMolecules/ModalMolecule";
import UserForm from "../../molecules/Forms/UserForm";
import propTypes from "prop-types";

const EditProfile = ({ userId }) => {
  const { showModal, handleToggleModal } = useToggleModal(false);

  return (
    <div className="">
      <button
        onClick={handleToggleModal}
        className="flex justify-center items-center h-6 w-6 rounded-xl bg-dark-secondary hover:bg-dark-primary dark:bg-light-secondary dark:hover:bg-light-primary text-dark-text dark:text-light-text"
        title="editar mi perfil"
      >
        <LiaUserEditSolid />
      </button>
      <ModalMolecule
        title="Editar mi perfil"
        showModal={showModal}
        handleToggleModal={handleToggleModal}
      >
        <UserForm userId={userId} />
      </ModalMolecule>
    </div>
  );
};
EditProfile.propTypes = {
  userId: propTypes.string,
};
export default EditProfile;
