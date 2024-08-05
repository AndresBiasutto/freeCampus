import SubjectForm from "./SubjectForm";
import { TiDocumentAdd } from "react-icons/ti";
import { useState } from "react";

const CreateSubjectBtn = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className=" group w-60 h-64 relative transition bg-light-lightBackground dark:bg-dark-darkBackground rounded-lg hover:scale-105">
      <h3 className=" w-full text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl group-hover:text-2xl transition-all text-light-text dark:text-dark-text">
        agregar materia
      </h3>
      <button
        onClick={toggleModal}
        className=" absolute group-hover:scale-150 transition-all top-2 right-2 flex justify-center items-center h-6 w-6 rounded-xl bg-light-blueBtn hover:bg-light-blueBtnHvr dark:bg-dark-blueBtn dark:hover:bg-dark-blueBtnHvr text-light-text dark:text-dark-text"
      >
        <span className=" group-hover:scale-125 transition-all w-full flex flex-row items-center justify-center gap-4">
          <TiDocumentAdd className="" />
        </span>
      </button>
      {showModal && (
        <SubjectForm turnModal={showModal} setTurnModal={setShowModal} />
      )}
    </div>
  );
};

export default CreateSubjectBtn;
