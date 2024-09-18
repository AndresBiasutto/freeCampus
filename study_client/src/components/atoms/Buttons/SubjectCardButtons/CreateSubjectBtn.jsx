import CreateSubjectForm from "../../../molecules/Forms/CreateSubjectForm";
import { TiDocumentAdd } from "react-icons/ti";
import useToggleModal from "../../../../hooks/useToggleModal";
import PropTypes from "prop-types";
import ModalMolecule from "../../../molecules/CommonMolecules/ModalMolecule";

const CreateSubjectBtn = ({ id }) => {
  const { showModal, handleToggleModal } = useToggleModal(false);

  return (
    <>
      <button
        className=" w-1/3 h-10 p-2 flex justify-center items-center gap-2 bg-light-blueBtn hover:bg-light-blueBtnHvr dark:bg-dark-blueBtn dark:hover:bg-dark-blueBtnHvr transition rounded-lg text-light-text dark:text-dark-text "
        onClick={handleToggleModal}
      >
        Agregar Materia <TiDocumentAdd />
      </button>
      <ModalMolecule
        showModal={showModal}
        handleToggleModal={handleToggleModal}
        title="Crear Materia"
      >
        <CreateSubjectForm id={id} setOpenModal={handleToggleModal} />
      </ModalMolecule>
    </>
  );
};

CreateSubjectBtn.propTypes = {
  id: PropTypes.string,
};

export default CreateSubjectBtn;
