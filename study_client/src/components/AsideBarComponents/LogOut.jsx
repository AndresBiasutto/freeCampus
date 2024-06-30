import { logout } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
      className=" px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group bg-gray-100 hover:bg-pink-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>
      <span className="group-hover:text-gray-700">Logout</span>

    </button>
    {showModal && (
        <div className=" z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg flex justify-around items-center flex-col">
            <h2>¿Estás seguro de que deseas salir??</h2>
            <div className=" w-auto flex flex-row items-center justify-between gap-4">
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white p-2 rounded-lg w-auto"
              >
                Si, salir
              </button>
              <button
                onClick={toggleModal}
                className="bg-gray-500 text-white p-2 rounded-lg w-25"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogOut;
