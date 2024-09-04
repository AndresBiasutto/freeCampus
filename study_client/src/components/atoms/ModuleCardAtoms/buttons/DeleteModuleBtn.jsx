import { MdDeleteOutline } from "react-icons/md";
import PropTypes from "prop-types";
import useToggleModal from "../../../../hooks/useToggleModal";
import ModalMolecule from "../../../molecules/CommonMolecules/ModalMolecule";
import DeleteModuleForm from "../../../molecules/Forms/DeleteModuleForm";

const DeleteModuleBtn = (props) => {
  const { showModal, handleToggleModal } = useToggleModal();
  const moduleId = props.moduleId;
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
        title="Borrar Semestre"
      >
        <DeleteModuleForm
          handleToggleModal={handleToggleModal}
          moduleId={moduleId}
        />
      </ModalMolecule>
    </div>
  );
};

DeleteModuleBtn.propTypes = {
  moduleId: PropTypes.string,
};

export default DeleteModuleBtn;
