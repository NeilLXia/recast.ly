import VideoListEntry from './VideoListEntry.js'

var VideoList = ({videos, setCurrentVideo}) => (
  <div className="video-list">
    {videos.map((video) => {
      return <VideoListEntry key={video.id.videoId} video={video} setCurrentVideo={setCurrentVideo}/>
    })}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
