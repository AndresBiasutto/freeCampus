import PropTypes from "prop-types";
import { useEffect } from "react";
import logo from "./../../assets/img/logo.svg"

const UserDetailCard = (props) => {
  const user = props.user;

  useEffect(() => {
    console.log(user.enrolledSubjects);
  

  }, [user.enrolledSubjects])
  
  return (
    <div className="max-w-md mx-auto h-screen bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="sm:flex sm:items-center px-6 py-4">
        <img
          className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-24 w-24 rounded-full"
          src={user.image? user.image : logo}
          alt={user.name}
        />
        <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
          <p className="text-xl leading-tight font-bold">{user.name}</p>

          <p className="text-sm leading-tight text-gray-600">{user.email}</p>
          <p className="text-sm leading-tight text-gray-600">{user.contactNumber !== "null" ? user.contactNumber: "sin contácto"}</p>
        </div>
      </div>
      
      <div className="px-6 py-4">
        <h3 className="text-lg leading-tight font-bold mb-2">
          Materias que curso:
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          {user.enrolledSubjects && user.enrolledSubjects !== 0 ? (
            user.enrolledSubjects.map((subject) => (
              <li key={subject.id}>{subject.name}</li>
            ))
          ) : (
            <p>No se han encontrado materias.</p>
          )}
        </ul>
        <h3 className="text-lg leading-tight font-bold mb-2">
          Sobre mí:
        </h3>
        <p className="text-sm leading-tight text-gray-600 mb-4">
            {user.description !== "null" ? user.description: `${user.name}, contános álgo sobre vós!`}
          </p>
      </div>
    </div>
  );
};
UserDetailCard.propTypes = {
  user: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    email: PropTypes.string.isRequired,
    contactNumber: PropTypes.string,
    enrolledSubjects: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }).isRequired,

};
export default UserDetailCard;
