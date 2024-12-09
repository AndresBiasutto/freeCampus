import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
import PropTypes from "prop-types"

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/" />;
};

ProtectedRoute.propTypes={
    children: PropTypes.element
}

export default ProtectedRoute;
