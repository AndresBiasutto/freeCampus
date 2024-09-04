import YouTubePlayer from "react-player/youtube";
import PropTypes from "prop-types";

const Video = ({ videoUrl }) => {
  return (
    <div className="w-full h-full flex items-start justify-center">
      {<YouTubePlayer url={videoUrl} controls width="100%" />}
    </div>
  );
};

Video.propTypes = {
  videoUrl: PropTypes.string.isRequired,
};

export default Video;
