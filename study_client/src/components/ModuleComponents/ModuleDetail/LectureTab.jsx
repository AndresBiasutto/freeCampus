import PropTypes from "prop-types";
import AddVideo from "../../../components/ModuleComponents/AddVideo";
import Video from "../../../components/Video";

const LectureTab = ({ module, moduleId, moduleVideo, role }) => (
  <div className="bg-sky-800 rounded pt-4">
    <p className="text-sky-100">{module.description}</p>
    {role && role === "teacher" && <AddVideo moduleId={moduleId} />}

    <Video videoUrl={moduleVideo} />
  </div>
);

LectureTab.propTypes = {
  module: PropTypes.shape({
    description: PropTypes.string,
  }).isRequired,
  moduleId: PropTypes.string.isRequired,
  moduleVideo: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default LectureTab;
