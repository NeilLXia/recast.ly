import VideoDetails from './VideoDetails.js'

function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

function autoplay() {
  let element = document.getElementById('autoplay');
  if (element === null) {
    return '';
  }
  if (element.checked === false) {
    return '';
  }

  return '?autoplay=1';
}

var VideoPlayer = (props) => (
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={'https://www.youtube.com/embed/' + props.video.id.videoId + autoplay()} allowFullScreen></iframe>
    </div>
    <div align="right">Autoplay
      <label className="switch">
        <input type="checkbox" id="autoplay"></input>
        <span className="slider round"></span>
      </label>
    </div>
    <div>
      <VideoDetails video={props.video}/>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: PropTypes.object,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
