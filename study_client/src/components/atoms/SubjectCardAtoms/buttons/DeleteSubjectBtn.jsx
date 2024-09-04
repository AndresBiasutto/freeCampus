import { MdDeleteOutline } from "react-icons/md";
import useToggleModal from "../../../../hooks/useToggleModal";
import PropTypes from "prop-types";
import ModalMolecule from "../../../molecules/CommonMolecules/ModalMolecule";
import DeleteSubjectForm from "../../../molecules/Forms/DeleteSubjectForm";

const DeleteSubjectBtn = ({ subjectId }) => {
  const { showModal, handleToggleModal } = useToggleModal();

  return (
    <div className="">
      <button
        onClick={handleToggleModal}
        type="button"
        className=" flex justify-center items-center h-6 w-6 rounded-xl bg-light-redBtn hover:bg-light-redBtnHvr dark:bg-dark-redBtn dark:hover:bg-dark-redBtnHvr text-light-text dark:text-dark-text"
      >
        <MdDeleteOutline />
      </button>
      <ModalMolecule
        showModal={showModal}
        handleToggleModal={handleToggleModal}
        title="borrar Materia"
      >
        <DeleteSubjectForm
          handleToggleModal={handleToggleModal}
          subjectId={subjectId}
        />
      </ModalMolecule>
    </div>
  );
};

DeleteSubjectBtn.propTypes = {
  subjectId: PropTypes.string,
};

export default DeleteSubjectBtn;
