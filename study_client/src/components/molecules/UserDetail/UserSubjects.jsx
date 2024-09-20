import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserSubjects = ({ role, enrolledSubjects, createdSubjects }) => {
  return (
    <div>
      {role === "student" && (
        <div>
          <h3 className="text-lg leading-tight font-bold mb-2">
            Materias que curso:
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            {enrolledSubjects && enrolledSubjects !== 0 ? (
              enrolledSubjects.map((subject) => (
                <li className=" mb-4" key={subject.id}>
                  <Link
                    to={`/${subject.name}/subjects/${subject.id}`}
                    className="p-2 rounded-lg bg-light-primary hover:bg-light-accent dark:bg-dark-primary  dark:hover:bg-dark-accent"
                  >
                    {subject.name}
                  </Link>
                </li>
              ))
            ) : (
              <p>No se han encontrado materias.</p>
            )}
          </ul>
        </div>
      )}
      {role === "teacher" && (
        <div>
          <h3 className="text-lg leading-tight font-bold mb-2">
            Materias dictadas:
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            {createdSubjects && createdSubjects !== 0 ? (
              createdSubjects.map((subject) => (
                <li className=" mb-4" key={subject.id}>
                  {" "}
                  <Link
                    to={`/${subject.name}/subjects/${subject.id}`}
                    className="p-2 rounded-lg bg-light-primary hover:bg-light-accent dark:bg-dark-primary  dark:hover:bg-dark-accent"
                  >
                    {subject.name}
                  </Link>
                </li>
              ))
            ) : (
              <p>No se han encontrado materias.</p>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

UserSubjects.propTypes = {
  role: PropTypes.string,
  enrolledSubjects: PropTypes.array,
  createdSubjects: prompt.array,
};

export default UserSubjects;
