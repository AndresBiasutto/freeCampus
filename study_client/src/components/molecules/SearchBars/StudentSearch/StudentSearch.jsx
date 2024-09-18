import { RiUserSearchLine } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  clearUserSearch,
  getUserByName,
} from "../../../../redux/actions/userActions";
import { useEffect, useState } from "react";
import SearchList from "../../StudentsTableMolecules/SearchList";

const StudentSearch = (props) => {
  const subjectId = props.id;
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const searchResults = useSelector(
    (state) => state.studentSearch.studentSearch
  );
  const {token}= useSelector(state=> state.auth)

  useEffect(() => {
    if (!search) {
      dispatch(clearUserSearch());
    }
  }, [dispatch, search]);

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(getUserByName(search, token));
  };

  return (
    <div>
      <form className=" w-full flex items-center" onSubmit={submitSearch}>
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <RiUserSearchLine />
          </div>
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="buscar estudiante..."
            required
          />
        </div>
        <button
          type="submit"
          className="p-2.5 ms-2 text-lg font-medium text-white bg-sky-700 rounded-full border border-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 dark:bg-sky-800 dark:hover:bg-sky-600 dark:focus:ring-sky-800"
        >
          <IoSearchSharp />
          <span className="sr-only">Search</span>
        </button>
      </form>
      <div className="relative">
        {searchResults && searchResults.length > 0 ? (
          <ul className="absolute top-1 bg-gray-50  hover:bg-sky-100 w-full rounded flex flex-col items-start">
            {search &&
              searchResults.map((user) => (
                <SearchList key={user.id} user={user} subjectId={subjectId} />
              ))}
          </ul>
        ) : (
          <p className="text-gray-500">
            {search ? "Usuario no encontrado" : ""}
          </p>
        )}
      </div>
    </div>
  );
};
StudentSearch.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default StudentSearch;
