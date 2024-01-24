//cards

const trmcontainer = document.getElementById('trmc');

async function fetchtrm() {
    try{
        const response = await fetch(movie_top_rated);
        console.log(response);
        const data = await response.json();

        console.log(data.results)

        data.results.forEach(mediatrm => {
            const trmCard = createtrmCard(mediatrm);
            console.log(trmCard);
            trmcontainer.appendChild(trmCard)
        });
    } catch(error) {
        console.error("error fetching data:", error);
    }
}
fetchtrm();

function createtrmCard(mediatrm) {
    let {title, poster_path, vote_average, overview, original_title, id, release_date} = mediatrm;

    const trmCard = document.createElement('li');
    trmCard.classList.add('card')

    trmCard.innerHTML = `
    <li class="card" style="background: url('${img_path + poster_path}') no-repeat center center/cover;
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
      <input type="checkbox" name="watchlist" id="${id}" hidden><label for="watch1"><i class="bi bi-bookmark-star"></i></label>
    </div>
    <div class="card-link-wrapper">
      <h3>${title}</h3>
      <h5>${release_date}</h5>
      <h4 class="vote"><i class="bi bi-star-fill"></i><span> ${vote_average} / 10</span></h4>
      <a href="" class="card-link"><i class="bi bi-play-fill"></i>Watch</a>
    </div>
  </li>
    `;
    return trmCard;
}
//another card


//cards

const upmcontainer = document.getElementById('upmc');

async function fetchupm() {
    try{
        const response = await fetch(movie_upcoming);
        console.log(response);
        const data = await response.json();

        console.log(data.results)

        data.results.forEach(mediaupm => {
            const upmCard = createupmCard(mediaupm);
            console.log(upmCard);
            upmcontainer.appendChild(upmCard)
        });
    } catch(error) {
        console.error("error fetching data:", error);
    }
}
fetchupm();

function createupmCard(mediaupm) {
    let {title, poster_path, vote_average, overview, original_title, id, release_date} = mediaupm;

    const upmCard = document.createElement('li');
    upmCard.classList.add('card')

    upmCard.innerHTML = `
    <li class="card" style="background: url('${img_path + poster_path}') no-repeat center center/cover;
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
      <input type="checkbox" name="watchlist" id="${id}" hidden><label for="watch1"><i class="bi bi-bookmark-star"></i></label>
    </div>
    <div class="card-link-wrapper">
      <h3>${title}</h3>
      <h5>${release_date}</h5>
      <h4 class="vote"><i class="bi bi-star-fill"></i><span> ${vote_average} / 10</span></h4>
      <a href="" class="card-link"><i class="bi bi-play-fill"></i>Watch</a>
    </div>
  </li>
    `;
    return upmCard;
}
//another card


//cards

const npmcontainer = document.getElementById('npmc');

async function fetchnpm() {
    try{
        const response = await fetch(movie_now_playing);
        console.log(response);
        const data = await response.json();

        console.log(data.results)

        data.results.forEach(medianpm => {
            const npmCard = createnpmCard(medianpm);
            console.log(npmCard);
            npmcontainer.appendChild(npmCard)
        });
    } catch(error) {
        console.error("error fetching data:", error);
    }
}
fetchnpm();

function createnpmCard(medianpm) {
    let {title, poster_path, vote_average, overview, original_title, id, release_date} = medianpm;

    const npmCard = document.createElement('li');
    npmCard.classList.add('card')

    npmCard.innerHTML = `
    <li class="card" style="background: url('${img_path + poster_path}') no-repeat center center/cover;
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
      <input type="checkbox" name="watchlist" id="${id}" hidden><label for="watch1"><i class="bi bi-bookmark-star"></i></label>
    </div>
    <div class="card-link-wrapper">
      <h3>${title}</h3>
      <h5>${release_date}</h5>
      <h4 class="vote"><i class="bi bi-star-fill"></i><span> ${vote_average} / 10</span></h4>
      <a href="" class="card-link"><i class="bi bi-play-fill"></i>Watch</a>
    </div>
  </li>
    `;
    return npmCard;
}
//another card



//cards

const ppcontainer = document.getElementById('ppc');

async function fetchpp() {
    try{
        const response = await fetch(person_popular);
        console.log(response);
        const data = await response.json();

        console.log(data.results)

        data.results.forEach(mediapp => {
            const ppCard = createppCard(mediapp);
            console.log(ppCard);
            ppcontainer.appendChild(ppCard)
        });
    } catch(error) {
        console.error("error fetching data:", error);
    }
}
fetchpp();

function createppCard(mediapp) {
    let {id, known_for_department, original_name, popularity, profile_path} = mediapp;

    const ppCard = document.createElement('li');
    ppCard.classList.add('card')

    ppCard.innerHTML = `
    <li class="card" style="background: url('${img_path + profile_path}') no-repeat center center/cover;
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
      <input type="checkbox" name="watchlist" id="${id}" hidden><label for="watch1"><i class="bi bi-bookmark-star"></i></label>
    </div>
    <div class="card-link-wrapper">
      <h3>${original_name}</h3>
      <h5>${known_for_department}</h5>
      <h4 class=""><i class="bi bi-star-fill"></i><span> ${popularity}</span></h4>
      <a href="" class="card-link"><i class="bi bi-file-person-fill"></i>About</a>
    </div>
  </li>
    `;
    return ppCard;
}
//another card


//cards

const attvcontainer = document.getElementById('attvc');

async function fetchattv() {
    try{
        const response = await fetch(tv_airing_today);
        console.log(response);
        const data = await response.json();

        console.log(data.results)

        data.results.forEach(mediaattv => {
            const attvCard = createattvCard(mediaattv);
            console.log(attvCard);
            attvcontainer.appendChild(attvCard)
        });
    } catch(error) {
        console.error("error fetching data:", error);
    }
}
fetchattv();

function createattvCard(mediaattv) {
    let {poster_path, first_air_date, original_name, popularity, id, vote_average} = mediaattv;

    const attvCard = document.createElement('li');
    attvCard.classList.add('card')

    attvCard.innerHTML = `
    <li class="card" style="background: url('${img_path + poster_path}') no-repeat center center/cover;
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
      <input type="checkbox" name="watchlist" id="${id}" hidden><label for="watch1"><i class="bi bi-bookmark-star"></i></label>
    </div>
    <div class="card-link-wrapper">
      <h3>${original_name}</h3>
      <h5>${first_air_date}</h5>
      <h4 class="vote"><i class="bi bi-star-fill"></i><span> ${vote_average} / 10</span></h4>
      <a href="" class="card-link"><i class="bi bi-play-fill"></i>Watch</a>
    </div>
  </li>
    `;
    return attvCard;
}
//another card


//cards

const otatvcontainer = document.getElementById('otatvc');

async function fetchotatv() {
    try{
        const response = await fetch(tv_on_the_air);
        console.log(response);
        const data = await response.json();

        console.log(data.results)

        data.results.forEach(mediaotatv => {
            const otatvCard = createotatvCard(mediaotatv);
            console.log(otatvCard);
            otatvcontainer.appendChild(otatvCard)
        });
    } catch(error) {
        console.error("error fetching data:", error);
    }
}
fetchotatv();

function createotatvCard(mediaotatv) {
    let {poster_path, first_air_date, original_name, popularity, id, vote_average} = mediaotatv;

    const otatvCard = document.createElement('li');
    otatvCard.classList.add('card')

    otatvCard.innerHTML = `
    <li class="card" style="background: url('${img_path + poster_path}') no-repeat center center/cover;
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
      <input type="checkbox" name="watchlist" id="${id}" hidden><label for="watch1"><i class="bi bi-bookmark-star"></i></label>
    </div>
    <div class="card-link-wrapper">
      <h3>${original_name}</h3>
      <h5>${first_air_date}</h5>
      <h4 class="vote"><i class="bi bi-star-fill"></i><span> ${vote_average} / 10</span></h4>
      <a href="" class="card-link"><i class="bi bi-play-fill"></i>Watch</a>
    </div>
  </li>
    `;
    return otatvCard;
}
//another card


//cards

const ptvcontainer = document.getElementById('ptvc');

async function fetchptv() {
    try{
        const response = await fetch(tv_popular);
        console.log(response);
        const data = await response.json();

        console.log(data.results)

        data.results.forEach(mediaptv => {
            const ptvCard = createptvCard(mediaptv);
            console.log(ptvCard);
            ptvcontainer.appendChild(ptvCard)
        });
    } catch(error) {
        console.error("error fetching data:", error);
    }
}
fetchptv();

function createptvCard(mediaptv) {
    let {poster_path, first_air_date, original_name, popularity, id, vote_average} = mediaptv;

    const ptvCard = document.createElement('li');
    ptvCard.classList.add('card')

    ptvCard.innerHTML = `
    <li class="card" style="background: url('${img_path + poster_path}') no-repeat center center/cover;
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
      <input type="checkbox" name="watchlist" id="${id}" hidden><label for="watch1"><i class="bi bi-bookmark-star"></i></label>
    </div>
    <div class="card-link-wrapper">
      <h3>${original_name}</h3>
      <h5>${first_air_date}</h5>
      <h4 class="vote"><i class="bi bi-star-fill"></i><span> ${vote_average} / 10</span></h4>
      <a href="" class="card-link"><i class="bi bi-play-fill"></i>Watch</a>
    </div>
  </li>
    `;
    return ptvCard;
}
//another card


//cards

const trtvcontainer = document.getElementById('trtvc');

async function fetchtrtv() {
    try{
        const response = await fetch(tv_top_rated);
        console.log(response);
        const data = await response.json();

        console.log(data.results)

        data.results.forEach(mediatrtv => {
            const trtvCard = createptvCard(mediatrtv);
            console.log(trtvCard);
            trtvcontainer.appendChild(trtvCard)
        });
    } catch(error) {
        console.error("error fetching data:", error);
    }
}
fetchtrtv();

function createtrtvCard(mediatrtv) {
    let {poster_path, first_air_date, original_name, popularity, id, vote_average} = mediatrtv;

    const trtvCard = document.createElement('li');
    trtvCard.classList.add('card')

    trtvCard.innerHTML = `
    <li class="card" style="background: url('${img_path + poster_path}') no-repeat center center/cover;
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
      <input type="checkbox" name="watchlist" id="${id}" hidden><label for="watch1"><i class="bi bi-bookmark-star"></i></label>
    </div>
    <div class="card-link-wrapper">
      <h3>${original_name}</h3>
      <h5>${first_air_date}</h5>
      <h4 class="vote"><i class="bi bi-star-fill"></i><span> ${vote_average} / 10</span></h4>
      <a href="" class="card-link"><i class="bi bi-play-fill"></i>Watch</a>
    </div>
  </li>
    `;
    return trtvCard;
}
//another card