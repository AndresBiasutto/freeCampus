import { Modal } from "flowbite-react";
import PropTypes from "prop-types";

const ModalMolecule = ({ showModal, handleToggleModal, title, children }) => {
  return (
    <Modal
      className="bg-light-lightBackground dark:bg-dark-darkBackground"
      show={showModal}
      onClose={handleToggleModal}
    >
      <Modal.Header className="flex items-center justify-center gap-2 bg-light-lightBackground dark:bg-dark-darkBackground rounded-t-lg">
        {title}
      </Modal.Header>
      <Modal.Body className="flex items-center justify-center bg-light-lightBackground dark:bg-dark-darkBackground rounded-b-lg">
        {children}
      </Modal.Body>
    </Modal>
  );
};

ModalMolecule.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleToggleModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalMolecule;
