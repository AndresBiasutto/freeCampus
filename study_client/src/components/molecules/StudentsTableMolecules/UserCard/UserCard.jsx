import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import DeleteUserBtn from "../../../atoms/AdminAtoms/DeleteUserBtn";

const UserCard = ({ student }) => {
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
        className=" w-full h-full flex flex-row justify-center items-center min-w-0"
      >
        <div className="flex flex-col justify-center items-start">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {student.name}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {student.email}
          </p>
        </div>
        <div className="w-full h-full flex flex-col justify-start items-end pt-1">
          <p className=" px-1 py-0 bg-dark-background dark:bg-light-background text-dark-text dark:text-light-text text-sm rounded-lg">
            {student.Role.name}
          </p>
        </div>
      </Link>
      <div className="flex flex-col justify-center items-center gap-2">
        <Link
          to={`/${role}/${name}/userdetail/${student.id}`}
          className="flex justify-center items-center h-6 w-6 rounded-xl bg-light-blueBtn hover:bg-light-blueBtnHvr dark:bg-dark-blueBtn dark:hover:bg-dark-blueBtnHvr text-light-text dark:text-dark-text"
        >
          <IoEyeOutline />
        </Link>
        <DeleteUserBtn userId={student.id} />
      </div>
    </div>
  );
};

UserCard.propTypes = {
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

export default UserCard;
