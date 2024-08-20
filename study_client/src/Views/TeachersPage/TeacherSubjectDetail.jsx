import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneSubject } from "../../redux/actions/subjectActions";
import ModuleCard from "../../components/ModuleComponents/ModuleCard";
import { getModules } from "../../redux/actions/moduleActions";
import PropTypes from "prop-types";
import CreateModuleModal from "../../components/ModuleComponents/ModuleForm/CreateModuleModal";
import ModuleCards from "../../components/ModuleComponents/ModuleCards/ModuleCards";
import BigCalendar from "../../components/UserComponents/Calendar/BigCalendar/BigCalendar";
import StudentsTable from "../../components/SubjectComponents/SubjectStudentComponents/StudentsTable";
import Spinner from "../../components/SistemComponents/Spinner";
import Schedule from "../../components/UserComponents/Calendar/Schedule/Schedule";

const TeacherSubjectDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const subject = useSelector((state) => state.subject);
  const modules = useSelector((state) => state.modules);
  const subjectModules = modules?.filter((mod) => subject.id === mod.subjectId);
  const students = subject.students;
  const subjectName = subject?.name;
  const dateStart = subject?.dateStart;
  const dateEnd = subject?.dateEnd;
  const examDates = subject?.examDates;
  const scheduleDates = subject?.scheduleDates;

  useEffect(() => {
    dispatch(getModules());
    dispatch(getOneSubject(id));
  }, [dispatch, id]);
  useEffect(() => {}, [subject?.students]);
  useEffect(() => {}, [subject?.examDates]);
  useEffect(() => {}, [subject?.scheduleDates]);

  return (
    <div className=" w-full pt-14 flex flex-col justify-center items-center align-center transition bg-light-lightBackground dark:bg-dark-darkBackground">
      <div className=" p-4 mt-4 mb-4 rounded-lg w-full md:w-3/5 bg-light-background dark:bg-dark-background flex flex-col items-center justify-start">
        <CreateModuleModal id={id} name={subject.name} />
        {subjectModules ? (
          <ModuleCards subjectModules={subjectModules} />
        ) : (
          <Spinner />
        )}
      </div>
      <div className=" p-4 mt-4 mb-4 rounded-lg w-full md:w-3/5 bg-light-background dark:bg-dark-background flex flex-col items-center justify-start">
        { examDates ? (
          <BigCalendar
            id={id}
            dateStart={dateStart}
            dateEnd={dateEnd}
            subjectName={subjectName}
            examDates={examDates}
          />
        ) : (
          <Spinner />
        )}
      </div>
      <div className=" p-4 mt-4 mb-4 rounded-lg w-full md:w-3/5 bg-light-background dark:bg-dark-background flex flex-col items-center justify-start">
        { subjectName && examDates ? (
          <Schedule subjectName={subjectName} scheduleDates={scheduleDates} subjectId={id} />
        ) : (
          <Spinner />
        )}
      </div>
      {students ? <StudentsTable id={id} students={students} /> : <Spinner />}
    </div>
  );
};

ModuleCard.propTypes = {
  module: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
  number: PropTypes.number.isRequired,
  subjectId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default TeacherSubjectDetail;
