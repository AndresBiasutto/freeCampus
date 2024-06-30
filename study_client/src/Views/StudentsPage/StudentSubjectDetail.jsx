import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneSubject } from "../../redux/actions/subjectActions";
import ModuleCard from "../../components/ModuleComponents/ModuleCard";
import UserCard from "../../components/UserComponents/UserCard";
import { getModules } from "../../redux/actions/moduleActions";
import PropTypes from "prop-types";

const StudentSubjectDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const subject = useSelector((state) => state.subject);
  const modules = useSelector((state) => state.modules);
  const subjectModules = modules?.filter((mod) => subject.id === mod.subjectId);
  const students = subject.students;

  useEffect(() => {
    dispatch(getModules());
    dispatch(getOneSubject(id));
  }, [dispatch, id,]);


  return (
    <div className="flex items-start min-h-screen bg-gray-50 text-gray-800 relative pt-6 2xl:container ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col justify-start items-end">
            <h3 className="font-semibold text-sky-800">{subject.department}</h3>
          </div>
        </div>
        <div className="w-auto mx-auto mt-4">
          <div className="p-4 w-auto bg-white rounded-lg border shadow-md sm:p-8 dark:bg-sky-800 dark:border-sky-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold leading-none text-sky-900 dark:text-white">
                {subject.name}
              </h3>

            </div>
            <div className="flow-root">
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                {modules &&
                  subjectModules.map((module, i) => (
                    <li key={i}>
                      <ModuleCard
                        module={module}
                        subjectId={subject.id}
                        number={i + 1}
                      />
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <div className=" w-auto mx-auto mt-4">
          <div className="p-4 w-auto bg-white rounded-lg border shadow-md sm:p-8 dark:bg-sky-300 dark:border-sky-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold leading-none text-sky-900 dark:text-white">
                Estudiantes
              </h3>
              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                View all
              </a>
            </div>
            <div className="flow-root">
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
              { students && students.map((student, i)=>(
                <li key={i} className="py-3 sm:py-4">
                  <UserCard student= {student} />
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

ModuleCard.propTypes = {
  module: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
  number: PropTypes.number.isRequired,
  subjectId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default StudentSubjectDetail;
