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
          </div> <!-- /.portfolio-item -->
          
      </div>`
      if(i < 6) {
        document.getElementById('content-wrapper').innerHTML += item;
      }})
      showMoviesCatalog(data.results)
      })


function showMoviesCatalog(movies) {
movies.forEach((element, i) => {
  console.log(element)
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




});
}