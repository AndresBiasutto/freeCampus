import { Toast } from "flowbite-react";
import { BsMailbox } from "react-icons/bs";
// import Calendar from "../../components/UserComponents/Calendar/Calendar";
import BigCalendar from "../../components/UserComponents/Calendar/BigCalendar/BigCalendar";

const Dashboard = () => {
  return (
    <div className=" pt-14 w-screen h-screen flex flex-row justify-center items-start">
      <div className=" p-4 mt-4 mb-4 rounded-lg w-full md:w-3/5 bg-light-background dark:bg-dark-background flex flex-col items-center justify-start">
        <div className=" w-full flex justify-center items-center">
          <Toast className="fixed top-16 left-1/2 -translate-x-1/2">
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

        <div className="grid grid-row-2 gap-4 w-full">
          {/* <Calendar /> */}
          <BigCalendar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
