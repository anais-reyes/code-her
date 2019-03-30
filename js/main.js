fetch(`https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716`)
    .then(response => response.json())
      .then(data => {
        data.results.forEach((element, i) => {
          let path = "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + element.poster_path;
          let item = `<div class="col-md-4 col-sm-6 col-xs-6 movie-card">
            <div class="portfolio-item">
              <div class="overlay">
                  <a href="views/movie.html" data-rel="lightbox">
                      <i class="fa fa-expand"></i>
                  </a>
              </div>
              <img src=${path} alt="Image 2">
              <h4>${element.title}</h4>    
              <span>${element.release_date.slice(0, 4)}</span>
          </div> <!-- /.portfolio-item -->
      </div>`
      if(i < 6) {
        document.getElementById('content-wrapper').innerHTML += item;
      }})
      showMoviesCatalog(data.results)
      })


function showMoviesCatalog(movies) {
movies.forEach((element, i) => {
  let path = "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + element.poster_path;
          let item = `
          <div class="col-md-4 col-sm-6 col-xs-6 movie-card">
            <div class="portfolio-item">
              <div class="overlay">
                  <a href=${path} data-rel="lightbox">
                      <i class="fa fa-expand"></i>
                  </a>
              </div>
              <img src=${path} alt="Image 2">
              <h4>${element.title}</h4>    
              <span>${element.release_date.slice(0, 4)}</span>
            </div> <!-- /.portfolio-item -->
          </div>
          `
      if(i < 6) {
        document.getElementById('Grid').innerHTML += item;
      }


})
}
var provider = new firebase.auth.GoogleAuthProvider();

var config = {
  apiKey: "AIzaSyAkoDLfazzVYjKYKB2SkFaVnXVUyfX4i9I",
  authDomain: "code-her.firebaseapp.com",
  databaseURL: "https://code-her.firebaseio.com",
  projectId: "code-her",
  storageBucket: "code-her.appspot.com",
  messagingSenderId: "287503070208"
};
firebase.initializeApp(config);



function logIn() {
  
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
      changeLoginDisplay(result.user)
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log('error', error)
  });
}

function logOut() {
  firebase
  .auth()
  .signOut()
  .then(function() {
     changeLogoutDisplay()
  })
}

function changeLoginDisplay(user) {
  document.getElementById('welcome').innerHTML = 'Bienvenida ' + user.displayName;
  document.getElementById('welcome').classList.add('block');
  var loginButtons = document.getElementsByClassName('login-button');
  Array.from(loginButtons).forEach(function(element) {
    element.classList.add('none')
  })
  document.getElementById('logout-button').style.display = 'block';
  document.getElementById('welcome').classList.remove('none');
  document.getElementById('add-movie').style.display = 'block';
  document.getElementById('add-movie-c').style.display = 'block';
  document.getElementById('login-modal').style.display = 'none'
}

document.getElementById('logout-button').style.display = 'none';
document.getElementById('add-movie').style.display = 'none';
document.getElementById('add-movie-c').style.display = 'none';

function changeLogoutDisplay() {
  document.getElementById('welcome').classList.add('none');
  var loginButtons = document.getElementsByClassName('login-button');
  Array.from(loginButtons).forEach(function(element) {
    element.classList.add('block');
    element.style.marginLeft = 'auto'
  })
  document.getElementById('logout-button').style.display = 'none';
  document.getElementById('welcome').classList.remove('block');
  document.getElementById('add-movie').style.display = 'none';
  document.getElementById('add-movie-c').style.display = 'none';



}

