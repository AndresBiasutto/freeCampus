import UserSearch from "../../UserComponents/UserSearch/UserSearch"
import UserCard from "../../UserComponents/UserCard"
import PropTypes from "prop-types"

const StudentsTable = ({id, students}) => {
  return (
    <div className=" w-full pt-4 flex flex-col justify-center items-center align-center transition bg-light-lightBackground dark:bg-dark-darkBackground">
    <div className=" p-4 mb-4 rounded-lg w-full md:w-3/5 bg-light-background dark:bg-dark-background flex flex-col items-center justify-start">
      <div className=" w-full flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold leading-none text-light-text dark:text-dark-text">
          Estudiantes
        </h3>
        <UserSearch id={id} />
      </div>
      <div className=" w-full flow-root">
        <ul
          role="list"
          className=" w-full divide-y divide-gray-200 dark:divide-gray-700"
        >
          {students &&
            students.map((student, i) => (
              <li key={i} className="py-3 sm:py-4">
                <UserCard student={student} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  </div>
  )
}
StudentsTable.propTypes= {
    id: PropTypes.string.isRequired,
    students: PropTypes.object.isRequired
}

export default StudentsTable