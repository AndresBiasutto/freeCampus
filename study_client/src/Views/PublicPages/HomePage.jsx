import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import { IoLogIn } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-900 to-green-900 min-h-screen overflow-auto">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="w-4/5">
          <img src={logo} className=" w-screen" />{" "}
        </div>
        <div className="w-5/6 my-10 ml-6">
          <h3 className="text-gray-300">
            Creá cláses <br />
            <strong className="text-white">Compartílas</strong>
            <br />
            ¡Aprendé, que es grátis!
          </h3>
        </div>
        <div className="hidden sm:block opacity-50 z-0">
          <div className="shadow-2xl w-96 h-96 rounded-full -mt-72"></div>
          <div className="shadow-2xl w-96 h-96 rounded-full -mt-96"></div>
          <div className="shadow-xl w-80 h-80 rounded-full ml-8 -mt-96"></div>
        </div>
        <div className="text-white">
          <Link className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-5 uppercase">
            <div className="group flex items-center bg-indigo-900 bg-opacity-40 shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 mt-5 cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 transition">
              <i>
                <FaUserPlus className="text-white text-4xl " />
              </i>
              <div>
                <span>Registrate</span>
              </div>
              <div>
                <i className="fa fa-chevron-right opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 block transition"></i>
              </div>
            </div>
          </Link>
          <Link to="/login" className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-5 uppercase">
            <div className="group flex items-center bg-indigo-900 bg-opacity-40 shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 mt-5 cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 transition">
              <i>
                <IoLogIn className="text-white text-4xl " />
              </i>
              <div>
                <span>Ingresa</span>
              </div>
              <div>
                <i className="fa fa-chevron-right opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 block transition"></i>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
