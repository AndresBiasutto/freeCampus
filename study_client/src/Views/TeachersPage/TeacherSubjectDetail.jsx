import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneSubject } from "../../redux/actions/subjectActions";
import ModuleCard from "../../components/ModuleComponents/ModuleCard";
import UserCard from "../../components/UserComponents/UserCard";
import ModuleForm from "../../components/ModuleForm";
import { getModules } from "../../redux/actions/moduleActions";
import PropTypes from "prop-types";
import UserSearch from "../../components/UserComponents/UserSearch/UserSearch";

const TeacherSubjectDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const subject = useSelector((state) => state.subject);
  const modules = useSelector((state) => state.modules);
  const subjectModules = modules?.filter((mod) => subject.id === mod.subjectId);
  const students = subject.students;
  const [showModal, setshowModal] = useState(false);

  useEffect(() => {
    dispatch(getModules());
    dispatch(getOneSubject(id));
  }, [dispatch, id]);

  useEffect(() => {}, [subject.students]);

  const toggleModal = () => {
    setshowModal(!showModal);
  };

  return (
    <div className=" w-full pt-14 flex flex-row justify-center align-center transition bg-light-lightBackground dark:bg-dark-darkBackground">
      <div className=" p-4 mt-4 mb-4 rounded-lg w-full md:w-3/5 bg-light-background dark:bg-dark-background flex flex-col items-center justify-start">
        <button
        onClick={toggleModal}
         className=" w-full h-24 p-2 m-2 bg-light-blueBtn hover:bg-light-blueBtnHvr dark:bg-dark-blueBtn dark:hover:bg-dark-blueBtnHvr rounded ">
          agregar modulo
        </button>

        <div className=" w-full  h-24 rounded-lg bg-light-lightBackground dark:bg-dark-darkBackground"></div>
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

    // <div className="flex items-start min-h-screen text-gray-800 relative pt-6 2xl:container ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
    //   <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
    //     <div className="flex flex-row justify-between">
    //       <div
    //         className={`z-30 fixed bottom-0 transition-all  ${
    //           showModal ? "right-0" : "-right-80"
    //         }`}
    //       >
    //         <ModuleForm id={id} />
    //       </div>

    //       <div className="flex flex-col justify-start items-end">
    //         <h3 className="font-semibold text-sky-800">{subject.name}</h3>
    //       </div>
    //     </div>
    //     <div className="w-auto mx-auto mt-4">
    //       <div className="p-4 w-auto bg-white rounded-lg border shadow-md sm:p-8 dark:bg-sky-800 dark:border-sky-700">
    //         <div className="flex justify-end items-center mb-4">
    //           <button
    //             onClick={toggleModal}
    //             className="inline-flex items-center px-4 py-2 bg-sky-800 border border-sky-300 rounded mb-4 font-semibold cursor-pointer text-sm text-white tracking-widest hover:bg-sky-300 active:bg-sky-300 focus:outline-none focus:border-sky-300 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
    //           >
    //             agregar módulo
    //           </button>
    //         </div>
    //         <div className="flow-root">
    //           <ul
    //             role="list"
    //             className="divide-y divide-gray-200 dark:divide-gray-700"
    //           >
    //             {modules &&
    //               subjectModules.map((module, i) => (
    //                 <li key={i}>
    //                   <ModuleCard
    //                     module={module}
    //                     subjectId={subject.id}
    //                     number={i + 1}
    //                   />
    //                 </li>
    //               ))}
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //     <div className=" w-auto mx-auto mt-4">
    //       <div className="p-4 w-auto bg-white rounded-lg border shadow-md sm:p-8 dark:bg-sky-300 dark:border-sky-700">
    //         <div className="flex justify-between items-center mb-4">
    //           <h3 className="text-xl font-bold leading-none text-sky-900 dark:text-white">
    //             Estudiantes
    //           </h3>
    //           <UserSearch id={id} />
    //         </div>
    //         <div className="flow-root">
    //           <ul
    //             role="list"
    //             className="divide-y divide-gray-200 dark:divide-gray-700"
    //           >
    //             {students &&
    //               students.map((student, i) => (
    //                 <li key={i} className="py-3 sm:py-4">
    //                   <UserCard student={student} />
    //                 </li>
    //               ))}
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
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

export default TeacherSubjectDetail;
