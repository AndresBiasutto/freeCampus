import { useSelector } from "react-redux";
import Logo from "../../assets/img/logo.svg";
import LogOut from "./LogOut";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";

const AsideBar = () => {
  const { role, name, image } = useSelector((store) => store.auth);
  useEffect(() => {}, [image]);

  return (
    <aside className="z-50 ml-[-100%] fixed top-10 lg:top-0 pb-3 px-6 w-full flex flex-col justify-between h-auto lg:h-screen border-r bg-white transition duration-300 md:w-[25%] md:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4">
          <a href="#" title="home">
            <img src={Logo} className="w-32" alt="tailus logo" />
          </a>
        </div>

        <div className="mt-8 text-center">
          <img
            src={image}
            alt=""
            className="w-10 h-10 m-auto rounded-full object-cover lg:w-10 lg:h-10"
          />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
            {name}
          </h5>
          <span className="hidden text-gray-400 lg:block">{role}</span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          <li>
            <Link
              to={`${role}/home`}
              aria-label="Home"
              name="home"
              className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-gray-600 hover:text-sky-300 group"
            >
              <i className="-ml-1 h-6 w-6 flex items-center justify-center group-hover:text-sky-300">
                <FaHome />
              </i>
              <span className="-mr-1 font-medium group-hover:text-sky-300">
                Home
              </span>
            </Link>
          </li>
          {role === "teacher" && (
            <li>
              <Link
                to={`${role}/subjects`}
                aria-label="Materias"
                name="Materias"
                className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-gray-600 hover:text-sky-300 group"
              >
                <i className="-ml-1 h-6 w-6 flex items-center justify-center group-hover:text-sky-300">
                  <FaGraduationCap />
                </i>
                <span className="-mr-1 font-medium group-hover:text-sky-300">
                  Materias
                </span>
              </Link>
            </li>
          )}
          {role === "teacher" && (
            <li>
              <Link
                to={`${role}/users`}
                aria-label="cpannel"
                name="cpannel"
                className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-gray-600 hover:text-sky-300 group"
              >
                <i className="-ml-1 h-6 w-6 flex items-center justify-center group-hover:text-sky-300">
                  <FaUsers />
                </i>
                <span className="-mr-1 font-medium group-hover:text-sky-300">
                  Usuarios
                </span>
              </Link>
            </li>
          )}

          <li>
            <Link
              to={`/settings`}
              aria-label="settings"
              name="settings"
              className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-gray-600 hover:text-sky-300 group"
            >
              <i className="-ml-1 h-6 w-6 flex items-center justify-center group-hover:text-sky-300">
                <IoMdSettings />
              </i>
              <span className="-mr-1 font-medium group-hover:text-sky-300">
                Settings
              </span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="px-6 -mx-6 mb-0 mt-10 flex justify-center items-center border-t">
        <LogOut />
      </div>
    </aside>
  );
};

export default AsideBar;
