//get data from musixmatch, title, artirs, lyrics, primary key date
var daySearch = document.getElementById('datepicker');
var secondAPIKey = '0b4ce678d85dba2115e890af60db2574';
// //first way
// // function findlyrics() {
// //     $.get('https://api.lyrics.ovh/v1/' + encodeURIComponent(artists.value) + '/' + encodeURIComponent(title.value),
// //         function (data) {
// //             console.log(data);
// //             lyrics.textContent = data.lyrics
// //             //.replace(new RegExp("\r", "g"), "<br>")
// //         })
// // }
// // var searchBtn = document.getElementById('searchBtn');
// // searchBtn.addEventListener('click', findlyrics)

//wiki by date
// var wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&offset="
// // fetch(wikiUrl, { mode: "no-cors" })
// //     .then(function (data) {
// //         console.log(data)
// //     });
// function wikiCall() {
//     var searchDay = daySearch.value;
//     var wikiDayTerm = wikiUrl + searchDay;
//     console.log(wikiDayTerm);
// }
// function gotData(data) {
//     console.log(data);
// }
// var searchBtn = document.getElementById('searchBtn')
// searchBtn.addEventListener('click', wikiCall)

//musixMatch
var hostUrl = 'https://enigmatic-citadel-24557.herokuapp.com/';
//fetch(hostUrl + YOUR_URL + parameters

// var day = daySearch.value;
// function musixMatch() {
//     var musixMatchUrl = hostUrl + "https://api.musixmatch.com/ws/1.1/artist.get?artist_id=118&apikey=" + secondAPIKey;
//     fetch(musixMatchUrl)
//         .then(function (respond) {
//             return respond.json();
//         })
//         .then(function (data) {
//             console.log(data)
//         })
//     console.log(musixMatchUrl)
// }
// musixMatch();


// var secondUrl = 'https://api.lyrics.ovh/v1';
// var APIkey = '999af87095194bd5ba1f1947e6bc261f'
// // https://newsapi.org/s/us-entertainment-news-api
// var newsUrl = `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=999af87095194bd5ba1f1947e6bc261f`;
// //on fetch put url we want, inside also has an {object}
// fetch(hostUrl + `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=999af87095194bd5ba1f1947e6bc261f`, {
//     method: 'GET', //GET is the default.
//     //specify the type of infor we get from url
//     credentials: 'same-origin', // include, *same-origin, omit
//     //get infor at the same point (root and end point)
//     redirect: 'follow', // manual, *follow, error
//     //if we get url or someth just follow that thing
// }) //these are optional, they just show that we can do that
//     .then(function (response) {
//         console.log('string', response)
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     });
//music artirst, title, reale
//https://musicbrainz.org/ws/2/recording?query=%22we%20will%20rock%20you%22%20AND%20arid:0383dadf-2a4e-4d10-a46a-e9e041da8eb3&fmt=json
// getApi(newsUrl);
function getNews(event) {
    // event.preventDefault();
    // const APIkey = '999af87095194bd5ba1f1947e6bc261f'
    // let topic = daySearch.value;
    let url = `https://inshortsapi.vercel.app/news?category=entertainment`
    fetch(url)
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            console.log(data)
        })
}
getNews()
//https://inshortsapi.vercel.app/news?category=entertainment