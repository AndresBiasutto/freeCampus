import { useState } from "react";

const useToggleModal = () => {
  const [showModal, setShowModal] = useState(false);
  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return {
    showModal,
    handleToggleModal,
  };
};

export default useToggleModal;
