import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/actions/actions";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import { CiLight, CiDark } from "react-icons/ci";
import LogOut from "../AsideBarComponents/LogOut";

const NavBar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);
  const { role, image, name, email } = useSelector((state) => state.auth);

  const handleThemeToggle = () => {
    document.documentElement.classList.toggle("dark", !darkMode);
    dispatch(toggleTheme());
  };

  return (
    <Navbar
      fluid
      className="z-50 fixed w-screen transition bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text"
    >
      <Navbar.Brand href="https://flowbite-react.com">
        <img src={logo} className="mr-3 w-36 sm:h-9" alt="Mari campus logo" />
      </Navbar.Brand>
      <div className="flex md:order-2 items-center">
        <button
          onClick={handleThemeToggle}
          className="mr-4 p-2 rounded-full bg-dark-background dark:bg-light-background text-dark-text dark:text-light-text"
        >
          {darkMode ? <CiLight /> : <CiDark />}
        </button>
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" img={image} rounded />}
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
            <Link to={`/settings`}>Settings</Link>{" "}
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item className="relative">
            <LogOut />
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link>
          <NavLink
            to={`/${role}/home`}
            className={({ isActive }) =>
              isActive ? "active text-blue-700" : ""
            }
          >
            Home
          </NavLink>
        </Navbar.Link>
        <Navbar.Link>
          <NavLink
            to={`/${role}/dashboard`}
            className={({ isActive }) =>
              isActive ? "active text-blue-700" : ""
            }
          >
            Dashboard
          </NavLink>
        </Navbar.Link>
        <Navbar.Link>
          <NavLink
            to={`/${role}/subjects`}
            className={({ isActive }) =>
              isActive ? "active text-blue-700" : ""
            }
          >
            Materias
          </NavLink>
        </Navbar.Link>
        <Navbar.Link>
          <NavLink
            to={`/${role}/users`}
            className={({ isActive }) =>
              isActive ? "active text-blue-700" : ""
            }
          >
            Users
          </NavLink>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
