const movie_popular = 'https://api.themoviedb.org/3/movie/popular?api_key=64aaf7502b09faf378927950ce658ad3';
const movie_top_rated = 'https://api.themoviedb.org/3/movie/top_rated?api_key=64aaf7502b09faf378927950ce658ad3';
const movie_upcoming = 'https://api.themoviedb.org/3/movie/upcoming?api_key=64aaf7502b09faf378927950ce658ad3';
const movie_now_playing = 'https://api.themoviedb.org/3/movie/now_playing?api_key=64aaf7502b09faf378927950ce658ad3';
const movie_latest = 'https://api.themoviedb.org/3/movie/latest?api_key=64aaf7502b09faf378927950ce658ad3';

const person_popular = 'https://api.themoviedb.org/3/person/popular?api_key=64aaf7502b09faf378927950ce658ad3'

const tv_airing_today = 'https://api.themoviedb.org/3/tv/airing_today?api_key=64aaf7502b09faf378927950ce658ad3';
const tv_on_the_air = 'https://api.themoviedb.org/3/tv/on_the_air?api_key=64aaf7502b09faf378927950ce658ad3';
const tv_popular = 'https://api.themoviedb.org/3/tv/popular?api_key=64aaf7502b09faf378927950ce658ad3';
const tv_top_rated = 'https://api.themoviedb.org/3/tv/top_rated?api_key=64aaf7502b09faf378927950ce658ad3';

// const search_multi = `https://api.themoviedb.org/3/search/multi?api_key=64aaf7502b09faf378927950ce658ad3&language=en-US&query=${searchtmdb}`


const img_path = 'https://image.tmdb.org/t/p/w500';
const img_original = 'https://image.tmdb.org/t/p/original';
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js'

//     // If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
//     import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js'

//     // Add Firebase products that you want to use
//     import { getAuth } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js'
//     import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js'
// const firebaseConfig = {
//   apiKey: "AIzaSyABXG2VmTw80woZUq6TQD8Xc84fiYrpIF8",
//   authDomain: "auth-form-de806.firebaseapp.com",
//   projectId: "auth-form-de806",
//   storageBucket: "auth-form-de806.appspot.com",
//   messagingSenderId: "900423098287",
//   appId: "1:900423098287:web:cde7d1384a0c2886f7d95a"
// };

//  firebase.initializeApp(firebaseConfig);

//  const fdb = firebase.firestore();

// const firebaseApp2 = firebase.initializeApp({
//   apiKey: "AIzaSyABXG2VmTw80woZUq6TQD8Xc84fiYrpIF8",
//   authDomain: "auth-form-de806.firebaseapp.com",
//   projectId: "auth-form-de806",
//   storageBucket: "auth-form-de806.appspot.com",
//   messagingSenderId: "900423098287",
//   appId: "1:900423098287:web:cde7d1384a0c2886f7d95a"
// });
// const db2 = firebaseApp2.firestore();

//movie holding

const holdingmoviecontainer = document.getElementById('movie');

async function fetchmovieholding() {
    try{
        const response = await fetch(movie_popular);
        console.log(response);
        const data = await response.json();

        console.log(data.results)

        data.results.forEach(mediaholdingm => {
            const holdingmCard = createholdingmCard(mediaholdingm);
            console.log(holdingmCard);
            holdingmoviecontainer.appendChild(holdingmCard)
        });
    } catch(error) {
        console.error("error fetching data:", error);
    }
}
fetchmovieholding();

function createholdingmCard(mediaholdingm) {
    let {backdrop_path,original_language,title, poster_path, vote_average, overview, original_title, id, release_date} = mediaholdingm;

    const holdingmCard = document.createElement('section');
    holdingmCard.classList.add('holding')

    holdingmCard.innerHTML = `
    <section class="holding" style="background:url(${img_original + backdrop_path}) no-repeat center center/cover"">
       <div> 
         <h1 id="titlem">${original_title}</h1>
         <p id="overviewm">${overview}</p>
         <div class="details">
            <h5 id="languagem">${original_language}</h5>
            <h4 id="datem">${release_date}</h4>
            <h3><span>TMDB</span><i class="bi bi-star-fill"></i><span id="ratingm">${vote_average} / 10</span></h3>
         </div>
         <div class="btn">
            <a href="#6" id="Stream"><i class="bi bi-play-circle-fill"></i><span>Stream</span></a>
         </div>
        </div>
     </section>
    `;  
  return holdingmCard;
}


//end movie holding


//firestore





// cards 1

const pmcontainer = document.getElementById('pmc');

async function fetchpm() {
  const response = await fetch(movie_popular);
  const data = await response.json();
  return data.results;
}

async function displaypmCards() {
  const movieData = await fetchtrm();
  const pmcontainer = document.getElementById('pmc');

  movieData.forEach(moviepm => {
    const pmCard = document.createElement('li');
    pmCard.classList.add('card');
    
    pmCard.dataset.originalTitle = moviepm.original_title;
    pmCard.dataset.vote = moviepm.vote_average;
    pmCard.dataset.language = moviepm.original_language;
    pmCard.dataset.adult = moviepm.adult;
    pmCard.dataset.releaseDate = moviepm.release_date;
    pmCard.dataset.popularity = moviepm.popularity;
    pmCard.dataset.voteCount = moviepm.vote_count;
    pmCard.dataset.id = moviepm.id;
    pmCard.dataset.overview = moviepm.overview;
    pmCard.dataset.title = moviepm.title;
    pmCard.dataset.posterPath = moviepm.poster_path;

    pmCard.innerHTML = `
<li class="card" style="background: url('${img_path + moviepm.poster_path}') no-repeat center center/cover;
    display: flex;
    flex-direction: column;
    flex: 0 0 100%;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 15%);
    scroll-snap-align: start;
    transition: all 0.2s;
    box-sizing: border-box;
    width: 116%;
    height: auto;
    transform: translateX(-6.9%);">

    <div class="card-top">
        <h3 class="card-title">TMDB</h3>
        <button onclick=addToWatchlist('${moviepm.id}')><i class="bi bi-bookmark-star"></i></button>
    </div>
    <div class="card-link-wrapper">
        <h3>${moviepm.title}</h3>
        <h5>${moviepm.release_date}</h5>
        <h4 class="vote ${getVote(moviepm.vote_average)}"><i class="bi bi-star-fill"></i><span> ${moviepm.vote_average} / 10</span></h4>
        <button onclick="navigateToSecondPage('${moviepm.id}')" class="card-link">
            <i class="bi bi-play-fill"></i> Watch
        </button>
    </div>
</li>
    `;
    pmcontainer.appendChild(pmCard);
  });
}


const addToWatchlist =(e)=>{
  console.log("ghdghj");
  let value = this.id;
  console.log(e);
  db2.collection("users").add({
    first: value,
  })
  .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
  });
 }


function navigateToSecondPage(movieId) {
  const movieCardElement = document.querySelector(`[data-id="${movieId}"]`);

  const originalTitle = movieCardElement.dataset.originalTitle;
  const vote = movieCardElement.dataset.vote;
  const language = movieCardElement.dataset.language;
  const adult = movieCardElement.dataset.adult;
  const releaseDate = movieCardElement.dataset.releaseDate;
  const popularity = movieCardElement.dataset.popularity;
  const voteCount = movieCardElement.dataset.voteCount;
  const id = movieCardElement.dataset.id;
  const overview = movieCardElement.dataset.overview;
  const title = movieCardElement.dataset.title;
  const posterPath = movieCardElement.dataset.posterPath;

  const queryString = `originalTitle=${encodeURIComponent(originalTitle)}&vote=${encodeURIComponent(vote)}&language=${encodeURIComponent(language)}&adult=${encodeURIComponent(adult)}&releaseDate=${encodeURIComponent(releaseDate)}&popularity=${encodeURIComponent(popularity)}&voteCount=${encodeURIComponent(voteCount)}&id=${encodeURIComponent(id)}&overview=${encodeURIComponent(overview)}&title=${encodeURIComponent(title)}&posterPath=${encodeURIComponent(posterPath)}`;

  window.location.href = `redirect.html?${queryString}`;
}
displaypmCards();

function getVote(vote) {
  if(vote >=7.5){
    return 'green'
  }else if(vote >=5){
    return 'orange'
  }else{
    return 'red'
  }
}


//another card

// cards 2

const trmcontainer = document.getElementById('trm');

async function fetchtrm() {
  const response = await fetch(movie_top_rated);
  const data = await response.json();
  return data.results;
}

async function displaytrmCards() {
  const movieData = await fetchtrm();
  const trmcontainer = document.getElementById('trmc');

  movieData.forEach(movietrm => {
    const trmCard = document.createElement('li');
    trmCard.classList.add('card');
    
    trmCard.dataset.originalTitle = movietrm.original_title;
    trmCard.dataset.vote = movietrm.vote_average;
    trmCard.dataset.language = movietrm.original_language;
    trmCard.dataset.adult = movietrm.adult;
    trmCard.dataset.releaseDate = movietrm.release_date;
    trmCard.dataset.popularity = movietrm.popularity;
    trmCard.dataset.voteCount = movietrm.vote_count;
    trmCard.dataset.id = movietrm.id;
    trmCard.dataset.overview = movietrm.overview;
    trmCard.dataset.title = movietrm.title;
    trmCard.dataset.posterPath = movietrm.poster_path;

    trmCard.innerHTML = `
<li class="card" style="background: url('${img_path + movietrm.poster_path}') no-repeat center center/cover;
    display: flex;
    flex-direction: column;
    flex: 0 0 100%;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 15%);
    scroll-snap-align: start;
    transition: all 0.2s;
    box-sizing: border-box;
    width: 116%;
    height: auto;
    transform: translateX(-6.9%);">

    <div class="card-top">
        <h3 class="card-title">TMDB</h3>
        <button onclick="addToWatchlist()"><i class="bi bi-bookmark-star"></i></button>
    </div>
    <div class="card-link-wrapper">
        <h3>${movietrm.title}</h3>
        <h5>${movietrm.release_date}</h5>
        <h4 class="vote ${getVote(movietrm.vote_average)}"><i class="bi bi-star-fill"></i><span> ${movietrm.vote_average} / 10</span></h4>
        <button onclick="navigateToSecondPage('${movietrm.id}')" class="card-link">
            <i class="bi bi-play-fill"></i> Watch
        </button>
    </div>
</li>
    `;
    trmcontainer.appendChild(trmCard);
  });
}


function navigateToSecondPage(movieId) {
  const movieCardElement = document.querySelector(`[data-id="${movieId}"]`);

  const originalTitle = movieCardElement.dataset.originalTitle;
  const vote = movieCardElement.dataset.vote;
  const language = movieCardElement.dataset.language;
  const adult = movieCardElement.dataset.adult;
  const releaseDate = movieCardElement.dataset.releaseDate;
  const popularity = movieCardElement.dataset.popularity;
  const voteCount = movieCardElement.dataset.voteCount;
  const id = movieCardElement.dataset.id;
  const overview = movieCardElement.dataset.overview;
  const title = movieCardElement.dataset.title;
  const posterPath = movieCardElement.dataset.posterPath;

  const queryString = `originalTitle=${encodeURIComponent(originalTitle)}&vote=${encodeURIComponent(vote)}&language=${encodeURIComponent(language)}&adult=${encodeURIComponent(adult)}&releaseDate=${encodeURIComponent(releaseDate)}&popularity=${encodeURIComponent(popularity)}&voteCount=${encodeURIComponent(voteCount)}&id=${encodeURIComponent(id)}&overview=${encodeURIComponent(overview)}&title=${encodeURIComponent(title)}&posterPath=${encodeURIComponent(posterPath)}`;

  window.location.href = `redirect.html?${queryString}`;
}
displaytrmCards();

function getVote(vote) {
  if(vote >=7.5){
    return 'green'
  }else if(vote >=5){
    return 'orange'
  }else{
    return 'red'
  }
}


//another card

// cards

const upmcontainer = document.getElementById('upmc');

async function fetchupm() {
  const response = await fetch(movie_upcoming);
  const data = await response.json();
  return data.results;
}

async function displayupmCards() {
  const movieData = await fetchupm();
  const upmcontainer = document.getElementById('upmc');

  movieData.forEach(movieupm => {
    const upmCard = document.createElement('li');
    upmCard.classList.add('card');
    
    upmCard.dataset.originalTitle = movieupm.original_title;
    upmCard.dataset.vote = movieupm.vote_average;
    upmCard.dataset.language = movieupm.original_language;
    upmCard.dataset.adult = movieupm.adult;
    upmCard.dataset.releaseDate = movieupm.release_date;
    upmCard.dataset.popularity = movieupm.popularity;
    upmCard.dataset.voteCount = movieupm.vote_count;
    upmCard.dataset.id = movieupm.id;
    upmCard.dataset.overview = movieupm.overview;
    upmCard.dataset.title = movieupm.title;
    upmCard.dataset.posterPath = movieupm.poster_path;

    upmCard.innerHTML = `
<li class="card" style="background: url('${img_path + movieupm.poster_path}') no-repeat center center/cover;
    display: flex;
    flex-direction: column;
    flex: 0 0 100%;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 15%);
    scroll-snap-align: start;
    transition: all 0.2s;
    box-sizing: border-box;
    width: 116%;
    height: auto;
    transform: translateX(-6.9%);">

    <div class="card-top">
        <h3 class="card-title">TMDB</h3>
        <button onclick="addToWatchlist()"><i class="bi bi-bookmark-star"></i></button>
    </div>
    <div class="card-link-wrapper">
        <h3>${movieupm.title}</h3>
        <h5>${movieupm.release_date}</h5>
        <h4 class="vote ${getVote(movieupm.vote_average)}"><i class="bi bi-star-fill"></i><span> ${movieupm.vote_average} / 10</span></h4>
        <button onclick="navigateToSecondPage('${movieupm.id}')" class="card-link">
            <i class="bi bi-play-fill"></i> Watch
        </button>
    </div>
</li>
    `;
    upmcontainer.appendChild(upmCard);
  });
}


function navigateToSecondPage(movieId) {
  const movieCardElement = document.querySelector(`[data-id="${movieId}"]`);

  const originalTitle = movieCardElement.dataset.originalTitle;
  const vote = movieCardElement.dataset.vote;
  const language = movieCardElement.dataset.language;
  const adult = movieCardElement.dataset.adult;
  const releaseDate = movieCardElement.dataset.releaseDate;
  const popularity = movieCardElement.dataset.popularity;
  const voteCount = movieCardElement.dataset.voteCount;
  const id = movieCardElement.dataset.id;
  const overview = movieCardElement.dataset.overview;
  const title = movieCardElement.dataset.title;
  const posterPath = movieCardElement.dataset.posterPath;

  const queryString = `originalTitle=${encodeURIComponent(originalTitle)}&vote=${encodeURIComponent(vote)}&language=${encodeURIComponent(language)}&adult=${encodeURIComponent(adult)}&releaseDate=${encodeURIComponent(releaseDate)}&popularity=${encodeURIComponent(popularity)}&voteCount=${encodeURIComponent(voteCount)}&id=${encodeURIComponent(id)}&overview=${encodeURIComponent(overview)}&title=${encodeURIComponent(title)}&posterPath=${encodeURIComponent(posterPath)}`;

  window.location.href = `redirect.html?${queryString}`;
}
displayupmCards();

function getVote(vote) {
  if(vote >=7.5){
    return 'green'
  }else if(vote >=5){
    return 'orange'
  }else{
    return 'red'
  }
}


//another card

// cards

const npmcontainer = document.getElementById('npmc');

async function fetchnpm() {
  const response = await fetch(movie_now_playing);
  const data = await response.json();
  return data.results;
}

async function displaynpmCards() {
  const movieData = await fetchnpm();
  const npmcontainer = document.getElementById('npmc');

  movieData.forEach(movienpm => {
    const npmCard = document.createElement('li');
    npmCard.classList.add('card');
    
    npmCard.dataset.originalTitle = movienpm.original_title;
    npmCard.dataset.vote = movienpm.vote_average;
    npmCard.dataset.language = movienpm.original_language;
    npmCard.dataset.adult = movienpm.adult;
    npmCard.dataset.releaseDate = movienpm.release_date;
    npmCard.dataset.popularity = movienpm.popularity;
    npmCard.dataset.voteCount = movienpm.vote_count;
    npmCard.dataset.id = movienpm.id;
    npmCard.dataset.overview = movienpm.overview;
    npmCard.dataset.title = movienpm.title;
    npmCard.dataset.posterPath = movienpm.poster_path;

    npmCard.innerHTML = `
<li class="card" style="background: url('${img_path + movienpm.poster_path}') no-repeat center center/cover;
    display: flex;
    flex-direction: column;
    flex: 0 0 100%;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 15%);
    scroll-snap-align: start;
    transition: all 0.2s;
    box-sizing: border-box;
    width: 116%;
    height: auto;
    transform: translateX(-6.9%);">

    <div class="card-top">
        <h3 class="card-title">TMDB</h3>
        <button onclick="addToWatchlist()"><i class="bi bi-bookmark-star"></i></button>
    </div>
    <div class="card-link-wrapper">
        <h3>${movienpm.title}</h3>
        <h5>${movienpm.release_date}</h5>
        <h4 class="vote ${getVote(movienpm.vote_average)}"><i class="bi bi-star-fill"></i><span> ${movienpm.vote_average} / 10</span></h4>
        <button onclick="navigateToSecondPage('${movienpm.id}')" class="card-link">
            <i class="bi bi-play-fill"></i> Watch
        </button>
    </div>
</li>
    `;
    npmcontainer.appendChild(npmCard);
  });
}


function navigateToSecondPage(movieId) {
  const movieCardElement = document.querySelector(`[data-id="${movieId}"]`);

  const originalTitle = movieCardElement.dataset.originalTitle;
  const vote = movieCardElement.dataset.vote;
  const language = movieCardElement.dataset.language;
  const adult = movieCardElement.dataset.adult;
  const releaseDate = movieCardElement.dataset.releaseDate;
  const popularity = movieCardElement.dataset.popularity;
  const voteCount = movieCardElement.dataset.voteCount;
  const id = movieCardElement.dataset.id;
  const overview = movieCardElement.dataset.overview;
  const title = movieCardElement.dataset.title;
  const posterPath = movieCardElement.dataset.posterPath;

  const queryString = `originalTitle=${encodeURIComponent(originalTitle)}&vote=${encodeURIComponent(vote)}&language=${encodeURIComponent(language)}&adult=${encodeURIComponent(adult)}&releaseDate=${encodeURIComponent(releaseDate)}&popularity=${encodeURIComponent(popularity)}&voteCount=${encodeURIComponent(voteCount)}&id=${encodeURIComponent(id)}&overview=${encodeURIComponent(overview)}&title=${encodeURIComponent(title)}&posterPath=${encodeURIComponent(posterPath)}`;

  window.location.href = `redirect.html?${queryString}`;
}
displaynpmCards();

function getVote(vote) {
  if(vote >=7.5){
    return 'green'
  }else if(vote >=5){
    return 'orange'
  }else{
    return 'red'
  }
}


//another card

// // cards

const ppcontainer = document.getElementById('ppc');

async function fetchpp() {
  const response = await fetch(person_popular);
  const data = await response.json();
  return data.results;
}

async function displayppCards() {
  const movieData = await fetchpp();
  const ppcontainer = document.getElementById('ppc');

  movieData.forEach(moviepp => {
    const ppCard = document.createElement('li');
    ppCard.classList.add('card');
    
    ppCard.dataset.originalTitle = moviepp.original_name;
    ppCard.dataset.vote = moviepp.known_for[0].vote_average;
    ppCard.dataset.language = moviepp.known_for[0].original_language;
    ppCard.dataset.adult = moviepp.adult;
    ppCard.dataset.knownForDepartment = moviepp.known_for_department;
    ppCard.dataset.popularity = moviepp.popularity;
    ppCard.dataset.voteCount = moviepp.known_for[0].vote_count;
    ppCard.dataset.id = moviepp.id;
    ppCard.dataset.overview = moviepp.known_for[0].overview;
    ppCard.dataset.title = moviepp.name;
    ppCard.dataset.posterPath = moviepp.profile_path;
    ppCard.dataset.releaseDate = moviepp.known_for[0].release_date;

    ppCard.innerHTML = `
<li class="card" style="background: url('${img_path + moviepp.profile_path}') no-repeat center center/cover;
    display: flex;
    flex-direction: column;
    flex: 0 0 100%;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 15%);
    scroll-snap-align: start;
    transition: all 0.2s;
    box-sizing: border-box;
    width: 116%;
    height: auto;
    transform: translateX(-6.9%);">

    <div class="card-top">
        <h3 class="card-title">TMDB</h3>
        <button onclick="addToWatchlist()"><i class="bi bi-bookmark-star"></i></button>
    </div>
    <div class="card-link-wrapper">
        <h3>${moviepp.original_name}</h3>
        <h5>${moviepp.known_for_department}</h5>
        <h4 class="vote ${getVote(moviepp.known_for[0].vote_average)}"><i class="bi bi-star-fill"></i><span> ${moviepp.known_for[0].vote_average} / 10</span></h4>
        <button onclick="navigateToSecondPage('${moviepp.id}')" class="card-link">
        <i class="bi bi-file-person-fill"></i> About
        </button>
    </div>
</li>
    `;
    ppcontainer.appendChild(ppCard);
  });
}


function navigateToSecondPage(movieId) {
  const movieCardElement = document.querySelector(`[data-id="${movieId}"]`);

  const originalTitle = movieCardElement.dataset.originalTitle;
  const vote = movieCardElement.dataset.vote;
  const language = movieCardElement.dataset.language;
  const adult = movieCardElement.dataset.adult;
  const releaseDate = movieCardElement.dataset.releaseDate;
  const popularity = movieCardElement.dataset.popularity;
  const voteCount = movieCardElement.dataset.voteCount;
  const id = movieCardElement.dataset.id;
  const overview = movieCardElement.dataset.overview;
  const title = movieCardElement.dataset.title;
  const posterPath = movieCardElement.dataset.posterPath;

  const queryString = `originalTitle=${encodeURIComponent(originalTitle)}&vote=${encodeURIComponent(vote)}&language=${encodeURIComponent(language)}&adult=${encodeURIComponent(adult)}&releaseDate=${encodeURIComponent(releaseDate)}&popularity=${encodeURIComponent(popularity)}&voteCount=${encodeURIComponent(voteCount)}&id=${encodeURIComponent(id)}&overview=${encodeURIComponent(overview)}&title=${encodeURIComponent(title)}&posterPath=${encodeURIComponent(posterPath)}`;

  window.location.href = `redirect.html?${queryString}`;
}
displayppCards();

function getVote(vote) {
  if(vote >=7.5){
    return 'green'
  }else if(vote >=5){
    return 'orange'
  }else{
    return 'red'
  }
}


//another card

// cards

const attvcontainer = document.getElementById('attvc');

async function fetchattv() {
  const response = await fetch(tv_airing_today);
  const data = await response.json();
  return data.results;
}

async function displayattvCards() {
  const movieData = await fetchattv();
  const attvcontainer = document.getElementById('attvc');

  movieData.forEach(movieattv => {
    const attvCard = document.createElement('li');
    attvCard.classList.add('card');
    
    attvCard.dataset.originalTitle = movieattv.original_name;
    attvCard.dataset.vote = movieattv.vote_average;
    attvCard.dataset.language = movieattv.original_language;
    attvCard.dataset.adult = movieattv.adult;
    attvCard.dataset.releaseDate = movieattv.first_air_date;
    attvCard.dataset.popularity = movieattv.popularity;
    attvCard.dataset.voteCount = movieattv.vote_count;
    attvCard.dataset.id = movieattv.id;
    attvCard.dataset.overview = movieattv.overview;
    attvCard.dataset.title = movieattv.name;
    attvCard.dataset.posterPath = movieattv.poster_path;

    attvCard.innerHTML = `
<li class="card" style="background: url('${img_path + movieattv.poster_path}') no-repeat center center/cover;
    display: flex;
    flex-direction: column;
    flex: 0 0 100%;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 15%);
    scroll-snap-align: start;
    transition: all 0.2s;
    box-sizing: border-box;
    width: 116%;
    height: auto;
    transform: translateX(-6.9%);">

    <div class="card-top">
        <h3 class="card-title">TMDB</h3>
        <button onclick="addToWatchlist()"><i class="bi bi-bookmark-star"></i></button>
    </div>
    <div class="card-link-wrapper">
        <h3>${movieattv.name}</h3>
        <h5>${movieattv.first_air_date}</h5>
        <h4 class="vote ${getVote(movieattv.vote_average)}"><i class="bi bi-star-fill"></i><span> ${movieattv.vote_average} / 10</span></h4>
        <button onclick="navigateToSecondPage('${movieattv.id}')" class="card-link">
            <i class="bi bi-play-fill"></i> Watch
        </button>
    </div>
</li>
    `;
    attvcontainer.appendChild(attvCard);
  });
}


function navigateToSecondPage(movieId) {
  const movieCardElement = document.querySelector(`[data-id="${movieId}"]`);

  const originalTitle = movieCardElement.dataset.originalTitle;
  const vote = movieCardElement.dataset.vote;
  const language = movieCardElement.dataset.language;
  const adult = movieCardElement.dataset.adult;
  const releaseDate = movieCardElement.dataset.releaseDate;
  const popularity = movieCardElement.dataset.popularity;
  const voteCount = movieCardElement.dataset.voteCount;
  const id = movieCardElement.dataset.id;
  const overview = movieCardElement.dataset.overview;
  const title = movieCardElement.dataset.title;
  const posterPath = movieCardElement.dataset.posterPath;

  const queryString = `originalTitle=${encodeURIComponent(originalTitle)}&vote=${encodeURIComponent(vote)}&language=${encodeURIComponent(language)}&adult=${encodeURIComponent(adult)}&releaseDate=${encodeURIComponent(releaseDate)}&popularity=${encodeURIComponent(popularity)}&voteCount=${encodeURIComponent(voteCount)}&id=${encodeURIComponent(id)}&overview=${encodeURIComponent(overview)}&title=${encodeURIComponent(title)}&posterPath=${encodeURIComponent(posterPath)}`;

  window.location.href = `redirect.html?${queryString}`;
}
displayattvCards();

function getVote(vote) {
  if(vote >=7.5){
    return 'green'
  }else if(vote >=5){
    return 'orange'
  }else{
    return 'red'
  }
}


//another card

// cards

const otatvcontainer = document.getElementById('otatvc');

async function fetchotatv() {
  const response = await fetch(tv_on_the_air);
  const data = await response.json();
  return data.results;
}

async function displayotatvCards() {
  const movieData = await fetchotatv();
  const otatvcontainer = document.getElementById('otatvc');

  movieData.forEach(movieotatv => {
    const otatvCard = document.createElement('li');
    otatvCard.classList.add('card');
    
    otatvCard.dataset.originalTitle = movieotatv.original_name;
    otatvCard.dataset.vote = movieotatv.vote_average;
    otatvCard.dataset.language = movieotatv.original_language;
    otatvCard.dataset.adult = movieotatv.adult;
    otatvCard.dataset.releaseDate = movieotatv.first_air_date;
    otatvCard.dataset.popularity = movieotatv.popularity;
    otatvCard.dataset.voteCount = movieotatv.vote_count;
    otatvCard.dataset.id = movieotatv.id;
    otatvCard.dataset.overview = movieotatv.overview;
    otatvCard.dataset.title = movieotatv.name;
    otatvCard.dataset.posterPath = movieotatv.poster_path;

    otatvCard.innerHTML = `
<li class="card" style="background: url('${img_path + movieotatv.poster_path}') no-repeat center center/cover;
    display: flex;
    flex-direction: column;
    flex: 0 0 100%;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 15%);
    scroll-snap-align: start;
    transition: all 0.2s;
    box-sizing: border-box;
    width: 116%;
    height: auto;
    transform: translateX(-6.9%);">

    <div class="card-top">
        <h3 class="card-title">TMDB</h3>
        <button onclick="addToWatchlist()"><i class="bi bi-bookmark-star"></i></button>
    </div>
    <div class="card-link-wrapper">
        <h3>${movieotatv.name}</h3>
        <h5>${movieotatv.first_air_date}</h5>
        <h4 class="vote ${getVote(movieotatv.vote_average)}"><i class="bi bi-star-fill"></i><span> ${movieotatv.vote_average} / 10</span></h4>
        <button onclick="navigateToSecondPage('${movieotatv.id}')" class="card-link">
            <i class="bi bi-play-fill"></i> Watch
        </button>
    </div>
</li>
    `;
    otatvcontainer.appendChild(otatvCard);
  });
}


function navigateToSecondPage(movieId) {
  const movieCardElement = document.querySelector(`[data-id="${movieId}"]`);

  const originalTitle = movieCardElement.dataset.originalTitle;
  const vote = movieCardElement.dataset.vote;
  const language = movieCardElement.dataset.language;
  const adult = movieCardElement.dataset.adult;
  const releaseDate = movieCardElement.dataset.releaseDate;
  const popularity = movieCardElement.dataset.popularity;
  const voteCount = movieCardElement.dataset.voteCount;
  const id = movieCardElement.dataset.id;
  const overview = movieCardElement.dataset.overview;
  const title = movieCardElement.dataset.title;
  const posterPath = movieCardElement.dataset.posterPath;

  const queryString = `originalTitle=${encodeURIComponent(originalTitle)}&vote=${encodeURIComponent(vote)}&language=${encodeURIComponent(language)}&adult=${encodeURIComponent(adult)}&releaseDate=${encodeURIComponent(releaseDate)}&popularity=${encodeURIComponent(popularity)}&voteCount=${encodeURIComponent(voteCount)}&id=${encodeURIComponent(id)}&overview=${encodeURIComponent(overview)}&title=${encodeURIComponent(title)}&posterPath=${encodeURIComponent(posterPath)}`;

  window.location.href = `redirect.html?${queryString}`;
}
displayotatvCards();

function getVote(vote) {
  if(vote >=7.5){
    return 'green'
  }else if(vote >=5){
    return 'orange'
  }else{
    return 'red'
  }
}


//another card

// cards

const ptvcontainer = document.getElementById('ptvc');

async function fetchptv() {
  const response = await fetch(tv_popular);
  const data = await response.json();
  return data.results;
}

async function displayptvCards() {
  const movieData = await fetchptv();
  const ptvcontainer = document.getElementById('ptvc');

  movieData.forEach(movieptv => {
    const ptvCard = document.createElement('li');
    ptvCard.classList.add('card');
    
    ptvCard.dataset.originalTitle = movieptv.original_name;
    ptvCard.dataset.vote = movieptv.vote_average;
    ptvCard.dataset.language = movieptv.original_language;
    ptvCard.dataset.adult = movieptv.adult;
    ptvCard.dataset.releaseDate = movieptv.first_air_date;
    ptvCard.dataset.popularity = movieptv.popularity;
    ptvCard.dataset.voteCount = movieptv.vote_count;
    ptvCard.dataset.id = movieptv.id;
    ptvCard.dataset.overview = movieptv.overview;
    ptvCard.dataset.title = movieptv.name;
    ptvCard.dataset.posterPath = movieptv.poster_path;

    ptvCard.innerHTML = `
<li class="card" style="background: url('${img_path + movieptv.poster_path}') no-repeat center center/cover;
    display: flex;
    flex-direction: column;
    flex: 0 0 100%;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 15%);
    scroll-snap-align: start;
    transition: all 0.2s;
    box-sizing: border-box;
    width: 116%;
    height: auto;
    transform: translateX(-6.9%);">

    <div class="card-top">
        <h3 class="card-title">TMDB</h3>
        <button onclick="addToWatchlist()"><i class="bi bi-bookmark-star"></i></button>
    </div>
    <div class="card-link-wrapper">
        <h3>${movieptv.name}</h3>
        <h5>${movieptv.first_air_date}</h5>
        <h4 class="vote ${getVote(movieptv.vote_average)}"><i class="bi bi-star-fill"></i><span> ${movieptv.vote_average} / 10</span></h4>
        <button onclick="navigateToSecondPage('${movieptv.id}')" class="card-link">
            <i class="bi bi-play-fill"></i> Watch
        </button>
    </div>
</li>
    `;
    ptvcontainer.appendChild(ptvCard);
  });
}


function navigateToSecondPage(movieId) {
  const movieCardElement = document.querySelector(`[data-id="${movieId}"]`);

  const originalTitle = movieCardElement.dataset.originalTitle;
  const vote = movieCardElement.dataset.vote;
  const language = movieCardElement.dataset.language;
  const adult = movieCardElement.dataset.adult;
  const releaseDate = movieCardElement.dataset.releaseDate;
  const popularity = movieCardElement.dataset.popularity;
  const voteCount = movieCardElement.dataset.voteCount;
  const id = movieCardElement.dataset.id;
  const overview = movieCardElement.dataset.overview;
  const title = movieCardElement.dataset.title;
  const posterPath = movieCardElement.dataset.posterPath;

  const queryString = `originalTitle=${encodeURIComponent(originalTitle)}&vote=${encodeURIComponent(vote)}&language=${encodeURIComponent(language)}&adult=${encodeURIComponent(adult)}&releaseDate=${encodeURIComponent(releaseDate)}&popularity=${encodeURIComponent(popularity)}&voteCount=${encodeURIComponent(voteCount)}&id=${encodeURIComponent(id)}&overview=${encodeURIComponent(overview)}&title=${encodeURIComponent(title)}&posterPath=${encodeURIComponent(posterPath)}`;

  window.location.href = `redirect.html?${queryString}`;
}
displayptvCards();

function getVote(vote) {
  if(vote >=7.5){
    return 'green'
  }else if(vote >=5){
    return 'orange'
  }else{
    return 'red'
  }
}


//another card

// cards

const trtvcontainer = document.getElementById('trtvc');

async function fetchtrtv() {
  const response = await fetch(tv_top_rated);
  const data = await response.json();
  return data.results;
}

async function displaytrtvCards() {
  const movieData = await fetchtrtv();
  const trtvcontainer = document.getElementById('trtvc');

  movieData.forEach(movietrtv => {
    const trtvCard = document.createElement('li');
    trtvCard.classList.add('card');
    
    trtvCard.dataset.originalTitle = movietrtv.original_name;
    trtvCard.dataset.vote = movietrtv.vote_average;
    trtvCard.dataset.language = movietrtv.original_language;
    trtvCard.dataset.adult = movietrtv.adult;
    trtvCard.dataset.releaseDate = movietrtv.first_air_date;
    trtvCard.dataset.popularity = movietrtv.popularity;
    trtvCard.dataset.voteCount = movietrtv.vote_count;
    trtvCard.dataset.id = movietrtv.id;
    trtvCard.dataset.overview = movietrtv.overview;
    trtvCard.dataset.title = movietrtv.name;
    trtvCard.dataset.posterPath = movietrtv.poster_path;

    trtvCard.innerHTML = `
<li class="card" style="background: url('${img_path + movietrtv.poster_path}') no-repeat center center/cover;
    display: flex;
    flex-direction: column;
    flex: 0 0 100%;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 15%);
    scroll-snap-align: start;
    transition: all 0.2s;
    box-sizing: border-box;
    width: 116%;
    height: auto;
    transform: translateX(-6.9%);">

    <div class="card-top">
        <h3 class="card-title">TMDB</h3>
        <button class = 'wwb' id='${movietrtv.id}'><i class="bi bi-bookmark-star"></i></button>
    </div>
    <div class="card-link-wrapper">
        <h3>${movietrtv.name}</h3>
        <h5>${movietrtv.first_air_date}</h5>
        <h4 class="vote ${getVote(movietrtv.vote_average)}"><i class="bi bi-star-fill"></i><span> ${movietrtv.vote_average} / 10</span></h4>
        <button onclick="navigateToSecondPage('${movietrtv.id}')" class="card-link">
            <i class="bi bi-play-fill"></i> Watch
        </button>
    </div>
</li>
    `;
    trtvcontainer.appendChild(trtvCard);
  });
}


function navigateToSecondPage(movieId) {
  const movieCardElement = document.querySelector(`[data-id="${movieId}"]`);

  const originalTitle = movieCardElement.dataset.originalTitle;
  const vote = movieCardElement.dataset.vote;
  const language = movieCardElement.dataset.language;
  const adult = movieCardElement.dataset.adult;
  const releaseDate = movieCardElement.dataset.releaseDate;
  const popularity = movieCardElement.dataset.popularity;
  const voteCount = movieCardElement.dataset.voteCount;
  const id = movieCardElement.dataset.id;
  const overview = movieCardElement.dataset.overview;
  const title = movieCardElement.dataset.title;
  const posterPath = movieCardElement.dataset.posterPath;

  const queryString = `originalTitle=${encodeURIComponent(originalTitle)}&vote=${encodeURIComponent(vote)}&language=${encodeURIComponent(language)}&adult=${encodeURIComponent(adult)}&releaseDate=${encodeURIComponent(releaseDate)}&popularity=${encodeURIComponent(popularity)}&voteCount=${encodeURIComponent(voteCount)}&id=${encodeURIComponent(id)}&overview=${encodeURIComponent(overview)}&title=${encodeURIComponent(title)}&posterPath=${encodeURIComponent(posterPath)}`;

  window.location.href = `redirect.html?${queryString}`;
}
displaytrtvCards();

function getVote(vote) {
  if(vote >=7.5){
    return 'green'
  }else if(vote >=5){
    return 'orange'
  }else{
    return 'red'
  }
}


//another card


// search
const suggestcontainer = document.getElementById('suggest');


var inputsearch = document.getElementById('searchtmdb');
inputsearch.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.getElementById('searchbtn').click();
  }
});

async function fetchsuggestion() {

       const searchtmdb = document.getElementById('searchtmdb').value;
       const search_multi = `https://api.themoviedb.org/3/search/multi?api_key=64aaf7502b09faf378927950ce658ad3&language=en-US&query=${searchtmdb}`;
    try{
        const response = await fetch(search_multi);
        console.log(response);
        const data = await response.json();

        console.log(data.results)
        
        suggestcontainer.innerHTML = "";
        data.results.forEach(mediasuggestion => {
            const suggestionCard = createsuggestionCard(mediasuggestion);
            console.log(suggestionCard);
            suggestcontainer.appendChild(suggestionCard)
        });
    } catch(error) {
        console.error("error fetching data:", error);
    }

    let suggestcard = document.getElementById('suggestcard')
      if (suggestcard ==0) {
        suggestcard.remove();
        console.log("card removed");
      }
    
  }

fetchsuggestion();
 
 function createsuggestionCard(mediasuggestion) {
    let {title, poster_path, vote_average, overview, original_title, id, release_date, backdrop_path , profile_path} = mediasuggestion;

    const suggestionCard = document.createElement('a');
    suggestionCard.classList.add('suggestcard')

    suggestionCard.innerHTML = `
         <a href="#5" class="suggestcard">
            <img src="${img_path + poster_path}" alt="${img_path  + profile_path}">
            <div class="suggestcont">
                <h3>${original_title}</h3>
                <p> ${release_date} <span>TMDB</span><i class="bi bi-star-fill"></i><span>${vote_average} / 10</span></p>
            </div>
          </a>  
    `;
    return suggestionCard;

}

//search end


//dark mode


document.getElementById('themechange1').addEventListener('click', function() {
  const root = document.documentElement;

  if (root.style.getPropertyValue('--platinum') === '#e5e5e5') {
    root.style.setProperty('--red', '#ef233c');
    root.style.setProperty('--darkened', '#c00424');
    root.style.setProperty('--platinum', '#3d3b37');
    root.style.setProperty('--black', '#fff');
    root.style.setProperty('--white', '#2b2d42');
    root.style.setProperty('--thumb', '#edf2f4');
    root.style.setProperty('--webcolor', '#FDE5D9');
  } else {
    root.style.setProperty('--red', '#ef233c');
    root.style.setProperty('--darkened', '#c00424');
    root.style.setProperty('--platinum', '#e5e5e5');
    root.style.setProperty('--black', '#2b2d42');
    root.style.setProperty('--white', '#fff');
    root.style.setProperty('--thumb', '#edf2f4');
    root.style.setProperty('--webcolor', '#FDE5D9');
  }
});

document.getElementById('themechange2').addEventListener('click', function() {
  const root = document.documentElement;

  if (root.style.getPropertyValue('--platinum') === '#e5e5e5') {
    root.style.setProperty('--red', '#ef233c');
    root.style.setProperty('--darkened', '#c00424');
    root.style.setProperty('--platinum', '#3d3b37');
    root.style.setProperty('--black', '#fff');
    root.style.setProperty('--white', '#2b2d42');
    root.style.setProperty('--thumb', '#edf2f4');
    root.style.setProperty('--webcolor', '#FDE5D9');
  } else {
    root.style.setProperty('--red', '#ef233c');
    root.style.setProperty('--darkened', '#c00424');
    root.style.setProperty('--platinum', '#e5e5e5');
    root.style.setProperty('--black', '#2b2d42');
    root.style.setProperty('--white', '#fff');
    root.style.setProperty('--thumb', '#edf2f4');
    root.style.setProperty('--webcolor', '#FDE5D9');
  }
});

//end dark mode



//  document.getElementsByClassName('wwb')[0].addEventListener('click',(e)=>{
  
//  })

