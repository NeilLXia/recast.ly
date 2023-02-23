var Search = ({setSearchList, searchYouTube}) => {

  var submitSearchHandler = function(query) {
    searchYouTube(query, function(data) {setSearchList(data)});
  };

  return <div className="search-bar form-inline">
    <input className="form-control" id="searchBox" type="text" onChange={console.log('input')}/>
    <button className="btn hidden-sm-down" onClick = {submitSearchHandler(document.getElementById('searchBox').value); document.getElementById('searchBox').value = '';}>
      <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
