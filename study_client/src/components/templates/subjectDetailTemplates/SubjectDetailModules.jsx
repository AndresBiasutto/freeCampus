import Spinner from "../../atoms/CommonAtoms/Spinner";
import PropTypes from "prop-types";
import CreateModuleBtn from "../../atoms/ModuleCardAtoms/buttons/CreateModuleBtn";
import ModuleCardIndex from "../../molecules/ModuleCard/ModuleCardIndex";

const SubjectDetailModules = ({
  subjectModules,
  subjectName,
  role,
  subjectId,
}) => {
  return (
    <div className="p-4 mt-4 mb-4 rounded-lg w-full md:w-3/5 bg-light-background dark:bg-dark-background flex flex-col items-end justify-start gap-4">
      {role === "teacher" && (
        <CreateModuleBtn subjectId={subjectId} subjectName={subjectName} />
      )}
      {subjectModules ? (
        <ModuleCardIndex subjectModules={subjectModules} />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

SubjectDetailModules.propTypes = {
  subjectModules: PropTypes.object,
  subjectName: PropTypes.string,
  role: PropTypes.string,
  subjectId: PropTypes.string,
};

export default SubjectDetailModules;
