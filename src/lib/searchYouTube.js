import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  // TODO
  // $.ajax({
  //   url: `https://app-hrsei-api.herokuapp.com/api/recastly/videos/?youtube_api_key=${YOUTUBE_API_KEY}`,
  //   type: 'GET',
  //   data: {q: query},
  //   success: function(data) {
  //     callback(data);
  //   }
  // });

  let fetchUrl = 'https://app-hrsei-api.herokuapp.com/api/recastly/videos/'; // ?youtube_api_key=' + YOUTUBE_API_KEY + '?q=' + query;

  // clearTimeout(timeout);
  // var timeout = setTimeout(
    fetch(fetchUrl, {
      method: 'GET',
      headers: {
        Authorization: API_KEY,
        Accept: 'application.json',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        console.log('test on 6');

        if(response.ok) {
          return response.json();
        }})
      .then((data) => {
        // callback(data);
        console.log(data)
      })
      // .catch(() => (
      //   console.log('error');
      // )
    // )
    // , 500);
};

export default searchYouTube;
