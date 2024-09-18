import { CiEdit } from "react-icons/ci";
import PropTypes from "prop-types";
import EditSubjectForm from "../../../molecules/Forms/EditSubjectForm";
import ModalMolecule from "../../../molecules/CommonMolecules/ModalMolecule";
import useToggleModal from "../../../../hooks/useToggleModal";

const EditSubjectBtn = ({ subjectId }) => {
  const { showModal, handleToggleModal } = useToggleModal(false);

  return (
    <div className="">
      <button
        onClick={handleToggleModal}
        className="flex justify-center items-center h-6 w-6 rounded-xl bg-light-blueBtn hover:bg-light-blueBtnHvr dark:bg-dark-blueBtn dark:hover:bg-dark-blueBtnHvr text-light-text dark:text-dark-text"
      >
        <CiEdit />
      </button>
      <ModalMolecule
        showModal={showModal}
        handleToggleModal={handleToggleModal}
        title="Editar Materia"
      >
        <EditSubjectForm
          subjectId={subjectId}
          handleToggleModal={handleToggleModal}
        />
      </ModalMolecule>
    </div>
  );
};

EditSubjectBtn.propTypes = {
  subjectId: PropTypes.string,
};

export default EditSubjectBtn;
