import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneSubject } from "../redux/actions/subjectActions";
import { getModules } from "../redux/actions/moduleActions";
import Spinner from "../components/atoms/CommonAtoms/Spinner";
import SubjectDetailModules from "../components/templates/subjectDetailTemplates/SubjectDetailModules";
import SubjectDetailCalendar from "../components/templates/subjectDetailTemplates/SubjectDetailCalendar";
import SubjectDetailSchedule from "../components/templates/subjectDetailTemplates/SubjectDetailSchedule";
import isTeacher from "../Libs/isTeacher";
import SubjectDetailStudentsTable from "../components/templates/subjectDetailTemplates/SubjectDetailStudentsTable";
import Background from "../components/molecules/CommonMolecules/Background";

const SubjectDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { role } = useSelector((store) => store.auth);
  const subject = useSelector((state) => state.subject.subject);
  const modules = useSelector((state) => state.modules.modules);
  const students = subject.students;
  const subjectModules = modules?.filter((mod) => subject.id === mod.subjectId);
  const subjectName = subject?.name;
  const dateStart = subject?.dateStart;
  const dateEnd = subject?.dateEnd;
  const examDates = subject?.examDates;
  const scheduleDates = subject?.scheduleDates;

  useEffect(() => {
    dispatch(getModules());
    dispatch(getOneSubject(id));
  }, [dispatch, id]);


  return (
    <Background>
      <SubjectDetailModules
        subjectModules={subjectModules}
        subjectName={subjectName}
        role={role}
        subjectId={id}
      />
      <SubjectDetailCalendar
        examDates={examDates}
        dateStart={dateStart}
        dateEnd={dateEnd}
        subjectId={id}
        subjectName={subjectName}
      />
      <SubjectDetailSchedule
        subjectId={id}
        subjectName={subjectName}
        examDates={examDates}
        scheduleDates={scheduleDates}
      />
       {isTeacher(role) ? (
        <SubjectDetailStudentsTable id={id} students={students} />
      ) : (
        <Spinner />
      )} 
    </Background>
  );
};

export default SubjectDetail;
