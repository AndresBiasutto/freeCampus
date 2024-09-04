import Schedule from "../../molecules/ScheduleMolecules/Schedule";
import Spinner from "../../atoms/CommonAtoms/Spinner";
import PropTypes from "prop-types";


const SubjectDetailSchedule = ({subjectName, examDates, subjectId, scheduleDates}) => {
  return (
    <div className="p-4 mt-4 mb-4 rounded-lg w-full md:w-3/5 bg-light-background dark:bg-dark-background flex flex-col items-center justify-start">
    {subjectName && examDates ? (
      <Schedule subjectName={subjectName} scheduleDates={scheduleDates} subjectId={subjectId} />
    ) : (
      <Spinner />
    )}
  </div>
  )
}

SubjectDetailSchedule.propTypes= {
    subjectId: PropTypes.string,
    subjectName: PropTypes.string,
    examDates: PropTypes.object,
    scheduleDates:PropTypes.scheduleDates
}

export default SubjectDetailSchedule