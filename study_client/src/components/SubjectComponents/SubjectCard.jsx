// src/components/studentComponents/SubjectCard.jsx
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { FaArrowRight } from "react-icons/fa";
import DeleteSubjectBtn from "./DeleteSubjectBtn";
import { useEffect } from "react";
import EditSubjectBtn from "./EditSubjectBtn";

const SubjectCard = (props) => {
  const { subject, role } = props;
  // eslint-disable-next-line react/prop-types
  // const subjectCreator = subject.creator.name;
  useEffect(() => {}, [subject]);

  return (
    <div
      id="subjectCard"
      className=" group relative w-60 h-64 transition overflow-hidden hover:scale-105 bg-white border border-gray-200 rounded-lg shadow dark:bg-sky-800 dark:border-gray-700"
    >
      <Link to={`/${role}/subjects/${subject.id}`}>
        <img
          className="absolute group-hover:blur-sm transition-all bottom-0 left-0 w-full h-full object-cover rounded-lg"
          src={
            subject.image
              ? subject.image
              : "https://static.vecteezy.com/system/resources/thumbnails/035/623/558/small_2x/2d-animated-book-free-video.jpg"
          }
          alt=""
        />
      </Link>
      <h5 className="absolute top-1/2 left-1/2 z-20 group-hover:scale-75 transition-all w-full text-center -translate-x-1/2 -translate-y-1/2 font-bold tracking-tight text-light-text dark:text-dark-text">
        <span className=" bg-light-lightBackground/80 dark:bg-dark-darkBackground/80 rounded-xl text-xl ">
          {subject.name}
        </span>
      </h5>
      <div className="  absolute -top-10 left-0 group-hover:top-0 transition-all z-40 w-full h-10 p-2 flex items-center justify-end rounded-t-lg bg-gradient-to-b from-light-lightBackground to-transparent dark:from-dark-darkBackground">
        <div className=" flex flex-row justify-start items-center gap-2">
          <EditSubjectBtn subjectId={subject.id} />
          <DeleteSubjectBtn subjectId={subject.id} />
        </div>
      </div>
    </div>
  );
};

SubjectCard.propTypes = {
  subject: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    department: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default SubjectCard;

{
  /* <div className="p-5">
        <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
          {subject.name}
        </h5>
        <p className="mb-3 font-normal text-gray-50 dark:text-gray-50">
          {subject.description}
        </p>
        <p className="mb-3 font-normal text-gray-100 dark:text-gray-400">
          De: {subjectCreator}
        </p>
        <div className="flex flex-row items-center justify-between">
          {role === "teacher" && <DeleteSubjectBtn subjectId={subject.id} />}
          {role === "teacher" && (
            <Link
              to={`/${role}/subjects/${subject.id}`}
              className=" gap-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Ver curso
              <FaArrowRight />
            </Link>
          )}
        </div>
      </div> */
}
