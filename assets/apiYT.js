
var searchParamArr = document.location.search.split('=');
//console.log(searchParamArr);
var dateValue = searchParamArr[1];
//console.log(dateValue);

var todayButton = document.querySelector("#todayBtn")

//Create element for button on second html page.
var searchButton = document.querySelector("#searchBtn")

//API call once user hits search button on homepage.
function getVideosSearch() {
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
  var searchDate2 = document.getElementById("dateSubmit").value;
  //console.log(searchDate)


  const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" + searchDate2 + "&regionCode=US&safeSearch=moderate&topicId=/m/04rlf&videoSyndicated=true&videoEmbeddable=true&type=video&order=viewCount&key=" + YOUTUBE_API_KEY;

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
}
//Call function on load of second page.
getVideosSearch();

var newsList = document.querySelector('#news-list')
function getNews() {
  let url = `https://inshortsapi.vercel.app/news?category=entertainment`
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
  $("#datepicker").datepicker({
    showOtherMonths: true,
    selectOtherMonths: true, dateFormat: "MM d"
  });
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


//comment box
var userName = document.getElementById('name');
var commentInput = document.getElementById('commentText');
var submitBtn = document.getElementById('submitComBtn');
var commentShow = document.getElementById('commentBox');
var time = moment().format('dddd, MMM Do YYYY');
function saveComment(event) {
  event.preventDefault();
  var name = userName.value.trim();
  var comment = commentInput.value.trim();
  if (name !== '' && comment !== '') {
    var commentSave = JSON.parse(localStorage.getItem('userComment')) || [];
    var userComment = {
      initials: name,
      userComInput: comment,
    }
    // userComment.push(commentSave);
    commentSave.push(userComment);
    window.localStorage.setItem('userComment', JSON.stringify(commentSave))
  } else {
    alert('You need to put both name and comment to save your comment')
  }
  printComment();
}
submitBtn.addEventListener('click', saveComment);
function printComment() {
  var commentSave = JSON.parse(localStorage.getItem('userComment')) || [];
  for (var i = 0; i < commentSave.length; i++) {
    var div = document.createElement('tr');
    var h4 = document.createElement('h4');
    var p = document.createElement('p');
    h4.textContent = commentSave[i].initials;
    p.textContent = commentSave[i].userComInput;
    h4.appendChild(p);
    div.appendChild(h4);
    commentShow.appendChild(div)
  }
}

