
import YouTubePlayer from "react-player/youtube";
import PropTypes from "prop-types";

const Video = ({ videoUrl }) => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-sky-800">
    {videoUrl !== "sinVideo" ? <YouTubePlayer
        url={videoUrl}
        controls
        width="90%"
        height="90%"
      />: "subir un video"}

    </div>
  );
};

Video.propTypes = {
  videoUrl: PropTypes.string.isRequired,
};

export default Video;
