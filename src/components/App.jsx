import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js'

const { useState, useEffect } = React;

var App = ({searchYouTube}) => {
  // Create a state for the current video and video list data
  const [searchList, setSearchList] = useState(exampleVideoData);
  const [currentVideo, setCurrentVideo] = useState(searchList[0]); // Use useEffect if useState doesn't work

  useEffect(function() {
    searchYouTube('cat', function(data) {setSearchList(data); setCurrentVideo(data[0]);});
  }, []);

  // Return the DOM elements
  return <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><h5><em>search</em><Search setSearchList={setSearchList} searchYouTube={searchYouTube}/></h5></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <div><h5><em>videoPlayer</em> <VideoPlayer video={currentVideo}/></h5></div>
      </div>
      <div className="col-md-5">
        <div><h5><em>videoList</em> <VideoList videos={searchList} setCurrentVideo={setCurrentVideo}/></h5></div>
      </div>
    </div>
  </div>
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
