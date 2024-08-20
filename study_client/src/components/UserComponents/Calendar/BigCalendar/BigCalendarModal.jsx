import { Modal } from "flowbite-react";
import PropTypes from "prop-types";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import BigCalendarForm from "./BigCalendarForm";

const BigCalendarModal = ({ id, openModal, setOpenModal, selectedDate }) => {
  return (
    <>
      <Modal
        className=" bg-light-lightBackground dark:bg-dark-darkBackground"
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header className=" flex flex-row items-center justify-center gap-2 bg-light-lightBackground dark:bg-dark-darkBackground rounded-t-lg">
         <span className="flex flex-row items-center justify-center gap-2">Agregar Fecha <MdOutlineContentPasteSearch /></span>  
        </Modal.Header>
        <Modal.Body className="flex items-center justify-center bg-light-lightBackground dark:bg-dark-darkBackground rounded-b-lg">
          <BigCalendarForm id={id} setOpenModal={setOpenModal} selectedDate={selectedDate} />
        </Modal.Body>
      </Modal>
    </>
  );
};

BigCalendarModal.propTypes = {
  id: PropTypes.string.isRequired,
  openModal: PropTypes.bool,
  setOpenModal: PropTypes.func,
  selectedDate: PropTypes.instanceOf(Date),  // Ensure selectedDate is of Date type
};

export default BigCalendarModal;