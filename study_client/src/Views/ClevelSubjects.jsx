
import GoBack from '../components/GoBack'
import Sidebar from '../components/Sidebar'

const ClevelSubjects = () => {
  return (
    <div className="container flex flex-col mx-auto">
      <Sidebar />
      <div className="flex flex-wrap ml-72 my-5 h-screen w-2/3">
        <div className="w-full max-w-full sm:w-1/4 mx-auto text-center">
          <p className="font-Regular text-lg text-slate-500 py-1 bg">
            Materias
          </p>
          <GoBack />
        </div>
      </div>
    </div>
  )
}

export default ClevelSubjects