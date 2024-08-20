import SubjectsContainer from "../../components/SubjectComponents/SubjectsContainer";
import {  useEffect } from "react";
import { useSelector } from "react-redux";

const StudentSubjects = () => {
  const user = useSelector((store) => store?.user);
  const enrolledSubjects = user?.enrolledSubjects;

  const { role, name} = useSelector((store) => store.auth);

  useEffect(() => {
    console.log(enrolledSubjects);
    
  }, [enrolledSubjects])
  
  return (
    <div className=" w-full pt-14 flex flex-row justify-center align-center transition bg-light-lightBackground dark:bg-dark-darkBackground">
      <div className=" p-4 mt-4 mb-4 rounded-lg w-full md:w-3/5 bg-light-background dark:bg-dark-background flex flex-col items-center justify-start">
        <SubjectsContainer
          mySubjects={enrolledSubjects}
          name={name}
          role={role}
        />
      </div>
    </div>
  );
};

export default StudentSubjects;
