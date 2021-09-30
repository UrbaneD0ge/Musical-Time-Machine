var searchButton = document.querySelector("#searchBtn")


function getVideosSearch(){
  const YOUTUBE_API_KEY = "AIzaSyAYAu3YiE2oiiiSFNWemBMC_Kw6uil9pU8";
  var searchDate = document.getElementById("dateSubmit").value;
  //console.log(searchDate)
  
  const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" + searchDate + "&regionCode=US&safeSearch=moderate&topicId=/m/04rlf&videoSyndicated=true&videoEmbeddable=true&type=video&order=viewCount&key=" + YOUTUBE_API_KEY;
  
  fetch(url)
    .then(function(response){
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

function getVideosSearch2(){
  const YOUTUBE_API_KEY = "AIzaSyAYAu3YiE2oiiiSFNWemBMC_Kw6uil9pU8";
  var searchDate2 = document.getElementById("dateSubmit").value;
  console.log(searchDate)
  
  const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" + searchDate2 + "&regionCode=US&safeSearch=moderate&topicId=/m/04rlf&videoSyndicated=true&videoEmbeddable=true&type=video&order=viewCount&key=" + YOUTUBE_API_KEY;
  
  fetch(url)
    .then(function(response){
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
 getVideosSearch();

searchButton.addEventListener("click", getVideosSearch2);