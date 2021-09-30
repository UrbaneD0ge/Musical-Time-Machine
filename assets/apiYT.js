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
    })
}
getNews()

var searchParamArr =  document.location.search.split('=');
//console.log(searchParamArr);
var dateValue = searchParamArr[1];
//console.log(dateValue);

var todayButton = document.querySelector("#todayBtn")
var searchButton = document.querySelector("#searchBtn")

function getVideosToday() {
  const YOUTUBE_API_KEY = "AIzaSyAYAu3YiE2oiiiSFNWemBMC_Kw6uil9pU8";
  var todaysDate = moment().format("l");
  console.log(todaysDate)
  const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" + todaysDate + "&regionCode=US&safeSearch=moderate&topicId=/m/04rlf&videoSyndicated=true&videoEmbeddable=true&type=video&order=viewCount&key=" + YOUTUBE_API_KEY;

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      for (var i = 0; i < 25; i++) {
        var showVideos = data.items[i].id.videoId;
        var url = "https://www.youtube.com/embed/" + showVideos;
        console.log(url)
        document.querySelector(".youtubeVideo" + i).src = url;
      }

    });

};

function getVideosSearch() {
  const YOUTUBE_API_KEY = "AIzaSyAYAu3YiE2oiiiSFNWemBMC_Kw6uil9pU8";
  var searchDate = document.getElementById("dayinput").value;
  console.log(searchDate)

  const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" + searchDate + "&regionCode=US&safeSearch=moderate&topicId=/m/04rlf&videoSyndicated=true&videoEmbeddable=true&type=video&order=viewCount&key=" + YOUTUBE_API_KEY;

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      for (var i = 0; i < 25; i++) {
        var showVideos = data.items[i].id.videoId;
        var url = "https://www.youtube.com/embed/" + showVideos;
        console.log(url)
        document.querySelector(".youtubeVideo" + i).src = url;
      }

    });
};
// todayButton.addEventListener("click", getVideosToday);
// searchButton.addEventListener("click", getVideosSearch);


