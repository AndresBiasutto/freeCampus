import { BsMailbox } from "react-icons/bs";

const Toast = () => {
  return (
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
  )
}

export default Toast