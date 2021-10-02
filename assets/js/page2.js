searchHistory = [];
var searchParamArr = document.location.search.split('=');
//console.log(searchParamArr);
var dateValue = searchParamArr[1];

var todayButton = document.querySelector("#todayBtn")

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
      localStorage.setItem('searches', JSON.stringify(searchHistory));

      var cards = document.querySelector(".card-body")
      var individualCard = document.createElement('iframe');
      for (var i = 0; i < 25; i++) {
        var individualCard = document.createElement('iframe');
        var showVideos = data.items[i].id.videoId;
        var url = "https://www.youtube.com/embed/" + showVideos;
        individualCard.setAttribute('src', url);
        cards.replaceChild(individualCard, cards.childNodes[i]);
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
      for (var i = 0; i < 25; i++) {
        let li = document.createElement('li');
        let link = document.createElement('a');
        link.setAttribute('href', data.data[i].readMoreUrl);
        li.setAttribute('class', 'bg-secondary rounded list-group-item');
        link.textContent = data.data[i].title;
        li.appendChild(link);
        newsList.appendChild(li);
      }

    });
};

getNews();

//JQUI Datepicker
$(function () {

  $("#datepicker").datepicker({
    showOtherMonths: true,
    selectOtherMonths: true, dateFormat: "MM d"
  });

});
//On click of the search button on second page, this function will fire to load API Youtube fetch.
searchButton.addEventListener("click", getVideosSearch2);

//comment box
var userName = document.getElementById('name');
var commentInput = document.getElementById('commentText');
var submitBtn = document.getElementById('submitComBtn');
var commentShow = document.getElementById('commentDisplay');
//save comment in localStorage
function saveComment(event) {
  event.preventDefault();
  var name = userName.value.trim();
  var comment = commentInput.value.trim();
  var time = moment().format("MMM Do, YYYY HH:mm");
  if (name !== '' && comment !== '') {
    var commentSave = JSON.parse(localStorage.getItem('userComment')) || [];
    var userComment = {
      initials: name,
      submitAt: time,
      userComInput: comment,
    }
    commentSave.push(userComment);
    window.localStorage.setItem('userComment', JSON.stringify(commentSave))
  } else {
    alert('You need to put both name and comment to save your comment')
  }
  printComment();
}
submitBtn.addEventListener('click', saveComment);
//make function to get the comment display on page
function printComment() {
  //clear the text input and comment will show one comment each time user hit submit
  commentShow.innerHTML = '';
  userName.value = '';
  commentInput.value = '';
  var commentSave = JSON.parse(localStorage.getItem('userComment')) || [];
  for (var i = 0; i < commentSave.length; i++) {
    // var div = document.createElement('div');
    var h4 = document.createElement('h4');
    var p = document.createElement('p');
    h4.textContent = commentSave[i].initials + ' ' + "on" + ' ' + commentSave[i].submitAt;
    p.textContent = commentSave[i].userComInput;
    h4.appendChild(p);
    commentShow.appendChild(h4)
  }
}
//run function to prevent comment disappear when refesh the page
printComment();

