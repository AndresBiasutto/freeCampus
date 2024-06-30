import { useState } from "react";
import AsideBar from "./AsideBar";

const TopBar = () => {
  const [showModal, setshowModal] = useState(false);
  const tooggleModal = () => {
    setshowModal(!showModal);
    console.log(showModal);
  };
  return (
    <div className=" lg:hidden sticky z-50 top-0 h-16 border-b bg-white lg:py-2.5 2xl:container ml-auto lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
        <h5 hidden className="text-2xl text-gray-600 font-medium lg:block"></h5>
        <button
          onClick={tooggleModal}
          className="w-12 h-16 -mr-2 border-r lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 my-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className="flex space-x-4"></div>
        <div
          className={`z-10 fixed top-16 pt-6 transition-all bg-slate-200  ${
            showModal ? "-left-20" : "right-0"
          }`}
        >
          <AsideBar />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
