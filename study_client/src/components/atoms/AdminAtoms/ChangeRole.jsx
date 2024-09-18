import { RiUserSettingsLine } from "react-icons/ri";

import useToggleModal from "../../../hooks/useToggleModal";

const ChangeRole = () => {
  const { showModal, handleToggleModal } = useToggleModal(false);

  return (
    <div>
      <button
        onClick={handleToggleModal}
        className="flex justify-center items-center h-6 w-6 rounded-xl bg-dark-secondary hover:bg-dark-primary dark:bg-light-secondary dark:hover:bg-light-primary text-dark-text dark:text-light-text"
        title="cambiar rol"
      >
        <RiUserSettingsLine />

      </button>
    </div>
  );
};

export default ChangeRole;