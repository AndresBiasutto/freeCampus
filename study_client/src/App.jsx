import NavBar from "./v2Components/templates/NavBar";
import LandingFooter from "./v2Components/templates/LandingFooter";
import { Route, Routes } from "react-router-dom";
import Landing from "./Views/PublicPages/Landing";
import HomePage from "./Views/PublicPages/HomePage";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { UnauthorizedPage } from "./Views/PublicPages/PublicPagexIndex";
import {  registerUser } from "./redux/actions/userActions";
import { useDispatch, /*useSelector*/ } from "react-redux";
import ProtectedRoute from "./layouts/ProtectedRoute";

const App = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0();
  // const users = useSelector((state) => state.user.users);
  // const [emailVerified, setEmailVerified] = useState(false)
  const [newUser, setNewUser] = useState({});
  useEffect(() => {
    const checkUser = async () => {
      if (isAuthenticated) {
          const token = await getAccessTokenSilently();
          setNewUser({
            name: user?.nickname,
            image: user?.picture,
            e_mail: user?.email,
            role: 3,
          })
          console.log(newUser, token);
          dispatch(registerUser(newUser, token))
      }
    };
    checkUser();
  }, [isAuthenticated]);
  // useEffect(() => {
  //   if(isAuthenticated && user.email_verified){
      
  //   }
  
  // }, [isAuthenticated, user.email_verified])

  // useEffect(() => {
  //   isAuthenticated && dispatch(getAllUsers());
  // }, [dispatch, isAuthenticated]);
  // useEffect(() => {
  //   console.log(newUser);
  // }, [newUser]);

  // useEffect(() => {
  //   if (isAuthenticated && user?.email) {
  //     const emailExists = users.some((dbUser) => dbUser.email === user.email);
  //     setNewUser(emailExists);
  //     if (emailExists) {
  //       console.log("ya existe");
  //     } else {
  //       console.log("es nuevo");
  //       dispatch(registerUser(newUser));
  //     }
  //   }
  // }, [isAuthenticated, user, users, newUser, dispatch]);

  // useEffect(() => {
  //   const fetchToken = async () => {
  //     if (isAuthenticated) {
  //       try {
  //         const token = await getAccessTokenSilently();
  //         const actualUser = user;
  //         console.log("Access Token: ", token);
  //         console.log("Actual User: ", actualUser);
  //       } catch (error) {
  //         console.error("Error fetching access token:", error);
  //       }
  //     }
  //   };

  //   fetchToken();
  // }, [isAuthenticated, getAccessTokenSilently, user]);

  

  return (
    <div className="h-full min-h-screen transition bg-light-background dark:bg-dark-background flex flex-col justify-start items-center">
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing isNew={!newUser} />} />
        <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />

        <Route path="/*" element={<UnauthorizedPage />} />
      </Routes>
      <LandingFooter />
    </div>
  );
};

export default App;

// import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import PrivateRoute from "./components/atoms/CommonAtoms/PrivateRoute";
// import { loadUserFromStorage } from "./redux/actions/authActions";
// import usePreserveRoute from "./hooks/usePreserveRoute";
// import NavBar1 from "./components/templates/navBarTemplates/NavBar";
// import {
//   HomePage,
//   // HomePage,
//   Login,
//   Register,
//   UnauthorizedPage,
//   UserSettings,
// } from "./Views/PublicPages/PublicPagexIndex";
// import {
//   Chapter,
//   Cpannel,
//   Dashboard,
//   SubjectDetail,
//   Subjects,
// } from "./Views/ViewIndex";
// import UserDetail from "./Views/UserDetail";
// import Authorize from "./Views/PublicPages/Authorize";

// const { name, role } = useSelector((state) => state.auth);
// const dispatch = useDispatch();
// const navigate = useNavigate();
// const location = useLocation();

// usePreserveRoute();

// useEffect(() => {
//   dispatch(loadUserFromStorage());
//   const lastVisitedPath = window.localStorage.getItem("lastVisitedPath");
//   if (lastVisitedPath && lastVisitedPath !== "/login") {
//     navigate(lastVisitedPath, { replace: true });
//   }
// }, [dispatch, navigate]);

{
  /* {location.pathname !== "/" &&
        location.pathname !== "/login" &&
        location.pathname !== "/authorize" && <NavBar1 />} */
}

{
  /* 
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/authorize" element={<Authorize />} />
        <Route path="/register" element={<Register />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Landing />} />
        <Route
          path={`${role}/${name}/cpannel`}
          element={
            <PrivateRoute roles={["admin"]}>
              <Cpannel />
            </PrivateRoute>
          }
        />
        <Route
          path={`${name}/dashboard`}
          element={
            <PrivateRoute roles={["admin", "teacher", "student"]}>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path={`/dashboard`}
          element={
            <PrivateRoute roles={["admin", "teacher", "student"]}>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path={`/${role}/${name}/subjects`}
          element={
            <PrivateRoute roles={["teacher", "student"]}>
              <Subjects />
            </PrivateRoute>
          }
        />
        <Route
          path={`/${role}/${name}/subjects/:id`}
          element={
            <PrivateRoute roles={["admin", "teacher", "student"]}>
              <SubjectDetail />
            </PrivateRoute>
          }
        />
        <Route
          path={`/${name}/subjects/module/chapters/:id`}
          element={
            <PrivateRoute roles={["admin", "teacher", "student"]}>
              <Chapter />
            </PrivateRoute>
          }
        />
        <Route
          path={`/${role}/${name}/settings/:id`}
          element={
            <PrivateRoute roles={["teacher", "student", "admin"]}>
              <UserSettings />
            </PrivateRoute>
          }
        />
        <Route
          path={`/${role}/${name}/userdetail/:id`}
          element={
            <PrivateRoute roles={["admin"]}>
              <UserDetail />
            </PrivateRoute>
          }
        />
      </Routes> */
}
