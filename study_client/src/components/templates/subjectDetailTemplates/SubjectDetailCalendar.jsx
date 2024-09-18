import BigCalendar from "../../molecules/CalendarMolecules/BigCalendar";
import Spinner from "../../atoms/CommonAtoms/Spinner";
import PropTypes from "prop-types";
import Container from "../../molecules/CommonMolecules/Container";

const SubjectDetailCalendar = ({
  examDates,
  subjectId,
  dateStart,
  dateEnd,
  subjectName,
  role,
}) => {
  return (
    <Container>
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
    </Container>
  );
};

SubjectDetailCalendar.propTypes = {
  examDates: PropTypes.array,
  subjectId: PropTypes.string,
  dateStart: PropTypes.string,
  dateEnd: PropTypes.string,
  role: PropTypes.string,
  subjectName: PropTypes.string,
};

export default SubjectDetailCalendar;
