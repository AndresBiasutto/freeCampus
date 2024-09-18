import UserCard from "../../molecules/Cards/UserCard";
import PropTypes from "prop-types";
import Container from "../../molecules/CommonMolecules/Container";
import CreateUserBtn from "../../atoms/AdminAtoms/CreateUserBtn";
import SearchUser from "../../molecules/AdminMolecules/SearchUser";

const UsersTable = ({  users }) => {
  return (
    <Container>
        <div className=" w-full flex flex-row items-center justify-between">
          <CreateUserBtn />
          <SearchUser users={users} />
        </div>

        <div className=" w-full flow-root">
          <ul
            role="list"
            className=" w-full divide-y divide-gray-200 dark:divide-gray-700"
          >
            {users &&
              users.map((student, i) => (
                <li key={i} className="">
                  <UserCard student={student} />
                </li>
              ))}
          </ul>
        </div>
      
    </Container>
  );
};
UsersTable.propTypes = {
  id: PropTypes.string,
  users: PropTypes.array,
};

export default UsersTable;
