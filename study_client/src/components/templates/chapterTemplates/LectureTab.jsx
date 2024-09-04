import PropTypes from "prop-types";
import AddVideo from "../../molecules/ChapterMolecules/AddVideo";
import Video from "../../atoms/ChapterAtoms/Video";
import Spinner from "../../atoms/CommonAtoms/Spinner";
import { useSelector } from "react-redux";
import ModuleHeader from "./ModuleHeader";

const LectureTab = ({ chapter, chapterId, chapterVideo, chapterName }) => {
  const { role } = useSelector((state) => state.auth);
  return (
    <div className="p-4 mb-4 rounded-b-lg w-full flex flex-col items-center justify-center bg-light-background dark:bg-dark-background">
      {role === "teacher" && (
        <div className=" w-full flex flex-row justify-between items-center" >
        <ModuleHeader chapterName={chapterName} />
        <AddVideo chapterId={chapterId} chapterVideo={chapterVideo} />
        </div>
      )}
      <p className=" w-full mb-2 text-light-text dark:text-dark-text">{chapter.description}</p>
      {chapterVideo ? <Video videoUrl={chapterVideo} /> : <Spinner />}

    </div>
  );
};
LectureTab.propTypes = {
  chapter: PropTypes.shape({
    description: PropTypes.string,
  }).isRequired,
  chapterId: PropTypes.string.isRequired,
  chapterVideo: PropTypes.string.isRequired,
  chapterName: PropTypes.string
};

export default LectureTab;
