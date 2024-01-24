//firestore setup
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { collection,getDocs,deleteDoc,doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyABXG2VmTw80woZUq6TQD8Xc84fiYrpIF8",
    authDomain: "auth-form-de806.firebaseapp.com",
    projectId: "auth-form-de806",
    storageBucket: "auth-form-de806.appspot.com",
    messagingSenderId: "900423098287",
    appId: "1:900423098287:web:cde7d1384a0c2886f7d95a"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const collectionRef = collection(db,'wishlist');
  getDocs(collectionRef)
  .then((response)=>{
	console.log(response);
	console.log(response.docs);
  });

const additem = document.getElementById('listbtn');
additem.addEventListener('click', ()=> {
  const title = document.getElementById('add-input').value;

  db.collection('wishlist').add({
    title: title,
  })
  .then((docRef) => {
    console.log('Document written with ID: ', docRef.id);
    document.getElementById('add-movie').reset();
  })
  .catch((error) => {
    console.error('Error adding document: ', error);
  });
});
//

let movieList = document.querySelector("#movie-list");

//delete movies
movieList.addEventListener('click', function(e) {
	if (e.target.className == "delete") {
		e.target.parentElement.style.display = "none";
	}
});


//add movies
let addMovie = document.forms[1];

addMovie.addEventListener('submit', function(e) {
	e.preventDefault();
	let value = addMovie.querySelector("input[type = 'text']").value;

	let li = document.createElement("li");
	li.innerHTML=`
        <div> 
          <div class="favcard">
            <img src="rebel-moon.jpg" alt="">
          </div>  
          <div class="content">  
            <h3 class="title">${value}</h3>
            <p>Action, Drama, Fantsy</p>
            <h6><span>TMDB</span> <i class="bi bi-star-fill"></i> 9.0 / 10</h6>
          </div>
        </div>  
        <span class="delete">delete</span> 
	`
	movieList.appendChild(li);

	addMovie.querySelector("input[type='text']").value = "";
});

//hide movies
let hideBox = document.querySelector("#hide");
hideBox.addEventListener('change', function(e) {
	if (hideBox.checked) {
		movieList.style.display = "none";
	} else {
		movieList.style.display = "block";
	}
});


//filter movies
let searchBar = document.forms[0];
searchBar.addEventListener('keyup', function(e) {
	let term = searchBar.querySelector("input").value.toLowerCase();
	let movies = document.querySelectorAll(".title");
	movies.forEach(movie => {
		if (movie.textContent.toLowerCase().indexOf(term) != -1) {
			movie.parentElement.style.display = "block";
		} else  {
			movie.parentElement.style.display = "none";
		}
	});

});