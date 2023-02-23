function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

function dateFormatter(str) {
  let date = new Date(str);
  let mm = date.getMonth();
  let dd = date.getDate();
  let yyyy = date.getYear() + 1900;

  return mm + '/' + dd + '/' + yyyy
}

var VideoDetails = ({video}) => (
  <div className="video-player-details">
    <h3>{htmlDecode(video.snippet.title)}</h3>
    <h4 align="left">{video.snippet.channelTitle}</h4>
    <div align="left">Posted on {dateFormatter(video.snippet.publishedAt)}</div>
    <br></br>
    <div>{htmlDecode(video.snippet.description)}</div>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoDetails;
