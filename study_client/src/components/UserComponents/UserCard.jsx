import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserCard = (props) => {

  const student = props.student;
  return (
    <div className=" w-full flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img
          className="w-8 h-8 rounded-full"
          src={student.image}
          alt="Neil image"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
          {student.name}
        </p>
        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
          {student.email}
        </p>
      </div>
      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        <Link to={`/users/${student.id}`}> ver perfil</Link>
        
        <button> echar</button>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  student: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserCard;