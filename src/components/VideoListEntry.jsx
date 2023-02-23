function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

var VideoListEntry = (props) =>{
  return <div className="video-list-entry media">
    <div className="media-left media-middle">
      <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title" onClick={() => props.setCurrentVideo(props.video)}>{htmlDecode(props.video.snippet.title)}</div>
      <div className="video-list-entry-detail">{htmlDecode(props.video.snippet.description)}</div>
    </div>
  </div>
};

//var clickHandler = (event) => setCurrentVideo(props.video);
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
