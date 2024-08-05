import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSubjects } from "../../redux/actions/subjectActions";
// import SubjectForm from "../../components/SubjectComponents/SubjectForm";
import SubjectsContainer from "../../components/SubjectComponents/SubjectsContainer";

const TeacherSubjects = () => {
  const subjects = useSelector((state) => state.subjects);
  const { id, name, role } = useSelector((store) => store.auth);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const mySubjects = subjects?.filter((subject) => subject?.creator?.id === id);

  useEffect(() => {
    dispatch(getSubjects());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className=" w-full pt-14 flex flex-row justify-center align-center transition bg-light-lightBackground dark:bg-dark-darkBackground">
      <div className=" p-4 mt-4 mb-4 rounded-lg w-full md:w-3/5 bg-light-background dark:bg-dark-background flex flex-col items-center justify-start">
        <div
          className={`z-30 fixed top-16 transition-all ${
            showModal ? "right-0" : "-right-80"
          }`}
        >
          {/* <SubjectForm turnModal={showModal} setTurnModal={setShowModal} /> */}
        </div>
        <SubjectsContainer toggleModal={toggleModal} mySubjects={mySubjects} name={name} role={role} />
      </div>
    </div>
  );
};

export default TeacherSubjects;
