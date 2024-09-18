import PropTypes from "prop-types"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const SearchList = (props) => {
    const { user } = props;
    const { role, name} = useSelector((state) => state.auth);

  
    return (
      <li className="flex justify-between items-center p-2">
        <Link to={`/${role}/${name}/userdetail/${user.id}`}>
          <p className="font-semibold">{user.name}</p>
          <p className="text-sm text-gray-500">{user.email}</p>
        </Link>
      </li>
    );
  };
  SearchList.propTypes={
    user: PropTypes.array,
    subjectId: PropTypes.string
  }
  export default SearchList;
  