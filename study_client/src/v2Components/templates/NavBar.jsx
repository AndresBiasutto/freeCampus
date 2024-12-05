import NavOrg from "../organisms/NavOrg";

const NavBar = () => {
  return (
    <header className=" z-50 fixed top-0 left-0 w-full h-16 md:h-10 bg-light-primary dark:bg-dark-primary flex flex-row justify-center items-center transition-all">
      <NavOrg />
    </header>
  );
};

export default NavBar;
