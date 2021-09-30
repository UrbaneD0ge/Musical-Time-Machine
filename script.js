// Datepicker 
$(function () {
    $("#datepicker").datepicker({showOtherMonths: true,
        selectOtherMonths: true, maxDate: +0, dateFormat: "MM d" });
});

//Form Handler
var qDate;

$(function () {
    $('#dateSubmit').on('submit', function (e) {
        e.preventDefault();
        qDate = $('#dateSubmit input').val();
        console.log(qDate);
    })
});

$(function () {
    $('#todayBtn').on('click', function (t) {
        t.preventDefault();
        qDate = moment().format('MMMM Do');
        console.log(qDate);
    })
})

// var todayButton = document.querySelector("#todayBtn")
// var searchButton = document.querySelector("#searchBtn")

// function getVideosToday() {
//     const YOUTUBE_API_KEY = "AIzaSyAYAu3YiE2oiiiSFNWemBMC_Kw6uil9pU8";
//     var todaysDate = moment().format("l");
//     console.log(todaysDate)
//     const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" + todaysDate + "&regionCode=US&safeSearch=moderate&topicId=/m/04rlf&videoSyndicated=true&videoEmbeddable=true&type=video&order=viewCount&key=" + YOUTUBE_API_KEY;

//     fetch(url)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);

//             for (var i = 0; i < 25; i++) {
//                 var showVideos = data.items[i].id.videoId;
//                 var url = "https://www.youtube.com/embed/" + showVideos;
//                 console.log(url)
//                 document.querySelector(".youtubeVideo" + i).src = url;
//             }

//         });

// };

// function getVideosSearch() {
//     const YOUTUBE_API_KEY = "AIzaSyAYAu3YiE2oiiiSFNWemBMC_Kw6uil9pU8";
//     var searchDate = document.getElementById("dayinput").value;
//     console.log(searchDate)

//     const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" + searchDate + "&regionCode=US&safeSearch=moderate&topicId=/m/04rlf&videoSyndicated=true&videoEmbeddable=true&type=video&order=viewCount&key=" + YOUTUBE_API_KEY;

//     fetch(url)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);

//             for (var i = 0; i < 25; i++) {
//                 var showVideos = data.items[i].id.videoId;
//                 var url = "https://www.youtube.com/embed/" + showVideos;
//                 console.log(url)
//                 document.querySelector(".youtubeVideo" + i).src = url;
//             }

//         });
// };
// todayButton.addEventListener("click", getVideosToday);
// searchButton.addEventListener("click", getVideosSearch);

