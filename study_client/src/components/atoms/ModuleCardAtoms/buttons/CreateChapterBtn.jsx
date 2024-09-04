import PropTypes from "prop-types";
import CreateChapterForm from "../../../molecules/Forms/CreateChapterForm";
import { GrChapterAdd } from "react-icons/gr";
import ModalMolecule from "../../../molecules/CommonMolecules/ModalMolecule";
import useToggleModal from "../../../../hooks/useToggleModal";

const CreateChapterBtn = ({ id }) => {
  const { showModal, handleToggleModal } = useToggleModal();

  return (
    <>
      <button
        className="w-full h-10 p-2 m-2 flex justify-center items-center gap-2 bg-light-blueBtn hover:bg-light-blueBtnHvr dark:bg-dark-blueBtn dark:hover:bg-dark-blueBtnHvr transition rounded-lg text-light-text dark:text-dark-text "
        onClick={handleToggleModal}
      >
        Agregar Capitulo <GrChapterAdd />
      </button>

      <ModalMolecule
        showModal={showModal}
        handleToggleModal={handleToggleModal}
      >
        <CreateChapterForm id={id} handleToggleModal={handleToggleModal} />
      </ModalMolecule>
    </>
  );
};
CreateChapterBtn.propTypes = {
  id: PropTypes.string.isRequired,
};
export default CreateChapterBtn;
