import { Link } from "react-router-dom"

const TeacherNav = () => {
  return (
    <ul className="space-y-2 tracking-wide mt-8">
    <li>
      <Link
        to="teacher/home"
        aria-label="Home"
        name="home"
        className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-gray-600"
      >
        <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
            className="fill-current text-cyan-400 dark:fill-slate-600"
          ></path>
          <path
            d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
            className="fill-current text-cyan-200 group-hover:text-cyan-300"
          ></path>
          <path
            d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
            className="fill-current group-hover:text-sky-300"
          ></path>
        </svg>
        <span className="-mr-1 font-medium">Home</span>
      </Link>
    </li>
    <li>
      <Link
        href="#"
        className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
        name="Materias"
        to="teacher/subjects"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            className="fill-current text-gray-600 group-hover:text-cyan-600"
            fillRule="evenodd"
            d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
            clipRule="evenodd"
          />
          <path
            className="fill-current text-gray-300 group-hover:text-cyan-300"
            d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
          />
        </svg>
        <span className="group-hover:text-gray-700">Materias</span>
      </Link>
    </li>
  </ul>
  )
}

export default TeacherNav