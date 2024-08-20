import { Modal } from "flowbite-react";
import { useState } from "react";
import PropTypes from "prop-types";
import CreateChapterForm from "./CreacteChapterForm";
import { GrChapterAdd } from "react-icons/gr";

const CreateChapterModal = (props) => {
  const id = props.id;
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        className="w-full h-10 p-2 m-2 flex justify-center items-center gap-2 bg-light-blueBtn hover:bg-light-blueBtnHvr dark:bg-dark-blueBtn dark:hover:bg-dark-blueBtnHvr transition rounded-lg text-light-text dark:text-dark-text "
        onClick={() => setOpenModal(true)}
      >
        Agregar Capitulo <GrChapterAdd />
      </button>
      <Modal
        className=" bg-light-lightBackground dark:bg-dark-darkBackground"
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header className="flex items-center justify-center gap-2 bg-light-lightBackground dark:bg-dark-darkBackground rounded-t-lg">
          Crear Capitulo
        </Modal.Header>
        <Modal.Body className="flex items-center justify-center bg-light-lightBackground dark:bg-dark-darkBackground rounded-b-lg">
          <CreateChapterForm id={id} setOpenModal={setOpenModal} />
        </Modal.Body>
      </Modal>
    </>
  );
};
CreateChapterModal.propTypes = {
  id: PropTypes.string.isRequired,
};
export default CreateChapterModal;