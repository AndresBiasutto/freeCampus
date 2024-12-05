import MenuBtn from "../atoms/MenuBtn";
import { useRef, useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import logo from "../../assets/img/campusLogo.svg";
import ImgLogo from "../atoms/ImgLogo";
import NavBtns from "../molecules/NavBtns";
import { useAuth0 } from "@auth0/auth0-react";
import { IoMdLogIn, IoMdLogOut } from "react-icons/io";

const NavOrg = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [show, setShow] = useState(false);
  const navRef = useRef(null);
  useOutsideClick(navRef, () => setShow(false));

  const handleToggle = () => {
    setShow(!show);
  };
  return (
    <div className="relative md:static h-full w-full md:w-5/6 lg:w-4/6 flex flex-row justify-between items-center">
      <ImgLogo logo={logo} toLink={"#"} />
      <MenuBtn toggle={handleToggle} show={show} />
      {isAuthenticated && (
        <>
          <p>Bienvenido, {user?.name}</p>
          <img
            src={user?.picture}
            alt="Profile"
            className="rounded-full w-6 h-6"
          />
        </>
      )}
      <NavBtns
        navRef={navRef}
        show={show}
        action={
          isAuthenticated
            ? () => logout({ returnTo: window.location.origin })
            : loginWithRedirect
        }
        btnName={isAuthenticated ? "salir" : "ingresar"}
        icon={ isAuthenticated? <IoMdLogOut />:<IoMdLogIn />}
        bgColor={isAuthenticated? "": "accent"}
      />

    </div>
  );
};

export default NavOrg;
