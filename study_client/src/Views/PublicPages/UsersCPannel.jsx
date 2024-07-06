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
    <div className="flex items-start min-h-screen bg-gray-50 text-gray-800 relative pt-6 2xl:container ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
        <h1>C pannel</h1>
        <div className=" w-auto mx-auto mt-4">
          <div className="p-4 w-auto bg-white rounded-lg border shadow-md sm:p-8 dark:bg-sky-300 dark:border-sky-700">
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
