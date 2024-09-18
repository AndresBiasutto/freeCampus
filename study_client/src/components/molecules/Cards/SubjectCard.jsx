import PropTypes from "prop-types";
import { useEffect } from "react";
import SubjectImage from "../../atoms/ImageAtoms/SubjectImage";
import SubjectBody from "../../atoms/CardBodys/SubjectBody";
import Buttons from "../../atoms/ButtonGroups/SubjectButtons";
import isTeacher from "../../../Libs/isTeacher";

const SubjectCard = ({ subject, role, name }) => {
  useEffect(() => {}, [subject]);
  return (
    <div className="relative group w-full h-28 p-2 flex flex-row justify-start items-center gap-2 bg-light-primary dark:bg-dark-primary hover:bg-light-accent dark:hover:bg-dark-accent transition rounded-lg overflow-hidden">
      <SubjectImage image={subject.image} />
      <SubjectBody role={role} userName={name} subjectId={subject.id} name={subject.name} description={subject.description} creator={subject.creator.name} />
      {isTeacher(role) && (<Buttons subjectId={subject.id} />)}
    </div>
  );
};

SubjectCard.propTypes = {
  subject: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    department: PropTypes.string,
    image: PropTypes.string,
    creator: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
  name: PropTypes.string,
  role: PropTypes.string,
};

export default SubjectCard;