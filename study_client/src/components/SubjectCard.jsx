import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import bgSubject from "../assets/img/bgSubject.jpg"

const SubjectCard = (props) => {
  const subject = props.subject;
  const teacherName = props.name;
  return (

      <Link to={`/teacher/subjects/${subject.id}`} className="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-clip-border shadow-3xl shadow-shadow-500 w-full !p-4 3xl:p-![18px] bg-sky-50 undefined">
        <div className="h-full w-full">
          <div className="relative w-full">
            <img
              src={props.img? props.img : bgSubject}
              className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
              alt=""
            />
            <button className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer">
              <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
          <div className="mb-3 flex items-center justify-between px-1 md:items-start">
            <div className="mb-2">
              <p className="text-lg font-bold text-navy-700">
              {subject.name}
              </p>
              <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
                {teacherName}
              </p>
            </div>

          </div>
          <div className="flex items-center justify-between md:items-center lg:justify-between ">
            <div className="flex">
              <p className="!mb-0 text-sm font-bold text-brand-500">
                {subject.description}
              </p>
            </div>
            <button
              href=""
              className="linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700"
            >
              Place Bid
            </button>
          </div>
        </div>
      </Link>
  );
};
SubjectCard.propTypes = {
  subject: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    code: PropTypes.string.isRequired,
    credits: PropTypes.number.isRequired,
    semester: PropTypes.number.isRequired,
    department: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};
export default SubjectCard;
