import BigCalendar from "../../molecules/CalendarMolecules/BigCalendar";
import Spinner from "../../atoms/CommonAtoms/Spinner";
import PropTypes from "prop-types";

const SubjectDetailCalendar = ({
  examDates,
  subjectId,
  dateStart,
  dateEnd,
  subjectName,
  role,
}) => {
  return (
    <div className="p-4 mt-4 mb-4 rounded-lg w-full md:w-3/5 bg-light-background dark:bg-dark-background flex flex-col items-center justify-start">
      {examDates ? (
        <BigCalendar
          id={subjectId}
          dateStart={dateStart}
          dateEnd={dateEnd}
          subjectName={subjectName}
          examDates={examDates}
          role={role}
        />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

SubjectDetailCalendar.propTypes = {
  examDates: PropTypes.object,
  subjectId: PropTypes.string,
  dateStart: PropTypes.string,
  dateEnd: PropTypes.string,
  role: PropTypes.string,
  subjectName: PropTypes.string,
};

export default SubjectDetailCalendar;
