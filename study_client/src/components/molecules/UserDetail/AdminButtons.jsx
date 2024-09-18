import SendMessage from "../../atoms/AdminAtoms/SendMessage";
import ChangeRole from "../../atoms/AdminAtoms/ChangeRole";
import PropTypes from "prop-types";
import EditProfile from "../../atoms/AdminAtoms/EditProfile";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const AdminButtons = ({ role }) => {
  const location = useLocation();
  const {id}= useSelector(state=> state.auth)
const lastSlashIndex = location.pathname.lastIndexOf('/');
const locationId = location.pathname.slice(lastSlashIndex + 1);

  
  return (
    <div className="w-full flex flex-col items-end justify-center gap-2">
      <EditProfile />
      {(role === "admin" && id !== locationId) && (
        <div className="flex flex-col items-end justify-center gap-2">
          <SendMessage />
          <ChangeRole />
        </div>
      )}
    </div>
  );
};

AdminButtons.propTypes = {
  role: PropTypes.string,
};

export default AdminButtons;
