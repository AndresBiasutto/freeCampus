import SubjectCard from "../../components/SubjectComponents/SubjectCard";

import PropTypes from "prop-types";
import CreateSubjectBtn from "./CreateSubjectBtn";
import Spinner from "../SistemComponents/Spinner";

const SubjectsContainer = (props) => {
  const { mySubjects, role, name } = props;

  return (
    <div>
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
        {role === "teacher" && <CreateSubjectBtn /> }
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
  toggleModal: PropTypes.func.isRequired,
  mySubjects: PropTypes.arrayOf(PropTypes.object).isRequired,
  role: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SubjectsContainer;
