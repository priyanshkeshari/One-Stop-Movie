const img_path = 'https://image.tmdb.org/t/p/w500';

    
    function getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, '\\$&');
      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    const originalTitle = getParameterByName('originalTitle');
    const vote = getParameterByName('vote');
    const language = getParameterByName('language');
    const adult = getParameterByName('adult');
    const releaseDate = getParameterByName('releaseDate');
    const popularity = getParameterByName('popularity');
    const voteCount = getParameterByName('voteCount');
    const id = getParameterByName('id');
    const overview = getParameterByName('overview');
    const title = getParameterByName('title');
    const posterPath = getParameterByName('posterPath');

    const containerhaving = document.getElementById('containerhaving');
    const containerid = document.createElement('div');
    containerid.classList.add('container')
    containerid.innerHTML = `
    <div id="aboutinside" class="containerinside">
        <div class="top">
            <i class="bi bi-badge-4k"></i>
            <i class="bi bi-playstation"></i>
        </div>
        <div class="info">
            <img src="${img_path + posterPath}" class="poster">
            <div>
                <h2>${title}</h2>
                <div class="rating">
                    <h4><i class="bi bi-star-fill"></i> ${vote} / 10</h4>
                    <h5>${language}</h5>
                </div>
                <div class="details">
                    <span>Adult : ${adult}</span>
                    <span>${releaseDate}</span>
                </div>
                <div class="about">
                    <div>Popularity<div>${popularity}</div></div>
                    <div>Vote Count<div>${voteCount}</div></div>
                    <div>ID<div>${id}</div></div>
                </div>
            </div>
        </div>
        <h3>Overview:</h3>
        <p>${overview}</p>
        <h3>Title:</h3>
        <p>${originalTitle}</p>
    </div>
    `;
    containerhaving.appendChild(containerid);
   


