import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types"

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

PrivateRoute.propTypes={
  children: PropTypes.node,
  roles: PropTypes.object
}

export default PrivateRoute;