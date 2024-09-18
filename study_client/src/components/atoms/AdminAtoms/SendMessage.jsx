import { IoMailOpenOutline } from "react-icons/io5";
import useToggleModal from "../../../hooks/useToggleModal";

const SendMessage = () => {
  const { showModal, handleToggleModal } = useToggleModal(false);

  return (
    <div>
      <button
        onClick={handleToggleModal}
        className="flex justify-center items-center h-6 w-6 rounded-xl bg-dark-secondary hover:bg-dark-primary dark:bg-light-secondary dark:hover:bg-light-primary text-dark-text dark:text-light-text"
        title="enviar mensaje"
      >
        <IoMailOpenOutline />
      </button>
    </div>
  );
};

export default SendMessage;
