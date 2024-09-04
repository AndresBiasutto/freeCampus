import PropTypes from "prop-types";
import { useEffect } from "react";
import SubjectImage from "./SubjectImage";
import SubjectBody from "./SubjectBody";
import Buttons from "./Buttons";
import isTeacher from "../../../Libs/isTeacher";

const IndexSubjectCard = ({ subject, role, name }) => {
  useEffect(() => {}, [subject]);
  return (
    <div className="relative group w-full h-28 p-2 flex flex-row justify-start items-center gap-2 bg-light-primary dark:bg-dark-primary hover:bg-light-accent dark:hover:bg-dark-accent transition rounded-lg overflow-hidden">
      <SubjectImage image={subject.image} />
      <SubjectBody userName={name} subjectId={subject.id} name={subject.name} description={subject.description} creator={subject.creator.name} />
      {isTeacher(role) && (<Buttons subjectId={subject.id} />)}
    </div>
  );
};

IndexSubjectCard.propTypes = {
  subject: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    department: PropTypes.string,
    image: PropTypes.string,
    creator: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
  name: PropTypes.string,
  role: PropTypes.string,
};

export default IndexSubjectCard;