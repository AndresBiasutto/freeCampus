import { Modal } from "flowbite-react";
import { useState } from "react";
import CreateModuleForm from "./CreateModuleForm";
import PropTypes from "prop-types";
import { LuBookPlus } from "react-icons/lu";

const CreateModuleModal = ({ id, name }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <h3 className="w-full text-xl font-bold leading-none text-light-text dark:text-dark-text mb-2">
        {name}
      </h3>
      <button
        className="w-full h-24 p-2 m-2 flex justify-center items-center gap-2 bg-light-blueBtn hover:bg-light-blueBtnHvr dark:bg-dark-blueBtn dark:hover:bg-dark-blueBtnHvr transition rounded-lg text-light-text dark:text-dark-text "
        onClick={() => setOpenModal(true)}
      >
        Agregar semestre <LuBookPlus />
      </button>
      <Modal
        className=" bg-light-lightBackground dark:bg-dark-darkBackground"
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header className="flex items-center justify-center bg-light-lightBackground dark:bg-dark-darkBackground rounded-t-lg">
          Crear semestre
        </Modal.Header>
        <Modal.Body className="flex items-center justify-center bg-light-lightBackground dark:bg-dark-darkBackground rounded-b-lg">
          <CreateModuleForm id={id} />
        </Modal.Body>
      </Modal>
    </>
  );
};
CreateModuleModal.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default CreateModuleModal;
