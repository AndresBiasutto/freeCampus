import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import AdminPage from "./Views/AdminPage";
import LoginPage from "./Views/Login";
import UnauthorizedPage from "./Views/UnauthorizedPage";
import PrivateRoute from "./components/PrivateRoute";
import StudentPage from "./Views/StudentPage";
import ManagerPage from "./Views/ManagerPage";
import ClevelPage from "./Views/ClevelPage";
import { loadUserFromStorage } from "./redux/actions/actions";
import usePreserveRoute from "./hooks/usePreserveRoute";
import ClevelSchools from "./Views/ClevelSchools";
import ClevelSubjects from "./Views/ClevelSubjects";
import AsideBar from "./components/AsideBar";
import AdminHome from "./Views/AdminHome";
import AdminSubject from "./Views/AdminSubject";
import Files from "./Views/Files";
import TopBar from "./components/TopBar";
import AdminSubjectDetail from "./Views/AdminSubjectDetail";
import AdminModuleDetail from "./Views/AdminModuleDetail";
import TeacherHome from "./Views/TeachersPage/TeacherHome";
import TeacherSubjectDetail from "./Views/TeachersPage/TeacherSubjectDetail";
import TeacherModuleDetail from "./Views/TeachersPage/TeacherModuleDetail";
import TeacherSubjects from "./Views/TeachersPage/teacherSubjects";

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
      {location.pathname !== "/" && <TopBar />}
      {location.pathname !== "/" && <AsideBar />}

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<UnauthorizedPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/clevel"
          element={
            <PrivateRoute roles={["Clevel"]}>
              <ClevelPage />
            </PrivateRoute>
          }
        />
        <Route
          path="clevel/schools"
          element={
            <PrivateRoute roles={["Clevel"]}>
              <ClevelSchools />
            </PrivateRoute>
          }
        />
        <Route
          path="clevel/subjects"
          element={
            <PrivateRoute roles={["Clevel"]}>
              <ClevelSubjects />
            </PrivateRoute>
          }
        />

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
          path="/admin/files"
          element={
            <PrivateRoute roles={["Admin"]}>
              <Files />
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
          path="/manager"
          element={
            <PrivateRoute roles={["Manager"]}>
              <ManagerPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/student"
          element={
            <PrivateRoute roles={["Student"]}>
              <StudentPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
