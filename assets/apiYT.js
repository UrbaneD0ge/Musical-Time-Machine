
var searchParamArr =  document.location.search.split('=');
//console.log(searchParamArr);
var dateValue = searchParamArr[1];
//console.log(dateValue);

var todayButton = document.querySelector("#todayBtn")

//Create element for button on second html page.
var searchButton = document.querySelector("#searchBtn")

//API call once user hits search button on homepage.
function getVideosSearch(){
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
  for(var i = 0; i < 25; i++){
    var showVideos = data.items[i].id.videoId;
    var url = "https://www.youtube.com/embed/" + showVideos;
    console.log(url)
    document.querySelector(".youtubeVideo"+ i).src = url; 
  }
    
  });
}
//Same function for second page search button.
function getVideosSearch2(){

  const YOUTUBE_API_KEY = "AIzaSyAYAu3YiE2oiiiSFNWemBMC_Kw6uil9pU8";
  var searchDate2 = document.getElementById("dateSubmit").value;
  //console.log(searchDate)

  
  const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" + searchDate2 + "&regionCode=US&safeSearch=moderate&topicId=/m/04rlf&videoSyndicated=true&videoEmbeddable=true&type=video&order=viewCount&key=" + YOUTUBE_API_KEY;
  
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

    
  for(var i = 0; i < 25; i++){
    var showVideos = data.items[i].id.videoId;
    var url = "https://www.youtube.com/embed/" + showVideos;
    console.log(url)
    document.querySelector(".youtubeVideo"+ i).src = url; 
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
      selectOtherMonths: true, maxDate: +0, dateFormat: "MM d" });
});
 //On click of the search button on second page, this function will fire to load API Youtube fetch.
searchButton.addEventListener("click", getVideosSearch2);

