import { Toast } from "flowbite-react";
import { BsMailbox } from "react-icons/bs";

const Dashboard = () => {
  return (
    <div className=" w-screen h-screen pt-14 flex flex-row justify-center align-center">
      <div className=" w-full md:w-2/4 bg-dark-background/50 flex flex-col items-center justify-start">
        <div className=" w-full flex justify-center items-center">
          <Toast>
            <div className="text-sm font-normal flex flex-row justify-center items-center gap-2">
              <BsMailbox className=" text-red-400" /> Mensajes sin leer
            </div>
            <div className="ml-auto flex items-center space-x-2">
              <a
                href="#"
                className="rounded-lg p-1.5 text-sm font-medium text-cyan-600 hover:bg-cyan-100 dark:text-cyan-500 dark:hover:bg-gray-700"
              >
                ver mensajes
              </a>
              <Toast.Toggle />
            </div>
          </Toast>
        </div>
        <div className="grid grid-cols-3 gap-4 w-full">
          <div className="w-full h-full bg-black">👌</div>
          <div className="w-full h-full bg-black">👌</div>
          <div className="w-full h-full bg-black">👌</div>
          <div className="w-full h-full bg-black">👌</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
