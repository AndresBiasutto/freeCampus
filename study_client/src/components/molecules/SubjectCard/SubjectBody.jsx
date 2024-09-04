import { Link } from "react-router-dom";
import PropTypes from "prop-types"

const SubjectBody = ({subjectId, name, description, creator, userName}) => {
  return (
    <Link
    to={`/${userName}/subjects/${subjectId}`}
    className="h-full w-full flex flex-row items-start justify-start pr-8 "
  >
    <div className="h-full w-full flex flex-row items-start justify-start ">
      <div className="h-full w-full flex flex-col items-start justify-start ">
        <h3>{name} </h3>
        <p>{description} </p>
      </div>
      <div className=" w-auto">
        <p className="w-full font-primaryLight text-dark-text dark:text-light-text text-sm text-nowrap bg-dark-primary dark:bg-light-primary pr-1 pl-1 rounded-md">
          {creator}{" "}
        </p>
      </div>
    </div>
  </Link>
  )
}

SubjectBody.propTypes={
    subjectId: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    creator: PropTypes.string,
    userName: PropTypes.string
}

export default SubjectBody