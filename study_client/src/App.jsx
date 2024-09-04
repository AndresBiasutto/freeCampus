import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import LoginPage from "./Views/PublicPages/Login";
import UnauthorizedPage from "./Views/PublicPages/UnauthorizedPage";
import PrivateRoute from "./components/PrivateRoute";
import { loadUserFromStorage } from "./redux/actions/authActions";
import usePreserveRoute from "./hooks/usePreserveRoute";
import HomePage from "./Views/PublicPages/HomePage";
import UserSettings from "./Views/PublicPages/UserSettings";
import Register from "./Views/PublicPages/Register";
import NavBar from "./components/NavBarComponents/NavBar";
import Dashboard from "./Views/Dashboard";
import Subjects from "./Views/Subjects";
import SubjectDetail from "./Views/SubjectDetail";
import Chapter from "./Views/Chapter";

const App = () => {
  const { name } = useSelector((state) => state.auth);
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
      {location.pathname !== "/" &&
        location.pathname !== "/login" &&
        location.pathname !== "/register" && <NavBar />}

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<UnauthorizedPage />} />
        <Route path="/" element={<HomePage />} />

        <Route
          path={`${name}/dashboard`}
          element={
            <PrivateRoute roles={["teacher", "student"]}>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path={`/${name}/subjects`}
          element={
            <PrivateRoute roles={["teacher", "student"]}>
              <Subjects />
            </PrivateRoute>
          }
        />
        <Route
          path={`/${name}/subjects/:id`}
          element={
            <PrivateRoute roles={["teacher", "student"]}>
              <SubjectDetail />
            </PrivateRoute>
          }
        />
        <Route
          path={`/${name}/subjects/module/chapters/:id`}
          element={
            <PrivateRoute roles={["teacher", "student"]}>
              <Chapter />
            </PrivateRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <PrivateRoute roles={["teacher", "student", "admin"]}>
              <UserSettings />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
