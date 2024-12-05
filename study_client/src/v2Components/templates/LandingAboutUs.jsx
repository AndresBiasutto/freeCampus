import AboutUsOrg from "../organisms/AboutUsOrg";

const LandingAboutUs = () => {
  return (
    <div className="w-full h-full flex flex-col gap-2 justify-start items-center">
      <h2 className="">¡Estudia con nosotros!</h2>
      <p>Miles de profesores, alumnos y empresas confian nosotros</p>
      <div className="w-full">
        <AboutUsOrg />
      </div>
    </div>
  );
};

export default LandingAboutUs;
