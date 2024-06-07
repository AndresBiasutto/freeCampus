import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneSubject } from "../../redux/actions/subjectActions";
import ModuleCard from "../../components/ModuleCard";
import UserCard from "../../components/UserCard";
import { useState } from "react";
import ModuleForm from "../../components/ModuleForm";

const TeacherSubjectDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const subject = useSelector((state) => state.subject);
  const [showModal, setshowModal] = useState(false);
  const modules = subject.Modules;
  useEffect(() => {
    dispatch(getOneSubject(id));
  }, [dispatch, id]);
  const tooggleModal = () => {
    setshowModal(!showModal);
  };
  return (
    <div className=" flex items-start min-h-screen bg-gray-50 text-gray-800 relative pt-6 2xl:container ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
        <div className="flex flex-row justify-between">
        <div
        className={`z-30 fixed top-16 transition-all  ${
          showModal ? "right-0" : "-right-80"
        }`}
      >
        <ModuleForm id= {id} />
      </div>
          <button onClick={tooggleModal} className="inline-flex items-center px-4 py-2 bg-sky-800 border border-sky-300 rounded mb-4 font-semibold cursor-pointer text-sm text-white tracking-widest hover:bg-sky-300 active:bg-sky-300 focus:outline-none focus:border-sky-300 focus:ring focus:ring-gray-300 disabled:opacity-25 transition">
            agregar módulo
          </button>
          <div className="flex flex-col justify-start items-end">
            <h3 className="font-semibold text-sky-800">{subject.department}</h3>
          </div>
        </div>
        <div className=" w-auto mx-auto mt-4">
          <div className="p-4 w-auto bg-white rounded-lg border shadow-md sm:p-8 dark:bg-sky-800 dark:border-sky-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold leading-none text-sky-900 dark:text-white">
                <h2 className="font-semibold pb-4 text-lg"> {subject.name} </h2>
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
                {modules &&
                  modules.map((module, i) => (
                    <li key={module.id}>
                      {" "}
                      <ModuleCard
                        module={module}
                        subjectId={subject.subjectId}
                        number={i + 1}
                      />
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        <UserCard />
      </div>
    </div>
  );
};

export default TeacherSubjectDetail;
