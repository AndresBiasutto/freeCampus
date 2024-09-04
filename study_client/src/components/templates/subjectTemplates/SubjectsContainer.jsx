import SubjectCard from "../../molecules/SubjectCard/IndexSubjectCard";
import PropTypes from "prop-types";
import CreateSubjectBtn from "../../atoms/SubjectCardAtoms/buttons/CreateSubjectBtn";
import Spinner from "../../SistemComponents/Spinner";
import isTeacher from "../../../Libs/isTeacher";

const SubjectsContainer = (props) => {
  const { mySubjects, role, name } = props;

  return (
    <div className=" p-4 mt-4 mb-4 rounded-lg w-full md:w-3/5 bg-light-background dark:bg-dark-background flex flex-col items-center justify-start">
      <div className=" grid grid-flow-row gap-4 w-full">
        <div className="w-full flex flex-row justify-end items-end">
          {isTeacher(role) && <CreateSubjectBtn />}
        </div>
        {mySubjects ? (
          mySubjects.map((subject) => (
            <SubjectCard
              key={subject.id}
              subject={subject}
              name={name}
              role={role}
            />
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

SubjectsContainer.propTypes = {
  mySubjects: PropTypes.arrayOf(PropTypes.object),
  role: PropTypes.string,
  name: PropTypes.string,
};

export default SubjectsContainer;
