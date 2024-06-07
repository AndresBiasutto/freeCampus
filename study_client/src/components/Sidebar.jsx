import { useSelector } from "react-redux";
import LogOut from "./LogOut";
import logo from "../assets/img/logo.svg";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { role, name, image } = useSelector((store) => store.auth);
  const navigate = useNavigate()

  const goToSchoolsPage= ()=>{
    navigate("/clevel/schools")
  }
  const goToSubjectsPage= ()=>{
    navigate("/clevel/subjects")
  }

  return (
    <aside className="bg-sky-100">
      <aside
        className="group/sidebar flex flex-col shrink-0 lg:w-[300px] w-[250px] transition-all duration-300 ease-in-out m-0 fixed z-40 inset-y-0 left-0 bg-sky-100 border-r border-r-dashed border-r-neutral-200 sidenav fixed-start loopple-fixed-start"
        id="sidenav-main"
      >
        <div className="flex shrink-0 px-8 items-center justify-between h-[96px]">
          <a
            className="transition-colors duration-200 ease-in-out"
          >
            <img
              alt="Logo"
              src={logo}
              className="inline"
            />
          </a>
        </div>

        <div className="hidden border-b border-dashed lg:block dark:border-neutral-700/70 border-neutral-200"></div>

        <div className="flex items-center justify-between px-8 py-5">
          <div className="flex items-center mr-5">
            <div className="mr-5">
              <div className="inline-block relative shrink-0 cursor-pointer rounded-[.95rem]">
                <img
                  className="w-[40px] h-[40px] shrink-0 inline-block rounded-[.95rem]"
                  src={
                    image
                  }
                  alt="avatar image"
                />
              </div>
            </div>
            <div className="mr-2 ">
              <a
                href="javascript:void(0)"
                className="dark:hover:text-primary hover:text-primary transition-colors duration-200 ease-in-out text-[1.075rem] font-medium dark:text-neutral-400/90 text-secondary-inverse"
              >
                {name}
              </a>
              <span className="text-secondary-dark dark:text-stone-500 font-medium block text-[0.85rem]">
                {role}{" "}
              </span>
            </div>
          </div>
          <LogOut />
        </div>

        <div className="hidden border-b border-dashed lg:block dark:border-neutral-700/70 border-neutral-200"></div>

        <div className="relative pl-3 my-5 overflow-y-scroll">
          <div className="flex flex-col w-full font-medium">
            <div>
              <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                <button
                  // to="schools"
                  onClick={goToSchoolsPage}
                  className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                >
                  Escuelas
                </button>
              </span>
            </div>

            <div>
              <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                <button
                onClick={goToSubjectsPage}
                  href="javascript:;"
                  className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                >
                  Materias
                </button>
              </span>
            </div>

            <div className="block pt-5 pb-[.15rem]">
              <div className="px-4 py-[.65rem]">
                <span className="font-semibold text-[0.95rem] uppercase dark:text-neutral-500/80 text-secondary-dark">
                  Applications
                </span>
              </div>
            </div>

            <div>
              <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                <a
                  href="javascript:;"
                  className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                >
                  Users
                </a>
              </span>
            </div>

          </div>
        </div>
      </aside>
    </aside>
  );
};

export default Sidebar;
