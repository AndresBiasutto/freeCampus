import PropTypes from "prop-types";
import CreateSubjectBtn from "../../atoms/SubjectCardAtoms/buttons/CreateSubjectBtn";
import Spinner from "../../atoms/CommonAtoms/Spinner";
import isTeacher from "../../../Libs/isTeacher";
import Container from "../../molecules/CommonMolecules/Container";
import SubjectCard from "../../molecules/Cards/SubjectCard";

const SubjectsContainer = (props) => {
  const { mySubjects, role, name } = props;

  return (
    <Container className=" p-4 mt-4 mb-4 rounded-lg w-full md:w-3/5 bg-light-background dark:bg-dark-background flex flex-col items-center justify-start">
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
    </Container>
  );
};

SubjectsContainer.propTypes = {
  mySubjects: PropTypes.arrayOf(PropTypes.object),
  role: PropTypes.string,
  name: PropTypes.string,
};

export default SubjectsContainer;
