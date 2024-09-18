import Spinner from "../../atoms/CommonAtoms/Spinner";
import PropTypes from "prop-types";
import CreateModuleBtn from "../../atoms/ModuleCardAtoms/buttons/CreateModuleBtn";
import ModuleCardIndex from "../../molecules/ModuleCard/ModuleCardIndex";
import Container from "../../molecules/CommonMolecules/Container";

const SubjectDetailModules = ({
  subjectModules,
  subjectName,
  role,
  subjectId,
}) => {
  return (
    <Container>
      {role === "teacher" && (
        <CreateModuleBtn subjectId={subjectId} subjectName={subjectName} />
      )}
      {subjectModules ? (
        <ModuleCardIndex subjectModules={subjectModules} />
      ) : (
        <Spinner />
      )}
    </Container>
  );
};

SubjectDetailModules.propTypes = {
  subjectModules: PropTypes.array,
  subjectName: PropTypes.string,
  role: PropTypes.string,
  subjectId: PropTypes.string,
};

export default SubjectDetailModules;
