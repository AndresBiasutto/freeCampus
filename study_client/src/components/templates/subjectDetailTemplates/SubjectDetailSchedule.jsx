import Schedule from "../../molecules/ScheduleMolecules/Schedule";
import Spinner from "../../atoms/CommonAtoms/Spinner";
import PropTypes from "prop-types";
import Container from "../../molecules/CommonMolecules/Container";

const SubjectDetailSchedule = ({ subjectName, examDates, subjectId, scheduleDates }) => {
  return (
    <Container>
      {subjectName && examDates ? (
        <Schedule subjectName={subjectName} scheduleDates={scheduleDates} subjectId={subjectId} />
      ) : (
        <Spinner />
      )}
    </Container>
  );
};

SubjectDetailSchedule.propTypes = {
  subjectId: PropTypes.string,
  subjectName: PropTypes.string,
  examDates: PropTypes.array, 
  scheduleDates: PropTypes.array, 
};

export default SubjectDetailSchedule;
