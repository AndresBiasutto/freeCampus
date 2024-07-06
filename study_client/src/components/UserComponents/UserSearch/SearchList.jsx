import { AiOutlineUserAdd } from "react-icons/ai";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addUser } from "../../../redux/actions/subjectActions";

const SearchList = (props) => {
  const { user, subjectId } = props;
  const dispatch = useDispatch();

  const plusUser = (subjectId, userId) => {
    const user = {
      studentId: userId
    };
    dispatch(addUser(subjectId, user));
  };

  return (
    <li
      key={user.id}
      className="border-b border-gray-300 py-2 px-1 flex flex-row items-center justify-between w-full"
    >
      <div className="border-b border-gray-300 py-2">
        <p>{user.name}</p>
        <p className="text-gray-400">{user.email}</p>
      </div>

     {subjectId && <button
        onClick={() => plusUser(subjectId, user.id)}
        className="w-10 h-10 rounded-full bg-sky-700 text-white text-2xl flex items-center justify-center hover:bg-sky-600"
      >
        <AiOutlineUserAdd />
      </button>}
    </li>
  );
};

SearchList.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  subjectId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default SearchList;