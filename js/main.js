
var tests = [

  {"name":"Bechdel", "questions":["Dos personajes femeninos con nombre identificado", "Que hablan entre si por mâs de 10 segundos","Sin referirse a un hombre en la plática"]}, 
  {"name":"Uphold", "questions":["El 50% del equipo en set estâ conformado por mujeres"]}, 
  {"name":"Vito Russo", "questions":["La película contiene un personaje que puede identificarse claramente como LGBTTTIQ", "El personaje no debe estar definido únicamente por su orientación sexual o identidad de género. Es decir, se compone de rasgos particulares al igual que los personajes heterosexuales. ", "El personaje LGBTTTIQ debe estar vinculado a la trama de tal forma que su eliminación tendría un efecto significativo en la historia", "El personaje no está ahí solamente para hacer comentarios jocosos, dibujar una falsa representación o hacer chistes"]}, 
  
  ]


var movies = [];
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716`)
    .then(response => response.json())
      .then(data => {
        data.results.forEach((element, i) => {
          let path = "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + element.poster_path;
          let item = `<div class="col-md-4 col-sm-6 col-xs-6">
            <div class="portfolio-item">
              <div class="overlay">
                  <a href="javascript:;" data-toggle="modal" data-target="#movie_modal" class="movie-expand" 
                      data-name=${element.title}
                      data-img=${path}
                      data-year=${element.release_date}
                      >
                      <i class="fa fa-expand" 
                      data-name=${element.title}
                      data-img=${path}
                      data-year=${element.release_date}
                      ></i>
                  </a>
              </div>
              <img src=${path} alt="Image 2">
              <h4>${element.title}</h4>    
              <span>${element.release_date.slice(0, 4)}</span>
          </div> <!-- /.portfolio-item -->
      </div>`
      
      if(i > 0 && i < 7) {
        document.getElementById('content-wrapper').innerHTML += item;
        movies.push(element);
      }})
      showMoviesCatalog(data.results)
      addExpandOption();
      })

function addExpandOption() {
  links = document.getElementsByClassName('movie-expand')
  Array.from(links).forEach(element => {
    element.addEventListener('click', showMovieInfo)
  })
  
}

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
      if(i > 6 && i < 13) {
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

var modalText;
function seeMovieDetails(option) {
modalText = document.getElementById('modal-body').innerHTML;
  Array.from(document.getElementsByClassName('movie-modal-button')).forEach(element => {
    element.style.display = 'none'
  })
  if(option === 'apply-test') {
    showTest();
  } else {
    showMovieDetails();
  }
}

document.getElementById('test-content').style.display = 'none';
document.getElementById('movie-content').style.display = 'none';


function showTest() {
  document.getElementById('test-content').style.display = 'block';
}

function showMovieDetails() {
  document.getElementById('movie-content').style.display = 'block';
}


var movieTitle = ''
function showMovieInfo(event) {
  emptyInfo();
  var min = 1;
  var max = 30;
  var movieName = ''
  movies.forEach(element => {
    if(element.title.indexOf(event.target.dataset.name) !== -1 ){
      movieName = element.title;
    }
  })
  document.getElementById('movie-poster').src = event.target.dataset.img;
  document.getElementById('movie-name').innerHTML = movieName;
  document.getElementById('movie-year').innerHTML = event.target.dataset.year.slice(0, 4);
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById("tests-applied").innerText = document.getElementById("tests-applied").innerText + ' ' + random;
  var randomMinus = Math.floor(Math.random() * (random - min + 1)) + min;
  document.getElementById("tests-passed").innerText = document.getElementById("tests-passed").innerText + ' ' + randomMinus;
  document.getElementById('tests-wrong').innerText = document.getElementById('tests-wrong').innerText + ' ' + (random-randomMinus)
}

function emptyInfo() {
  document.getElementById("tests-applied").innerText = 'Número de pruebas aplicadas';
  document.getElementById('tests-passed').innerText = 'Número de pruebas aprobadas';
  document.getElementById('tests-wrong').innerText = 'Número de pruebas no aprobadas';
}

document.getElementById('test-bechdel').addEventListener('click', showQuestions)
document.getElementById('test-uphold').addEventListener('click', showQuestions)
document.getElementById('test-vito').addEventListener('click', showQuestions)

function showQuestions(e) {
  var counter = 0;
  var buttons = document.getElementsByClassName('test-button-modal')
  Array.from(buttons).forEach(element => {
    element.style.display = 'none';
  })
  tests.forEach((element, i) => {
        if(element.name === e.target.innerText) {
      localStorage.setItem('questions', JSON.stringify(element.questions));
      document.getElementById('test-questions').innerHTML = `
      <p id="current-question" class="text-darkgrey">${element.questions[counter]}</p>
      <button onclick="nextQuestionYes()">Si</button>
      <button onclick="nextQuestionNo()">No</button>
        `
    }
  })
}

var result = 0
function nextQuestionYes() {
  result = result + 1;
  nextQuestion();
  

}

function nextQuestionNo() {
  nextQuestion();
}

function nextQuestion() {
  var passed;
  let test = JSON.parse(localStorage.getItem('questions'))
  let counter = test.indexOf(document.getElementById('current-question').innerText);
  if(counter < test.length - 1) {
    document.getElementById('current-question').innerText = test[counter + 1];
  } else {
    passed = result === test.length ? 'Aprobada' : 'No aprobada';
    addTextPassed(passed)
    console.log(passed)
  }
}

function addTextPassed(text) {
  document.getElementById('test-questions').innerHTML = `<p class="text-darkgrey">Resultado: ${text}</p>`
}

function cleanModal() {
  document.getElementById('movie-content').style.display = 'none';
  document.getElementById('movie-content').style.display = 'none';
  Array.from(document.getElementsByClassName('movie-modal-button')).forEach(element => {
    element.style.display = 'block'
  })
}
localStorage.clear();