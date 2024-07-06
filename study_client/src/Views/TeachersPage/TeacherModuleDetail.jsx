import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneModule } from "../../redux/actions/moduleActions";
import FileCard from "../../components/FileCard";
import UploadFile from "../../components/UploadFile";
import Video from "../../components/Video";
import AddVideo from "../../components/ModuleComponents/AddVideo";

const TeacherModuleDetail = () => {
  const module = useSelector((state) => state.module);
  const files = useSelector((state) => state.files);
  const [activeTab, setActiveTab] = useState(1);
  const moduleFiles = module.Files;
  const moduleVideo = module?.Video?.videoUrl ? module?.Video?.videoUrl : "sinVideo";
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOneModule(id));
  }, [dispatch, id, files]);
useEffect(() => {
}, [module])

  const showTab = (num) => {
    setActiveTab(num);
  };

  return (
    <div className="flex items-start min-h-screen bg-gray-50 text-gray-800 relative pt-6 2xl:container ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
        <h2>{module.name}</h2>

        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
          <li onClick={() => showTab(1)} className="me-2">
            <button
              href="#"
              aria-current="page"
              className={`inline-block p-4 bg-gray-100 ${
                activeTab === 1 && "active bg-sky-800 text-sky-100"
              } rounded-t-lg hover:bg-sky-800 hover:text-sky-100`}
            >
              Lecture
            </button>
          </li>
          <li onClick={() => showTab(2)} className="me-2">
            <button
              href="#"
              className={`inline-block p-4 bg-gray-100 ${
                activeTab === 2 && "active bg-sky-800 text-sky-100"
              } rounded-t-lg hover:bg-sky-800 hover:text-sky-100`}
            >
              Material adicional
            </button>
          </li>
        </ul>
        {activeTab === 1 && (
          <div className=" bg-sky-800 rounded pt-4">
            <p className=" text-sky-100">{module.description}</p>
            <AddVideo moduleId={id} />
            
            <textarea
          // value={description}
          // onChange={handleDescriptionChange}
          placeholder="Agregar descripción del video"
          rows="5"
          className="w-full h-28 bg-sky-700 text-white p-4 border border-gray-300 rounded resize-none"
        />            <p></p>
            <Video videoUrl={moduleVideo} />
          </div>
        )}

        {activeTab === 2 && (
          <div className=" bg-sky-800 rounded pt-4">
            <UploadFile moduleId={module.id} />
            <div>
              {moduleFiles &&
                moduleFiles.map((file) => (
                  <FileCard key={file.id} file={file} />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherModuleDetail;
