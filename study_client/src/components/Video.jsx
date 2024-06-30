
import YouTubePlayer from "react-player/youtube";

const Video = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-sky-800">
    <YouTubePlayer
      url="https://www.youtube.com/embed/i5jCFWlGlnQ"
      controls
      width="90%"
      height="90%"
    />
  </div>
  )
}

export default Video