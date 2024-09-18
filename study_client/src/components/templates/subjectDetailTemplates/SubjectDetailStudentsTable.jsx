import StudentSearch from "../../molecules/SearchBars/StudentSearch/StudentSearch";
import PropTypes from "prop-types";
import Container from "../../molecules/CommonMolecules/Container";
import StudentCard from "../../molecules/Cards/StudentCard";

const SubjectDetailStudentsTable = ({ id, students }) => {
  
  return (
    <Container>
      <div className=" p-4 mb-4 rounded-lg w-full bg-light-background dark:bg-dark-background flex flex-col items-center justify-start">
        <div className=" w-full flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold leading-none text-light-text dark:text-dark-text">
            Estudiantes
          </h3>
          <StudentSearch id={id} />
        </div>
        <div className=" w-full flow-root">
          <ul
            role="list"
            className=" w-full divide-y divide-gray-200 dark:divide-gray-700"
          >
          {students &&  students?.map((student, i) => (
            <li key={i} className=" w-full py-3 sm:py-4">
                  <StudentCard student={student} />
                </li>
              )) }
          </ul>
        </div>
      </div>
    </Container>
  );
};
SubjectDetailStudentsTable.propTypes = {
  id: PropTypes.string,
  students: PropTypes.array,
};

export default SubjectDetailStudentsTable;
