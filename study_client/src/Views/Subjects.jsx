import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSubjects } from "../redux/actions/subjectActions";
import SubjectsContainer from "../components/templates/subjectTemplates/SubjectsContainer";
import { getOneUser } from "../redux/actions/userActions";
import Background from "../components/molecules/CommonMolecules/Background";

const Subjects = () => {
  const subjects = useSelector((state) => state.subjects.subjects);
  const { id, name, role, token } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const user = useSelector((store) => store?.user?.user);
  const enrolledSubjects = user?.enrolledSubjects;

  const mySubjects = subjects?.filter((subject) => subject?.creator?.id === id);

  useEffect(() => {
    dispatch(getSubjects(token));
    dispatch(getOneUser(id, token))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, token]);

  return (
    <Background>
        <SubjectsContainer mySubjects={role === "teacher"? mySubjects : enrolledSubjects} name={name} role={role} />
    </Background>
  );
};

export default Subjects;
