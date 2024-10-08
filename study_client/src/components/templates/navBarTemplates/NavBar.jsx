import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../redux/actions/authActions";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import campusLogo from "../../../assets/img/campusLogo.svg";
import { CiLight, CiDark } from "react-icons/ci";
import LogOut from "../../atoms/NavVarAtoms/buttons/LogOut";
import GoBack from "../../atoms/NavVarAtoms/buttons/GoBack";
import GoForward from "../../atoms/NavVarAtoms/buttons/GoForward";

const NavBar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const { role, image, name, email, id } = useSelector((state) => state.auth);
  const location = useLocation();

  const handleThemeToggle = () => {
    document.documentElement.classList.toggle("dark", !darkMode);
    dispatch(toggleTheme());
  };

  const shouldShowNavigation = ![
    `/${role}/home`,
    `/${name}/dashboard`,
    `/${role}/subjects`,
    `/${role}/users`,
  ].includes(location.pathname);

  return (
    <Navbar
      fluid
      className="  z-50 fixed w-screen transition bg-light-background/95 dark:bg-dark-background/95 text-light-text dark:text-dark-text"
    >
      <Link to={`http://localhost:5173/${role}/${name}/dashboard`}>
        <img
          src={campusLogo}
          className="mr-3 w-8 sm:w-16 "
          alt="Mari campus logo"
        />
      </Link>
      <div className="flex md:order-2 items-center gap-2">
        <div className="flex flex-row-reverse gap-2 justify-center items-center">
          <button
            onClick={handleThemeToggle}
            className="mr-4 p-2 rounded-full bg-dark-background/50 dark:bg-light-background/50 text-dark-text dark:text-light-text"
          >
            {darkMode ? <CiLight /> : <CiDark />}
          </button>
          {shouldShowNavigation && (
            <div className=" flex md:order-2 items-center gap-2">
              <GoBack />
              <GoForward />
            </div>
          )}
        </div>

        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" img={image} rounded />}
          className=" bg-light-primary dark:bg-dark-primary"
        >
          <Dropdown.Header>
            <span className="block text-sm text-light-text dark:text-dark-text">
              {name}
            </span>
            <span className="block truncate text-sm font-medium text-light-text dark:text-dark-text">
              {email}
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
            {" "}
            <Link to={`${role}/${name}/settings/${id}`}>Settings</Link>
          </Dropdown.Item>
          <Dropdown.Divider />
            <LogOut />
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavLink
          to={`/${name}/dashboard`}
          className={({ isActive }) => (isActive ? "active text-blue-700" : "")}
        >
          Dashboard
        </NavLink>
        {role === "admin" && (
          <NavLink
            to={`/${role}/${name}/cpannel`}
            className={({ isActive }) =>
              isActive ? "active text-blue-700" : ""
            }
          >
            C-pannel
          </NavLink>
        )}
        {role !== "admin" && (
          <NavLink
            to={`/${role}/${name}/subjects`}
            className={({ isActive }) =>
              isActive ? "active text-blue-700" : ""
            }
          >
            Mis materias
          </NavLink>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
