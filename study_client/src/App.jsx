import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import AdminPage from "./Views/AdminPage/AdminPage";
import LoginPage from "./Views/PublicPages/Login";
import UnauthorizedPage from "./Views/PublicPages/UnauthorizedPage";
import PrivateRoute from "./components/PrivateRoute";
import { loadUserFromStorage } from "./redux/actions/actions";
import usePreserveRoute from "./hooks/usePreserveRoute";
import AsideBar from "./components/AsideBarComponents/AsideBar";
import AdminHome from "./Views/AdminPage/AdminHome";
import AdminSubject from "./Views/AdminPage/AdminSubject";
import TopBar from "./components/AsideBarComponents/TopBar";
import AdminSubjectDetail from "./Views/AdminPage/AdminSubjectDetail";
import AdminModuleDetail from "./Views/AdminPage/AdminModuleDetail";
import TeacherHome from "./Views/TeachersPage/TeacherHome";
import TeacherSubjectDetail from "./Views/TeachersPage/TeacherSubjectDetail";
import TeacherModuleDetail from "./Views/TeachersPage/TeacherModuleDetail";
import TeacherSubjects from "./Views/TeachersPage/teacherSubjects";
import StudentHome from "./Views/StudentsPage/StudentHome";
import StudentSubjectDetail from "./Views/StudentsPage/StudentSubjectDetail";
import StudentModuleDetail from "./Views/StudentsPage/StudentModuleDetail";
import HomePage from "./Views/PublicPages/HomePage";
import UsersCPannel from "./Views/PublicPages/UsersCPannel";
import UserDetail from "./Views/PublicPages/UserDetail";
import UserSettings from "./Views/PublicPages/UserSettings";

const App = () => {
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
    <div>
      {location.pathname !== "/" && location.pathname !== "/login" && (
        <TopBar />
      )}
      {location.pathname !== "/" && location.pathname !== "/login" && (
        <AsideBar />
      )}

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<UnauthorizedPage />} />
        <Route path="/" element={<HomePage />} />

        {/* ----------Admin routes---------- */}

        <Route
          path="/admin"
          element={
            <PrivateRoute roles={["Admin"]}>
              <AdminPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/home"
          element={
            <PrivateRoute roles={["Admin"]}>
              <AdminHome />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/subjects"
          element={
            <PrivateRoute roles={["Admin"]}>
              <AdminSubject />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/subjects/:id"
          element={
            <PrivateRoute roles={["Admin"]}>
              <AdminSubjectDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/subjects/:id/:id"
          element={
            <PrivateRoute roles={["Admin"]}>
              <AdminModuleDetail />
            </PrivateRoute>
          }
        />

        {/* ----------Teacher routes---------- */}

        <Route
          path="/teacher/home"
          element={
            <PrivateRoute roles={["teacher"]}>
              <TeacherHome />
            </PrivateRoute>
          }
        />
        <Route
          path="/teacher/subjects"
          element={
            <PrivateRoute roles={["teacher"]}>
              <TeacherSubjects />
            </PrivateRoute>
          }
        />
        <Route
          path="/teacher/subjects/:id"
          element={
            <PrivateRoute roles={["teacher"]}>
              <TeacherSubjectDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/teacher/subjects/module/:id"
          element={
            <PrivateRoute roles={["teacher"]}>
              <TeacherModuleDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/teacher/users"
          element={
            <PrivateRoute roles={["teacher"]}>
              <UsersCPannel />
            </PrivateRoute>
          }
        />
        <Route
          path="/users/:id"
          element={
            <PrivateRoute roles={["teacher", "student"]}>
              <UserDetail />
            </PrivateRoute>
          }
        />
                <Route
          path="/settings"
          element={
            <PrivateRoute roles={["teacher", "student"]}>
              <UserSettings />
            </PrivateRoute>
          }
        />
        {/* ----------Student routes---------- */}

        <Route
          path="/student/home"
          element={
            <PrivateRoute roles={["student"]}>
              <StudentHome />
            </PrivateRoute>
          }
        />
        <Route
          path="/student/subjects/:id"
          element={
            <PrivateRoute roles={["student"]}>
              <StudentSubjectDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/student/subjects/module/:id"
          element={
            <PrivateRoute roles={["student"]}>
              <StudentModuleDetail />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
