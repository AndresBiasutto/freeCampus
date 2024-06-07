import { logout } from "../redux/actions/actions"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { RiLogoutBoxFill } from "react-icons/ri";

const LogOut = () => {
    const dispatch= useDispatch();
    const navigate = useNavigate();


    const handleLogout=()=>{
        dispatch(logout())
        window.localStorage.clear()
        navigate("/", { replace: true });
    }
  return (
    <button
    onClick={handleLogout}
    aria-label="chat"
    className="flex justify-center items-center text-xl w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
  >
    <RiLogoutBoxFill className="text-pink-500 hover:text-pink-600" />
  </button>
  )
}

export default LogOut