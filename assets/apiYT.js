searchHistory = [];
var searchParamArr = document.location.search.split('=');
//console.log(searchParamArr);
var dateValue = searchParamArr[1];
//console.log(dateValue);

var todayButton = document.querySelector("#todayBtn")

//Create element for button on second html page.
var searchButton = document.querySelector("#searchBtn")

//Get searches out of local storage and append them to the document in a button format
function getSearches() {
  for(var i = 1; i < searchHistory.length; i++) {
    var dateSearched = searchHistory[i];

    var btnEl = document.createElement('li');
    btnEl.textContent = dateSearched;

    var searchList = document.getElementById('recent-searches');
    searchList.appendChild(btnEl);
  }
}

//API call once user hits search button on homepage.
function getVideosSearch() {
  var dateSearch = dateValue;

  searchHistory.push(dateSearch);
  //API key
  const YOUTUBE_API_KEY = "AIzaSyAYAu3YiE2oiiiSFNWemBMC_Kw6uil9pU8";
  //var searchDate = document.getElementById("dateSubmit").value;

  //URL to fetch using API call with parameters.
  const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" + dateValue + "&regionCode=US&safeSearch=moderate&topicId=/m/04rlf&videoSyndicated=true&videoEmbeddable=true&type=video&order=viewCount&key=" + YOUTUBE_API_KEY;

  //Fetching data using the url.
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);


      //Loop to run through the array of data and show videos based on parameters.   
      for (var i = 0; i < 25; i++) {
        var showVideos = data.items[i].id.videoId;
        var url = "https://www.youtube.com/embed/" + showVideos;
        console.log(url)
        document.querySelector(".youtubeVideo" + i).src = url;
      }

    });
}
//Same function for second page search button.
function getVideosSearch2() {

  const YOUTUBE_API_KEY = "AIzaSyAYAu3YiE2oiiiSFNWemBMC_Kw6uil9pU8";
  var searchDate2 = document.getElementById("datepicker").value;
  console.log(searchDate2);
  searchHistory.push(searchDate2);
  console.log(searchHistory);

  const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" + searchDate2 + "&regionCode=US&safeSearch=moderate&topicId=/m/04rlf&videoSyndicated=true&videoEmbeddable=true&type=video&order=viewCount&key=" + YOUTUBE_API_KEY;

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      localStorage.setItem('searches', JSON.stringify(searchHistory));


      for (var i = 0; i < 25; i++) {
        var showVideos = data.items[i].id.videoId;
        var url = "https://www.youtube.com/embed/" + showVideos;
        console.log(url)
        document.querySelector(".youtubeVideo" + i).src = url;
      }

    });
}
//Call function on load of second page.
getVideosSearch();

var newsList = document.querySelector('#news-list')
function getNews() {
  let url = `https://inshortsapi.vercel.app/news?category=world`
  fetch(url)
    .then(function (response) {
      return response.json()
    }).then(function (data) {
      console.log(data)
      for (var i = 0; i < 25; i++) {
        let li = document.createElement('li');
        let link = document.createElement('a');
        link.setAttribute('href', data.data[i].readMoreUrl)
        //link.setAttribute('tartget', '_blank')
        link.textContent = data.data[i].title;
        li.appendChild(link);
        newsList.appendChild(li);
      }

    });
};

getNews();

// JQUI Datepicker
$(function () {
  $("#datepicker").datepicker({showOtherMonths: true,
      selectOtherMonths: true, dateFormat: "MM d" });
});
//save day inputgit
// function saveDayInput() {
//   var searchDate = document.getElementById("datepicker").value;
//   if (searchDate !== '') {
//     var searchHistory = JSON.parse(localStorage.getItem('search')) || [];
//     searchHistory.push(searchDate);
//     window.localStorage.setItem('highscores', JSON.stringify(viewScore));
//     console.log(searchHistory);
//   }
// };
//On click of the search button on second page, this function will fire to load API Youtube fetch.
searchButton.addEventListener("click", getVideosSearch2);

//local storage
function inIt() {
  var storedSearches = JSON.parse(localStorage.getItem('searches'));

  if(storedSearches){
    searchHistory = storedSearches;
  }
  getSearches();
}

inIt();
