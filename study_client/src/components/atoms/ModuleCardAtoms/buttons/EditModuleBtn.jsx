import { CiEdit } from "react-icons/ci";
import PropTypes from "prop-types";
import { useEffect } from "react";
import useToggleModal from "../../../../hooks/useToggleModal";
import ModalMolecule from "../../../molecules/CommonMolecules/ModalMolecule";
import EditModuleForm from "../../../molecules/Forms/EditModuleForm";

const EditModuleBtn = ({ moduleId }) => {
  const { showModal, handleToggleModal } = useToggleModal();
  useEffect(() => {}, [moduleId]);

  return (
    <div className="">
      <button
        onClick={handleToggleModal}
        className="flex justify-center items-center h-6 w-6 rounded-xl bg-light-blueBtn hover:bg-light-blueBtnHvr dark:bg-dark-blueBtn dark:hover:bg-dark-blueBtnHvr text-light-text dark:text-dark-text"
      >
        <CiEdit />
      </button>
      <ModalMolecule
        handleToggleModal={handleToggleModal}
        showModal={showModal}
        title="Editar semestre"
      >
        <EditModuleForm
          moduleId={moduleId}
          handleToggleModal={handleToggleModal}
        />
      </ModalMolecule>
    </div>
  );
};

EditModuleBtn.propTypes = {
  moduleId: PropTypes.string.isRequired,
};

export default EditModuleBtn;
