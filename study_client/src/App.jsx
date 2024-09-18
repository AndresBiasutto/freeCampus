import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PrivateRoute from "./components/atoms/CommonAtoms/PrivateRoute";
import { loadUserFromStorage } from "./redux/actions/authActions";
import usePreserveRoute from "./hooks/usePreserveRoute";
import NavBar from "./components/templates/navBarTemplates/NavBar";
import {
  HomePage,
  Login,
  Register,
  UnauthorizedPage,
  UserSettings,
} from "./Views/PublicPages/PublicPagexIndex";
import {
  Chapter,
  Cpannel,
  Dashboard,
  SubjectDetail,
  Subjects,
} from "./Views/ViewIndex";
import UserDetail from "./Views/UserDetail";

const App = () => {
  const { name, role } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  usePreserveRoute();

  useEffect(() => {
    dispatch(loadUserFromStorage());
    const lastVisitedPath = window.localStorage.getItem("lastVisitedPath");
    if (lastVisitedPath && lastVisitedPath !== "/login") {
      navigate(lastVisitedPath, { replace: true });
    }
  }, [dispatch, navigate]);

  return (
    <div className="h-full min-h-screen transition bg-light-lightBackground dark:bg-dark-darkBackground">
      {location.pathname !== "/" && location.pathname !== "/login" && (
        <NavBar />
      )}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<UnauthorizedPage />} />
        <Route path="/" element={<HomePage />} />
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
            <PrivateRoute roles={["admin","teacher", "student"]}>
              <SubjectDetail />
            </PrivateRoute>
          }
        />
        <Route
          path={`/${name}/subjects/module/chapters/:id`}
          element={
            <PrivateRoute roles={["admin","teacher", "student"]}>
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
      </Routes>
    </div>
  );
};

export default App;
