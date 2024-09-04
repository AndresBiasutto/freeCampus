import { logout } from "../../../../redux/actions/authActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import { MdOutlineCancel, MdCheckCircleOutline } from "react-icons/md";

const LogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setShowModal(!showModal);
  };

  const handleLogout = () => {
    dispatch(logout());
    window.localStorage.clear();
    navigate("/", { replace: true });
  };
  return (
    <div>
      <button
        onClick={toggleModal}
        className=" w-48 p-2 flex items-center space-x-4 bg-red-300 transition hover:bg-red-400 hover:font-bold rounded-md text-light-text dark:text-dark-text group"
      >
        <IoIosLogOut />
        <span>Logout</span>
      </button>
      {showModal && (
        <div className="absolute h-fit w-full z-50 inset-0 flex items-center justify-center">
          <div className=" w-full bg-light-background p-4 shadow-lg flex justify-around items-center flex-col">
            <h2 className=" mb-2 text-dark-text dark:text-light-text">¿Deseas salir?</h2>
            <div className=" w-auto flex flex-row items-center justify-between gap-4">
              <button
                onClick={handleLogout}
                className="bg-red-300 transition hover:bg-red-400 text-white p-2 rounded-lg w-auto"
              >
                <MdCheckCircleOutline />
              </button>
              <button
                onClick={toggleModal}
                className="bg-gray-500 transition hover:bg-gray-600 text-white p-2 rounded-lg w-25"
              >
                <MdOutlineCancel />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogOut;
