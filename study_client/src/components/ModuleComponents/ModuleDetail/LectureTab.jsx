import PropTypes from "prop-types";
import AddVideo from "../../../components/ModuleComponents/AddVideo";
import Video from "../../../components/Video";
import Spinner from "../../SistemComponents/Spinner";
import { useSelector } from "react-redux";

const LectureTab = ({ chapter, chapterId, chapterVideo }) => {
  const {role}= useSelector(state=> state.auth)
  return (

  <div className="p-4 mb-4 rounded-b-lg w-full flex flex-col items-center justify-center bg-light-background dark:bg-dark-background">

    {role === "teacher" && <AddVideo chapterId={chapterId} chapterVideo={chapterVideo} />}
     {chapterVideo? <Video videoUrl={chapterVideo} />: <Spinner />}
    <p className="text-sky-100">{chapter.description}</p>
  </div>
);
}
LectureTab.propTypes = {
  chapter: PropTypes.shape({
    description: PropTypes.string,
  }).isRequired,
  chapterId: PropTypes.string.isRequired,
  chapterVideo: PropTypes.string.isRequired,
};

export default LectureTab;
