// import UserSearch from "../../components/UserComponents/UserSearch/UserSearch";
import UserCard from "../../components/UserComponents/UserCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/actions/userActions";
import UserSearch from "../../components/UserComponents/UserSearch/UserSearch";

const UsersCPannel = () => {
    const dispatch= useDispatch()
    const users= useSelector(state=> state.users)
    useEffect(() => {
      dispatch(getAllUsers())
    }, [dispatch])
    
  return (
    <div className="  w-full h-full pt-14 flex flex-row justify-center align-center">
      <div className=" w-3/5">
        <div className=" w-auto mx-auto mt-4">
          <div className="p-4 w-auto  rounded-lg  shadow-md sm:p-8 bg-light-background transition dark:bg-dark-background">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold leading-none text-sky-900 dark:text-white">
                Estudiantes
              </h3>
               <UserSearch /> 
            </div>
            <div className="flow-root">
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                {users &&
                  users.map((user, i) => (
                    <li key={i} className="py-3 sm:py-4">
                      <UserCard student={user} />
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersCPannel;
