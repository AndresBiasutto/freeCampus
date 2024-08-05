import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneModule } from "../../redux/actions/moduleActions";
import ModuleHeader from "../../components/ModuleComponents/ModuleDetail/ModuleHeader";
import TabMenu from "../../components/ModuleComponents/ModuleDetail/TabMenu";
import LectureTab from "../../components/ModuleComponents/ModuleDetail/LectureTab";
import MaterialTab from "../../components/ModuleComponents/ModuleDetail/MaterialTab";

const TeacherModuleDetail = () => {
  const module = useSelector((state) => state.module);
  const files = useSelector((state) => state.files);
  const [activeTab, setActiveTab] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOneModule(id));
  }, [dispatch, id, files]);

  const moduleFiles = module.Files || [];
  const moduleVideo = module?.Video?.videoUrl || "sinVideo";

  const showTab = (num) => setActiveTab(num);

  return (
    <div className="flex items-start min-h-screen  text-gray-800 relative pt-6 2xl:container ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
        <ModuleHeader module={module} />
        <TabMenu activeTab={activeTab} showTab={showTab} />
        {activeTab === 1 && <LectureTab module={module} moduleId={id} moduleVideo={moduleVideo} />}
        {activeTab === 2 && <MaterialTab moduleFiles={moduleFiles} moduleId={module.id} />}
      </div>
    </div>
  );
};

export default TeacherModuleDetail;