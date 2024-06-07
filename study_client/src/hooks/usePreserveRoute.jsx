import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePreserveRoute = () => {
  const location = useLocation();

  useEffect(() => {
    window.localStorage.setItem('lastVisitedPath', location.pathname);
  }, [location]);
};

export default usePreserveRoute;