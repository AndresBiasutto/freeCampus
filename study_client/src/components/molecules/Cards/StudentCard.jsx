import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const StudentCard = ({ student }) => {
  const { role, name } = useSelector((state) => state.auth);

  return (
    <div className="w-full h-20 p-2 flex items-center space-x-4 transition hover:bg-light-accent dark:hover:bg-dark-accent">
      <div className="flex-shrink-0">
        {student.image ? (
          <img
            className="w-8 h-8 rounded-full"
            src={student.image}
            alt={`${student.name}`}
          />
        ) : (
          <div className=" relative w-8 h-8 flex justify-center items-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <FaUser className=" text-2xl " />
          </div>
        )}
      </div>
      <Link
        to={`/${role}/${name}/userdetail/${student.id}`}
        className=" w-full h-full flex flex-row justify-start items-center min-w-0"
      >
        <div className="flex flex-col justify-center items-start">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {student.name}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {student.email}
          </p>
        </div>

      </Link>

    </div>
  );
};

StudentCard.propTypes = {
  student: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    image: PropTypes.string,
    Role: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default StudentCard;
