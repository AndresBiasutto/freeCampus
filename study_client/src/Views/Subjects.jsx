import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSubjects } from "../redux/actions/subjectActions";
import SubjectsContainer from "../components/templates/subjectTemplates/SubjectsContainer";
import { getOneUser } from "../redux/actions/userActions";

const Subjects = () => {
  const subjects = useSelector((state) => state.subjects.subjects);
  const { id, name, role } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const user = useSelector((store) => store?.user?.user);
  const enrolledSubjects = user?.enrolledSubjects;

  const mySubjects = subjects?.filter((subject) => subject?.creator?.id === id);

  useEffect(() => {
    dispatch(getSubjects());
    dispatch(getOneUser(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className="h-full w-full pt-14 flex flex-row justify-center align-center transition bg-light-lightBackground dark:bg-dark-darkBackground">
        <SubjectsContainer mySubjects={role === "teacher"? mySubjects : enrolledSubjects} name={name} role={role} />
    </div>
  );
};

export default Subjects;
