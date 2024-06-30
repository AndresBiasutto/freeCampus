import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubjects } from "../redux/actions/subjectActions";
import SubjectForm from "../components/SubjectForm";
import SubjectCard from "../../components/SubjectCard";

const TeacherSubject = () => {
  const subjects = useSelector((state) => state.subjects);
  const [showModal, setshowModal] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubjects());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const tooggleModal = () => {
    setshowModal(!showModal);

  };
  return (
    <div className=" flex items-start min-h-screen bg-gray-50 text-gray-800 relative pt-6 2xl:container ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <div
        className={`z-30 fixed top-16 transition-all  ${
          showModal ? "right-0" : "-right-80"
        }`}
      >
        <SubjectForm turnModal={showModal} />
      </div>
      <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
        <button
          onClick={tooggleModal}
          className="inline-flex items-center px-4 py-2 bg-sky-800 border border-sky-300 rounded mb-4 font-semibold cursor-pointer text-sm text-white tracking-widest hover:bg-sky-300 active:bg-sky-300 focus:outline-none focus:border-sky-300 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
        >
          agregar materia
        </button>
        <div className="flex align-top flex-wrap justify-start gap-4">
          {subjects &&
            subjects.map((subject) => (
              <SubjectCard key={subject.id} subject={subject} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherSubject;