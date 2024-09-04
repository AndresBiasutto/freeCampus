import { Link } from "react-router-dom";
import campusLogo from "../../assets/img/campusLogo.svg";


const HomePage = () => {
  return (
    <div className="w-full flex items-center flex-col gap-5 justify-center bg-gradient-to-br from-light-background to-light-lightBackground min-h-screen overflow-auto">
        <img src={campusLogo} />
        <div className="w-full flex justify-center items-center">
          <Link to="login" className=" p-2 w-1/2 text-center bg-dark-primary text-dark-text hover:bg-dark-secondary rounded-lg" >ingresar</Link>
        </div>
    </div>
  );
};

export default HomePage;
