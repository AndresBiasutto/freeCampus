import Sidebar from "../components/Sidebar";
import HomePage from "./HomePage";

const ClevelPage = () => {
  return (
    <div className="container flex flex-col mx-auto">
      <Sidebar />
      <div className="flex flex-wrap my-10 h-screen w-full pl-80">
        <HomePage />
      </div>
    </div>
  );
};

export default ClevelPage;
