import CreateModuleForm from "../../../molecules/Forms/CreateModuleForm";
import PropTypes from "prop-types";
import { LuBookPlus } from "react-icons/lu";
import ModalMolecule from "../../../molecules/CommonMolecules/ModalMolecule";
import useToggleModal from "../../../../hooks/useToggleModal";

const CreateModuleBtn = ({ subjectId, subjectName, role }) => {
  const { showModal, handleToggleModal } = useToggleModal();

  return (
    <>
      <div className="w-full flex flex-row justify-between items-center">
        <h3 className="w-full text-xl font-bold leading-none text-light-text dark:text-dark-text mb-2">
          {subjectName}
        </h3>
        {role === "teacher" && (
          <button
            className=" w-2/4 h-10 p-2 mb-4 flex justify-center items-center gap-2 bg-light-blueBtn hover:bg-light-blueBtnHvr dark:bg-dark-blueBtn dark:hover:bg-dark-blueBtnHvr transition rounded-lg text-light-text dark:text-dark-text "
            onClick={handleToggleModal}
          >
            Agregar semestre <LuBookPlus />
          </button>
        )}
      </div>

      <ModalMolecule
        showModal={showModal}
        handleToggleModal={handleToggleModal}
        title="Agregar semestre"
      >
        <CreateModuleForm subjectId={subjectId} />
      </ModalMolecule>
    </>
  );
};
CreateModuleBtn.propTypes = {
  subjectId: PropTypes.string,
  subjectName: PropTypes.string,
  role: PropTypes.string,
};
export default CreateModuleBtn;
