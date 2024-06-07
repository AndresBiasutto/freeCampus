import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneModule } from "../../redux/actions/moduleActions";
import FileCard from "../../components/FileCard";
import UploadFile from "../../components/UploadFile";

const TeacherModuleDetail = () => {
  const module = useSelector((state) => state.module);
  const moduleFiles= module.Files;
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getOneModule(id));
  }, [dispatch, id]);
  return (
    <div className=" flex items-start min-h-screen bg-gray-50 text-gray-800 relative pt-6 2xl:container ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
        <h2>{module.name}</h2>
        <h3>{module.description} </h3>
        <UploadFile />
        <div>
          {moduleFiles &&
            moduleFiles.map((file) => (
              <FileCard key={moduleFiles.id} file={file} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherModuleDetail;
