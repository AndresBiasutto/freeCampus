import { PiStudent } from "react-icons/pi";
import { IoBusiness } from "react-icons/io5";
import { IoLibraryOutline } from "react-icons/io5";
import { LuSchool2 } from "react-icons/lu";

const AboutUsOrg = () => {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="flex justify-center items-center">
        <div className="w-52 h-52 rounded-full bg-light-primary dark:bg-dark-primary flex flex-col justify-center items-center">
          <PiStudent className=" text-7xl text-light-border dark:text-dark-border" />
          <span className=" text-light-border dark:text-dark-border text-center">
            Más de 10.000 usuarios
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-52 h-52 rounded-full bg-light-primary dark:bg-dark-primary flex flex-col justify-center items-center">
          <IoBusiness className=" text-7xl text-light-border dark:text-dark-border" />
          <span className=" text-light-border dark:text-dark-border text-center">
            Más de 30 empresas confian en nosotros
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-52 h-52 rounded-full bg-light-primary dark:bg-dark-primary flex flex-col justify-center items-center">
          <IoLibraryOutline className=" text-7xl text-light-border dark:text-dark-border" />
          <span className=" text-light-border dark:text-dark-border text-center">
            Más de 500 cursos
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-52 h-52 rounded-full bg-light-primary dark:bg-dark-primary flex flex-col justify-center items-center">
          <LuSchool2 className=" text-7xl text-light-border dark:text-dark-border" />
          <span className=" text-light-border dark:text-dark-border text-center">
            Más de 20 instituciones educativas
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutUsOrg;
