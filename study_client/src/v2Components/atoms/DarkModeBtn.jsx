import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/actions/authActions";
import { CiLight, CiDark } from "react-icons/ci";
import RoundedBtn from "../../layouts/RoundedBtn";

const DarkModeBtn = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  const handleThemeToggle = () => {
    document.documentElement.classList.toggle("dark", !darkMode);
    dispatch(toggleTheme());
  };
  return (
    // <button
    //   onClick={handleThemeToggle}
    //   className=" group h-14 w-14 md:h-8 md:w-8 p-2 rounded-full flex items-center justify-center bg-dark-secondary dark:bg-light-secondary text-dark-text dark:text-light-text border-2 border-light-border dark:border-dark-border md:hover:shadow-custom  transition"
    // >      {darkMode ? <CiLight className=" md:group-hover:scale-105 text-2xl" /> : <CiDark className="md:group-hover:scale-105 text-2xl" />}
    // </button>
    <RoundedBtn action={handleThemeToggle}>
      {darkMode ? <CiLight className=" md:group-hover:scale-105 text-2xl" /> : <CiDark className="md:group-hover:scale-105 text-2xl" />}
    </RoundedBtn>

  );
};

export default DarkModeBtn;
