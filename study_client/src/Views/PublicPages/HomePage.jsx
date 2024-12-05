import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import campusLogo from "../../assets/img/campusLogo.svg";
import { Link } from "react-router-dom";

const HomePage = () => {
  const {
    loginWithRedirect,
    logout,
    isAuthenticated,
    user,
    isLoading,
    getIdTokenClaims,
    error
  } = useAuth0();
  useEffect(() => {
    console.log("error: ", error);
  }, [error])
  

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getIdTokenClaims();
      console.log("ID Token:", token);
    };
  
    if (isAuthenticated) {
      fetchToken();
    }
  }, [isAuthenticated]);
  useEffect(() => {
    if (isAuthenticated) {
      console.log("User is authenticated:", user);
    } else {
      console.log("User not authenticated");
    }
  }, [isAuthenticated, user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full flex items-center flex-col gap-5 justify-center bg-gradient-to-br from-light-background to-light-lightBackground min-h-screen overflow-auto">
      <img src={campusLogo} alt="Campus Logo" />
      <div className="w-full flex justify-center items-center">
        {!isAuthenticated ? (
          <button onClick={loginWithRedirect}>Login</button>
        ) : (
          <>
            <p>Bienvenido, {user?.name}</p>
            <img
              src={user?.picture}
              alt="Profile"
              className="rounded-full w-16 h-16"
            />
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Logout
            </button>
          </>
        )}
        <Link
          to="/login"
          className="p-2 w-1/2 text-center bg-dark-primary text-dark-text hover:bg-dark-secondary rounded-lg"
        >
          Ingresar
        </Link>
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default HomePage;
