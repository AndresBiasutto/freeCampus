import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneChapter } from "../../redux/actions/moduleActions";
import ModuleHeader from "../../components/ModuleComponents/ModuleDetail/ModuleHeader";
import TabMenu from "../../components/ModuleComponents/ModuleDetail/TabMenu";
import LectureTab from "../../components/ModuleComponents/ModuleDetail/LectureTab";
import MaterialTab from "../../components/ModuleComponents/ModuleDetail/MaterialTab";

const StudentChapterDetail = () => {
  const chapter = useSelector((state) => state.chapter);
  const [activeTab, setActiveTab] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOneChapter(id));
  }, [dispatch, id]);

  useEffect(() => {  }, [chapter.Files])
  useEffect(() => {  }, [chapter])
  

  const chapterFiles = chapter?.Files || [];
  const chapterVideo = chapter?.Video?.videoUrl || "sinVideo";

  const showTab = (num) => setActiveTab(num);

  return (
    <div className="w-screen h-screen flex flex-row justify-center items-start">
      <div className="w-full pt-14 flex flex-col justify-center items-center transition bg-light-lightBackground dark:bg-dark-darkBackground">
        <ModuleHeader chapter={chapter} />
        <TabMenu activeTab={activeTab} showTab={showTab} />
        <div className="w-full md:w-3/5">
          {activeTab === 1 && <LectureTab chapter={chapter} chapterId={id} chapterVideo={chapterVideo} />}
          {activeTab === 2 && <MaterialTab chapterFiles={chapterFiles} chapterId={chapter.id} />}
        </div>
      </div>
    </div>
  );
};

export default StudentChapterDetail;
