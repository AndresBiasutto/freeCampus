import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSubjects } from "../../redux/actions/subjectActions";
import SubjectForm from "../../components/SubjectForm";
import SubjectCard from "../../components/SubjectCard";
import { GrCertificate } from "react-icons/gr";

const TeacherSubjects = () => {
  const subjects = useSelector((state) => state.subjects);
  const { id, name } = useSelector((store) => store.auth);
  const [showModal, setshowModal] = useState(false);
  const dispatch = useDispatch();

  const mySubjects = subjects.filter((subject) => subject.creator);
  useEffect(() => {
    dispatch(getSubjects());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    console.log(mySubjects);
  }, [id, mySubjects]);

  const tooggleModal = () => {
    setshowModal(!showModal);
  };
  return (
    <div className=" flex items-start min-h-screen bg-gray-50 text-gray-800 relative pt-6 2xl:container ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
        <div
          className={`z-30 fixed top-16 transition-all  ${
            showModal ? "right-0" : "-right-80"
          }`}
        >
          <SubjectForm />
        </div>
        <button
          onClick={tooggleModal}
          className=" flex  flex-row justify-center items-center gap-4 px-3 md:px-4 py-1 md:py-2 bg-sky-600 border border-sky-600 text-white rounded-lg hover:bg-sky-700"
        >
          agregar materia <GrCertificate className=" text-gray-50 text-xl" />
        </button>

        <h2>mis cursos</h2>
        <div>
          <div className="flex align-top flex-wrap justify-start gap-4">
            {mySubjects &&
              mySubjects.map((subject) => (
                <SubjectCard key={subject.id} subject={subject} name={name} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherSubjects;
