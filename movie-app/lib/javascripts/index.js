const movieDataDiv = document.getElementById("movie-data");

let page = 1;
let totalMovieOnDb = 0;
let totalMovieFetched = 0;

const fetchMovieData = async (page) => {
    try {
        // send http GET request to TMBD API server
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
            {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization: 
                        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWMwNjg3ZWU1MzRlNjMxYjI4MDgzNDAyYjdhMjI1YyIsIm5iZiI6MTcyNjY2OTE1Mi4zNTg3MzYsInN1YiI6IjY2ZWFkZmU1YjI5MTdlYjE4MDBiOWYzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yGUH0O2NLEL_qi0qPzkDKttunJWFBhqs_sKcntLu8Zw"
                },
            }
        );
        const data = await response.json();

// Rendering Movie Interface
if (data && data.results.length > 0) {
    totalMovieFetched += data.results.length;
    totalMovieOnDb = data.total_results;

    for (movie of data.results) {

        const movieCol = document.createElement("div");
        movieCol.classList.add("col-12", "col-md-6", "col-lg-3", "mb-4");
        
        movieCol.innerHTML = `<div class="card" style="width: 100%;">
          <img 
          src="https://image.tmdb.org/t/p/w300${movie.poster_path}" 
          alt="..." 
          class="card-img-top" 
          />
          <div class="card-body">
              <h5 class="card-title">${movie.original_title}</h5>
              <p class="card-text">
              ${movie.overview.substring(0, 50)}...
              </p>
              <a href="#" value=${
                 movie.id
               } class="btn btn-primary movie-btn" id="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Details...</a>
            </div>
        </div>`;

      movieDataDiv.appendChild(movieCol);
    }

    const movieBtns = document.getElementsByClassName("movie-btn");

    for (btn of movieBtns) {
        btn.addEventListener("click", fetchMovieDetails);
    }
  }
} catch(error) {
  document.getElementById("error-message").textContent = error.message || "Something went wrong";
}
};

// Infinite Scroll.....on scroll function handler
const onScrollPage = async () => {
const scrollTop = document.documentElement.scrollTop;
const scrollHeight = document.documentElement.scrollHeight -1000;
const clientHeight = document.documentElement.clientHeight;

// Condition to stop fetching when all movies are loaded
if (totalMovieFetched >= totalMovieOnDb) {
  return;
}

// Condition for infinite scroll
if (scrollTop + clientHeight >= scrollHeight) { // Adjust threshold dynamically
  page += 1;
  await fetchMovieData(page);
}
};

// fetch single movie data
const fetchMovieDetails = async (event) => {
    event.preventDefault();

    const movieId = event.target.getAttribute("value");

    try {
        // send http GET request to TMBD API server
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
            {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization: 
                        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWMwNjg3ZWU1MzRlNjMxYjI4MDgzNDAyYjdhMjI1YyIsIm5iZiI6MTcyNjY2OTE1Mi4zNTg3MzYsInN1YiI6IjY2ZWFkZmU1YjI5MTdlYjE4MDBiOWYzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yGUH0O2NLEL_qi0qPzkDKttunJWFBhqs_sKcntLu8Zw"
                },
            }
        );

        const data = await response.json();

        if (data) {
            const modal = document.getElementsByClassName("modal-content")[0];

            return (modal.innerHTML = `<div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">
                    ${data.original_title}
                </h1>
                <button 
                type="button" 
                class="btn-close" 
                data-bs-dismiss="modal" 
                aria-label="Close">
                </button>
              </div>
              <div class="modal-body">
              <img 
              src="https://image.tmdb.org/t/p/w300${movie.poster_path}"  
              alt="..." 
              class="card-img-top" />
              <p>${data.overview} </p>


              <div> ${data.genres
                .map((genre) => {
                    return `<p> ${genre.name} </p>`;
                })
                .join('')}
              </div>
              <div class="modal-footer">
                <button 
                type="button" 
                class="btn btn-secondary" 
                data-bs-dismiss="modal">
                Close
                </button>
                <button type="button" class="btn btn-primary">Understood</button>
              </div>`);
        }
    } catch (error) {
        console.log(error.message || "something went wrong");
    }

};


// Event Listeners for loading movies and infinite scroll

window.addEventListener("load", () => fetchMovieData(page));
window.addEventListener("scroll", onScrollPage);

