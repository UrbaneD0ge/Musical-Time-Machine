
var searchParamArr = document.location.search.split('=');
//console.log(searchParamArr);
var dateValue = searchParamArr[1];

//Create element for button on second html page.
var searchButton = document.querySelector("#searchBtn")

//API call once user hits search button on homepage.
function getVideosSearch() {
  //API key
  const YOUTUBE_API_KEY = "AIzaSyCnQnRhLEtt5EzxV8Px3q6LLGqZsxPq3MM";
  //var searchDate = document.getElementById("dateSubmit").value;

  //URL to fetch using API call with parameters.
  const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" + dateValue + "&regionCode=US&safeSearch=moderate&topicId=/m/04rlf&videoSyndicated=true&videoEmbeddable=true&type=video&order=viewCount&key=" + YOUTUBE_API_KEY;

  //Fetching data using the url.
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      var cards = document.querySelector(".card-body")
      var individualCard = document.createElement('iframe');
      
      //Loop to run through the array of data and show videos based on parameters.   
      for (var i = 0; i < 25; i++) {
        var individualCard = document.createElement('iframe');
        var showVideos = data.items[i].id.videoId;
        var url = "https://www.youtube.com/embed/" + showVideos;
        individualCard.setAttribute('src', url);
        //individualCard.setAttribute("class", "test");
        cards.appendChild(individualCard);
      }
      
    });
}
//Same function for second page search button.
function getVideosSearch2() {

  const YOUTUBE_API_KEY = "AIzaSyCnQnRhLEtt5EzxV8Px3q6LLGqZsxPq3MM";
  var searchDate2 = document.getElementById("datepicker").value;

  const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" + searchDate2 + "&regionCode=US&safeSearch=moderate&topicId=/m/04rlf&videoSyndicated=true&videoEmbeddable=true&type=video&order=viewCount&key=" + YOUTUBE_API_KEY;

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      var cards = document.querySelector(".card-body")
      var individualCard = document.createElement('iframe');
      //var targetTest = document.querySelectorAll(".test");

      for (var i = 0; i < 25; i++) {
        var individualCard = document.createElement('iframe');
        var showVideos = data.items[i].id.videoId;
        var url = "https://www.youtube.com/embed/" + showVideos;
        individualCard.setAttribute('src', url);
        //targetTest.setAttribute("src", url);
        cards.replaceChild(individualCard, cards.childNodes[i]);
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

//JQUI Datepicker
$(function () {
  $("#datepicker").datepicker({showOtherMonths: true,
      selectOtherMonths: true, dateFormat: "m/d" });
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

