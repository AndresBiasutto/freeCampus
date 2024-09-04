import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneChapter } from "../redux/actions/moduleActions";
import TabMenu from "../components/templates/chapterTemplates/TabMenu";
import LectureTab from "../components/templates/chapterTemplates/LectureTab"
import MaterialTab from "../components/templates/chapterTemplates/MaterialTab";

const Chapter = () => {
  const chapter = useSelector((state) => state.chapter.chapter);
  const [activeTab, setActiveTab] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOneChapter(id));
  }, [dispatch, id]);
  useEffect(() => {  }, [chapter.Files])  
  const chapterName= chapter.name
  const chapterFiles = chapter?.Files || [];
  const chapterVideo = chapter?.Video?.videoUrl || "sinVideo";

  const showTab = (num) => setActiveTab(num);

  return (
    <div className="w-screen pt-14 h-full flex flex-row justify-center items-start">
      <div className="w-full pt-4 flex flex-col justify-center items-center transition bg-light-lightBackground dark:bg-dark-darkBackground">
        <TabMenu activeTab={activeTab} showTab={showTab} />
        <div className="w-full md:w-3/5">
          {activeTab === 1 && <LectureTab chapter={chapter} chapterId={id} chapterName={chapterName} chapterVideo={chapterVideo} />}
          {activeTab === 2 && <MaterialTab chapterFiles={chapterFiles} chapterName={chapterName} chapterId={chapter.id} />}
        </div>
      </div>
    </div>
  );
};

export default Chapter;
