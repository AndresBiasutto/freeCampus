import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ModuleCard = (props) => {
  const module = props.module;
  const number = props.number;

  return (
    <Link
      to={`/teacher/subjects/module/${module.id}`}
      className=" w-full col-span-12 sm:col-span-6 md:col-span-3"
    >
      <div className="flex flex-row bg-sky-800 shadow-sm rounded p-4">
        <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-sky-300 text-sky-800">
          <p className=" text-lg font-extrabold">{number} </p>
        </div>
        <div className="flex flex-col flex-grow ml-4">
          <div className="text-lg text-gray-100">{module.name}</div>
          <div className="text-sm text-sky-300">{module.description} </div>
        </div>
      </div>
    </Link>
  );
};

ModuleCard.propTypes = {
  module: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
  number: PropTypes.number.isRequired,
  subjectId: PropTypes.subjectId,
};

export default ModuleCard;
