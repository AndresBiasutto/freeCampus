import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ModuleCard = (props) => {
  const moduleFromProp = props.module;
  const number = props.number;
  const moduleId= moduleFromProp.id
  const {role}= useSelector(state => state.auth)

  return (
    <Link
      to={`/${role}/subjects/module/${moduleId}`}
      className=" w-full col-span-12 sm:col-span-6 md:col-span-3 "
      moduleid={moduleId}
    >
      <div className="flex flex-row bg-sky-800 hover:bg-sky-700 shadow-sm rounded p-4">
        <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-sky-300 text-sky-800">
          <p className=" text-lg font-extrabold">{number} </p>
        </div>
        <div className="flex flex-col flex-grow ml-4">
          <div className="text-lg text-gray-100">{moduleFromProp.name}</div>
          <div className="text-sm text-sky-300">{moduleFromProp.description} </div>
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
