import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, roles }) => {
  const { isAuthenticated, role } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  if (roles && roles.indexOf(role) === -1) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;