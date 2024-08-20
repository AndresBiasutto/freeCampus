import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
// import AdminPage from "./Views/AdminPage/AdminPage";
import LoginPage from "./Views/PublicPages/Login";
import UnauthorizedPage from "./Views/PublicPages/UnauthorizedPage";
import PrivateRoute from "./components/PrivateRoute";
import { loadUserFromStorage } from "./redux/actions/actions";
import usePreserveRoute from "./hooks/usePreserveRoute";
//import AsideBar from "./components/AsideBarComponents/AsideBar";
// import AdminHome from "./Views/AdminPage/AdminHome";
// import AdminSubject from "./Views/AdminPage/AdminSubject";
//import TopBar from "./components/AsideBarComponents/TopBar";
// import AdminSubjectDetail from "./Views/AdminPage/AdminSubjectDetail";
// import AdminModuleDetail from "./Views/AdminPage/AdminModuleDetail";
// import TeacherHome from "./Views/TeachersPage/TeacherHome";
import TeacherSubjectDetail from "./Views/TeachersPage/TeacherSubjectDetail";
import TeacherModuleDetail from "./Views/TeachersPage/TeacherModuleDetail";
import TeacherSubjects from "./Views/TeachersPage/teacherSubjects";
import StudentSubjectDetail from "./Views/StudentsPage/StudentSubjectDetail";
import HomePage from "./Views/PublicPages/HomePage";
import UsersCPannel from "./Views/PublicPages/UsersCPannel";
// import UserDetail from "./Views/PublicPages/UserDetail";
import UserSettings from "./Views/PublicPages/UserSettings";
import Register from "./Views/PublicPages/Register";
import NavBar from "./components/NavBarComponents/NavBar";
import Dashboard from "./Views/TeachersPage/Dashboard";
import DashboardStudents from "./Views/StudentsPage/Dashboard";
import TeacherChapterDetail from "./Views/TeachersPage/TeacherChapterDetail";
import StudentSubjects from "./Views/StudentsPage/StudentSubjects";
import StudentChapterDetail from "./Views/StudentsPage/StudentChapterDetail";

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
    <div className="h-full transition bg-light-lightBackground dark:bg-dark-darkBackground">
      {/* {location.pathname !== "/" &&
        location.pathname !== "/login" &&
        location.pathname !== "/register" && <TopBar />}
      {location.pathname !== "/" &&
        location.pathname !== "/login" &&
        location.pathname !== "/register" && <AsideBar />} */}
      {location.pathname !== "/" &&
        location.pathname !== "/login" &&
        location.pathname !== "/register" && <NavBar />}

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<UnauthorizedPage />} />
        <Route path="/" element={<HomePage />} />

        {/* ----------Admin routes---------- */}

        {/* <Route
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
            <PrivateRoute roles={["admin"]}>
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
        /> */}

        {/* ----------Teacher routes---------- */}

        {/* <Route
          path="/teacher/home"
          element={
            <PrivateRoute roles={["teacher"]}>
              <TeacherHome />
            </PrivateRoute>
          }
        /> */}
        <Route
          path="/teacher/dashboard"
          element={
            <PrivateRoute roles={["teacher"]}>
              <Dashboard />
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
          path="/teacher/subjects/module/chapters/:id"
          element={
            <PrivateRoute roles={["teacher"]}>
              <TeacherChapterDetail />
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
        {/* <Route
          path="/users/:id"
          element={
            <PrivateRoute roles={["teacher", "student", "admin"]}>
              <UserDetail />
            </PrivateRoute>
          }
        /> */}
        <Route
          path="/settings"
          element={
            <PrivateRoute roles={["teacher", "student", "admin"]}>
              <UserSettings />
            </PrivateRoute>
          }
        />
        {/* ----------Student routes---------- */}

        <Route
          path="/student/dashboard"
          element={
            <PrivateRoute roles={["student"]}>
              <DashboardStudents />
            </PrivateRoute>
          }
        />
        <Route
          path="/student/subjects"
          element={
            <PrivateRoute roles={["student"]}>
              <StudentSubjects />
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
          path="/student/subjects/module/chapters/:id"
          element={
            <PrivateRoute roles={["student"]}>
              <StudentChapterDetail />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
