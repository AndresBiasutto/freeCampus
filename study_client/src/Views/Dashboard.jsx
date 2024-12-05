// import Calendar from "../../components/UserComponents/Calendar/Calendar";
import { getOneUser } from "../redux/actions/userActions";
// import MySubjects from "../../components/SubjectComponents/MySubjects";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubjects } from "../redux/actions/subjectActions";
import StudentSchedule from "../components/molecules/ScheduleMolecules/StudentSchedule";
import StudentCalendar from "../components/molecules/CalendarMolecules/StudentCalendar";
import Container from "../components/molecules/CommonMolecules/Container";
import Background from "../components/molecules/CommonMolecules/Background";
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
  const { logout}= useAuth0()
  const dispatch = useDispatch();
  const { role, id, name, token } = useSelector((store) => store.auth);
  const user = useSelector((store) => store?.user.user);
  const enrolledSubjects = user?.enrolledSubjects;
  const myExamDates = enrolledSubjects?.map((subject) => {
    return subject?.examDates;
  });
  const mySubjectSemesterDates = enrolledSubjects?.map((subject) => {
    const dates = subject?.dateStart &&
      subject?.dateEnd && {
        dateStart: subject?.dateStart,
        dateEnd: subject?.dateEnd,
        subjectName: subject?.name,
      };

    return { ...dates };
  });
  const scheduleDates = enrolledSubjects?.map((subject) => {
    return subject.scheduleDates;
  });
  useEffect(() => {
    dispatch(getSubjects(token));
    dispatch(getOneUser(id, token));
  }, [dispatch, id, token]);

  return (
    <Background>
      <Container>
        <div className="grid grid-row-2 gap-4 w-full">
          {/* <Calendar /> */}
          <p>Bienvenido {name} </p>
          {role === "student" && (
            <StudentCalendar
              mySubjectSemesterDates={mySubjectSemesterDates}
              myExamDates={myExamDates}
              role={role}
            />
          )}
          <button onClick={logout} >log out</button>
          {role === "student" && (
            <StudentSchedule scheduleDates={scheduleDates} />
          )}
        </div>
      </Container>
    </Background>
  );
};

export default Dashboard;
