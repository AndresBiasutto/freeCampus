import PropTypes from "prop-types";
import { useEffect } from "react";
import Container from "../../molecules/CommonMolecules/Container";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneUser } from "../../../redux/actions/userActions";
import { FaUser } from "react-icons/fa";
import SendMessage from "../../atoms/AdminAtoms/SendMessage";
import ChangeRole from "../../atoms/AdminAtoms/ChangeRole";

const UserDetailCard = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { user } = useSelector((state) => state.user);
  const {role, name, token}= useSelector(state=> state.auth)
  useEffect(() => {
    dispatch(getOneUser(id, token));
  }, [dispatch, id, token]);

  return (
    <Container>
      <div className=" w-full sm:flex sm:items-center justify-start px-6 py-4">
        {user?.image ? (
          <img
            className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-24 w-24 rounded-full"
            src={user?.image}
            alt={user?.name}
          />
        ) : (
          <div className="relative h-24 w-24 flex justify-center items-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <FaUser className=" text-5xl " />
          </div>
        )}

        <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
          <p className="text-xl leading-tight font-bold">{user.name}</p>

          <p className="text-sm leading-tight text-gray-600">{user.email}</p>
          <p className="text-sm leading-tight text-gray-600">
            {user.contactNumber && user.contactNumber}
          </p>
          <p>{user.role} </p>
        </div>
        <div className="w-full flex flex-col items-end justify-center gap-2">
          <SendMessage />
          {user.role !== "admin" && <ChangeRole />}
        </div>
      </div>

      <div className=" w-full px-6 py-4">
        {user.role === "student" && (
          <div>
            <h3 className="text-lg leading-tight font-bold mb-2">
              Materias que curso:
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {user.enrolledSubjects && user.enrolledSubjects !== 0 ? (
                user.enrolledSubjects.map((subject) => (
                  <li className=" mb-4" key={subject.id}>
                    <Link
                      to={`/${role}/${name}/subjects/${subject.id}`}
                      className="p-2 w-auto flex flex-row justify-start items-center gap-2 rounded-lg bg-light-primary hover:bg-light-accent dark:bg-dark-primary  dark:hover:bg-dark-accent"
                    >
                    <img className="h-6 w-6 rounded-md " src={subject.image} />
                     <p>{subject.name}</p> 
                    </Link>
                  </li>
                ))
              ) : (
                <p>No se han encontrado materias.</p>
              )}
            </ul>
          </div>
        )}
        {user.role === "teacher" && (
          <div>
            <h3 className="text-lg leading-tight font-bold mb-2">
              Mis materias:
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {user.createdSubjects && user.createdSubjects !== 0 ? (
                user.createdSubjects.map((subject) => (
                  <li className=" mb-4" key={subject.id}>
                    <Link
                      to={`/${role}/${name}/subjects/${subject.id}`}
                      className="p-2 w-auto flex flex-row justify-start items-center gap-2 rounded-lg bg-light-primary hover:bg-light-accent dark:bg-dark-primary  dark:hover:bg-dark-accent"
                    >
                    <img className="h-6 w-6 rounded-md " src={subject.image} />
                     <p>{subject.name}</p> 
                    </Link>
                  </li>
                ))
              ) : (
                <p>No se han encontrado materias.</p>
              )}
            </ul>
          </div>
        )}

        <h3 className="text-lg leading-tight font-bold mb-2">Sobre mí:</h3>
        <p className="text-sm leading-tight text-gray-600 mb-4">
          {user.description !== "null"
            ? user.description
            : `${user.name}, contános álgo sobre vós!`}
        </p>
      </div>
    </Container>
  );
};
UserDetailCard.propTypes = {
  user: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    email: PropTypes.string,
    contactNumber: PropTypes.string,
    role: PropTypes.string,
    enrolledSubjects: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }),
};
export default UserDetailCard;
