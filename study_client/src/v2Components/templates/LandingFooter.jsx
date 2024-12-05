import ImgLogo from "../atoms/ImgLogo";
import logo from "../../assets/img/campusLogo.svg";
import miLogo from "../../assets/img/miLogo.png";
import { Link } from "react-router-dom";

const LandingFooter = () => {
  return (
    <div className=" mt-16 w-full h-52 flex flex-row justify-center items-center bg-light-accent dark:bg-dark-accent ">
      <div className="relative md:static h-full w-full md:w-5/6 lg:w-4/6 flex flex-row justify-between items-end">
        <ImgLogo logo={logo} toLink={"#"} />
        <div className="flex flex-row items-center justify-center gap-2 py-2">
          <img className="h-4" src={miLogo} />
          <Link className=" text-xs text-light-text dark:text-dark-text">
            Creado por Andrés Biasutto
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingFooter;
