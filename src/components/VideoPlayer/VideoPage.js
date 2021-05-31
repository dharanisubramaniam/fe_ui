import "./VideoPage.css";
import React from "react";
import VideoSideBar from "./VideoSideBar";
import Player from "./Player";

function VideoPage() {
  // const [path, setPath] = useState({});

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios.get("/api/video");
  //     setPath(response.data.results[0]);
  //     console.log("path", path);
  //   }
  //   fetchData();
  // }, []);
  return (
    <>
      <h2>3D in AfterEffects</h2>
      <div className="video">
        <div className="video__mainBody">
          <VideoSideBar />
          <Player />
        </div>
      </div>
    </>
  );
}

export default VideoPage;
