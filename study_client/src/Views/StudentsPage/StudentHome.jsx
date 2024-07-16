import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubjects } from "../../redux/actions/subjectActions";
import SubjectSearch from "../../components/SubjectComponents/SubjectSearch";
import { getOneUser } from "../../redux/actions/userActions";
import MySubjects from "../../components/SubjectComponents/MySubjects";

const StudentHome = () => {
  const dispatch = useDispatch();
  const { role, id } = useSelector((store) => store.auth);
   const user = useSelector((store) => store?.user);
   const enrolledSubjects= user?.enrolledSubjects

  useEffect(() => {
    dispatch(getSubjects());
    dispatch(getOneUser(id));
  }, [dispatch, id]);


  return (
    <div className="flex items-start min-h-screen bg-gray-50 text-gray-800 relative pt-6 2xl:container ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
        <SubjectSearch />
        <div className="flex flex-col align-top justify-start gap-4 mt-4 mb-4 rounded-lg bg-sky-600">
          <h2 className="pl-4 pt-4 text-sky-50 text-lg font-bold">Mis cursos</h2>
          <div className="flex align-top flex-wrap justify-center gap-4 mt-4 mb-4 pl-4 pr-4">
            {enrolledSubjects &&
              enrolledSubjects.map((subject) => (
                <MySubjects
                  key={subject.id}
                  subject={subject}
                  img={subject.img}
                  role={role}
                />
              ))}
          </div> 
        </div>
        {/* <h2 className="pl-4 pt-4 text-sky-600 text-lg font-bold">Tódos los cursos</h2>
        <div className="flex align-top flex-wrap justify-start gap-4">
          {subjects &&
            subjects.map((subject) => (
              <SubjectCard
                key={subject.id}
                subject={subject}
                name={subject.creator.name}
                img={subject.img}
                role={role}
              />
            ))}
        </div> */}
      </div>
    </div>
  );
};

export default StudentHome;
