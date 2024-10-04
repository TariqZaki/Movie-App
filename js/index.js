"use strict";
//!<------ global variables ------>
const apiKey = "bf1fbda1a5177f026f9419a4b08be8a7";
let rowData = document.getElementById("dataShow");
let nameInput = document.getElementById("nameInput");
let emailInput = document.getElementById("emailInput");
let phoneInput = document.getElementById("phoneInput");
let ageInput = document.getElementById("ageInput");
let passInput = document.getElementById("passInput");
let repassInput = document.getElementById("repassInput");
let eye = document.getElementById("show-password");
//!<------ global variables ------>

//?<--- loading & spinner logic ---->
$(function () {
  $(".loader").fadeOut(500, function () {
    $(".loading").fadeOut(500, function () {
      $("body").css("overflow", "auto");
      $(".loading").remove();
    });
  });
});
//?<--- loading & spinner logic ---->

//?<---- side nav-bar logic ---->
closeNavBarSide();
function openNavBarSide() {
  $("aside").animate({ left: 0 }, 500);
  $(".openClose").removeClass("fa-bars").addClass("fa-angles-left");
  $(".navbar-nav li").animate({ marginTop: "0" }, 1000);
}
function closeNavBarSide() {
  let sideNavWidth = $(".innerSide").outerWidth();
  $("aside").animate({ left: -sideNavWidth }, 500);
  $(".openClose").removeClass("fa-angles-left").addClass("fa-bars");
  $(".navbar-nav li").animate({ marginTop: "30px" }, 500);
}
$(".openClose").on("click", () => {
  if ($("aside").css("left") == "0px") {
    closeNavBarSide();
  } else {
    openNavBarSide();
  }
});
//?<---- side nav-bar logic ---->

nowPlayData();


//?<---- now playing movies logic ---->
$("#playLink").on("click", () => {
  closeNavBarSide();
  nowPlayData();
  $(window).scrollTop(0);
});

async function nowPlayData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjFmYmRhMWE1MTc3ZjAyNmY5NDE5YTRiMDhiZThhNyIsIm5iZiI6MTcyMTQyODk3My4zMTc3NzksInN1YiI6IjY2OTlkOGIyMTljY2JkNjBiYzk3MzM2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nlG2ATdz7w2bR84e0hYOfhObpSXG3-YVDeBnj9uqsig",
    },
  };

  let res = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    options
  );
  let movies = await res.json();
  // console.log(movies.results);
  displayMovies(movies.results);
}
//?<---- now playing movies logic ---->

//?<---- popular movies logic ---->
$("#popLink").on("click", () => {
  closeNavBarSide();
  popularMovies();
  $(window).scrollTop(0);
});

async function popularMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjFmYmRhMWE1MTc3ZjAyNmY5NDE5YTRiMDhiZThhNyIsIm5iZiI6MTcyMTQ4NTY1Ni40MTcwNDEsInN1YiI6IjY2OTlkOGIyMTljY2JkNjBiYzk3MzM2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y68x6C3_yu8FnLommsDccaIRfZKWHJRIfw2t467-Oh0",
    },
  };

  let res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  );
  let movies = await res.json();

  // console.log(movies.results);
  displayMovies(movies.results);
}
//?<---- popular movies logic ---->

//?<---- top rate movies logic ---->
$("#rateLink").on("click", () => {
  closeNavBarSide();
  TopRatedMovies();
  $(window).scrollTop(0);
});

async function TopRatedMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjFmYmRhMWE1MTc3ZjAyNmY5NDE5YTRiMDhiZThhNyIsIm5iZiI6MTcyMTQ4NTY1Ni40MTcwNDEsInN1YiI6IjY2OTlkOGIyMTljY2JkNjBiYzk3MzM2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y68x6C3_yu8FnLommsDccaIRfZKWHJRIfw2t467-Oh0",
    },
  };

  let res = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  );
  let movies = await res.json();

  // console.log(movies.results);

  displayMovies(movies.results);
}
//?<---- top rate movies logic ---->

//?<---- trending movies logic ---->
$("#trendLink").on("click", () => {
  closeNavBarSide();
  trendingMovies();
  $(window).scrollTop(0);
});

async function trendingMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjFmYmRhMWE1MTc3ZjAyNmY5NDE5YTRiMDhiZThhNyIsIm5iZiI6MTcyMTQ4NTY1Ni40MTcwNDEsInN1YiI6IjY2OTlkOGIyMTljY2JkNjBiYzk3MzM2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y68x6C3_yu8FnLommsDccaIRfZKWHJRIfw2t467-Oh0",
    },
  };

  let res = await fetch(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    options
  );
  let movies = await res.json();

  // console.log(movies.results);
  displayMovies(movies.results);
}
//?<---- trending movies logic ---->

//?<---- upcoming movies logic ---->
$("#upcomLink").on("click", () => {
  closeNavBarSide();
  upComingMovies();
  $(window).scrollTop(0);
});

async function upComingMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjFmYmRhMWE1MTc3ZjAyNmY5NDE5YTRiMDhiZThhNyIsIm5iZiI6MTcyMTQ4NTY1Ni40MTcwNDEsInN1YiI6IjY2OTlkOGIyMTljY2JkNjBiYzk3MzM2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y68x6C3_yu8FnLommsDccaIRfZKWHJRIfw2t467-Oh0",
    },
  };

  let res = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    options
  );
  let movies = await res.json();
  // console.log(movies.results);
  displayMovies(movies.results);
}
//?<---- upcoming movies logic ---->

//?<-------- contact us scroll dawn -------> 
$("#contactLink").on("click", () => {                     
  closeNavBarSide();
  $(window).scrollTop(50000);
});                        
//?<-------- contact us scroll dawn -------> 

//?<-------- display movies function -------> 
function displayMovies(movie) {
  let cartona = "";
  for (let i = 0; i < movie.length; i++) {
    cartona += `
 <div class="col-md-4">
                                <div class="card overflow-hidden">
                                    <img src="https://image.tmdb.org/t/p/w500/${movie[i].poster_path}" width="100%">
                                    <div class="card-body position-absolute top-0 start-0 w-100 h-100">
                                        <h1 class="h3 text-white position-relative text-center my-3">${movie[i].original_title}</h1>
                                        <p class="position-relative text-white my-3">${movie[i].overview}.</p>
                                        <p class="position-relative text-white">Release Dtae : <span>${movie[i].release_date}</span></p>

                                        <div class="stras my-3 position-relative" style="color: var(--seventh-color);">
                                            <i class="fa-solid fa-star position-relative"></i>
                                            <i class="fa-solid fa-star position-relative"></i>
                                            <i class="fa-solid fa-star position-relative"></i>
                                            <i class="fa-solid fa-star-half-stroke position-relative"></i>
                                        </div>
                                        <div
                                            class="rate my-3 text-white fs-4 position-relative p-4 d-flex justify-content-center align-items-center">
                                            <span>${movie[i].vote_average.toFixed(1)}</span></div>
                                    </div>
                                </div>
                            </div>
    `;
  }
  rowData.innerHTML = cartona;
}
//?<-------- display movies function -------> 

// !<--------------- WOW JS  مش عارف ايه المشكلة هنا  --------------> 
// $(".card").mouseenter(function () {
//   $(this).find(".card-body").classList.replace("d-none", "d-block");
//   $(this).find(".card-title").addClass("fadeInDown");
//   $(this).find(".card-text").addClass("flipInX");
//   $(this).find(".stars").addClass("fadeInDown");
//   $(this).find(".ratingNum").addClass("fadeInDown");
// });
// $(".card").mouseleave(function () {
//   $(this).find(".card-body").classList.replace("d-block", "d-none");
//   $(this).find(".card-title").removeClass("fadeInDown").addClass("fadeOutLeft");
//   $(this).find(".card-text").removeClass("flipInX").addClass("fadeOutLeft");
//   $(this).find(".stars").removeClass("fadeInDown").addClass("fadeOutLeft");
//   $(this).find(".ratingNum").removeClass("fadeInDown").addClass("fadeOutLeft");
// });
// !<--------------- WOW JS  مش عارف ايه المشكلة هنا  --------------> 



//?<-------- search about movies function ----------> 
async function searchAboutMovie(term) {
  let res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${term}&api_key=bf1fbda1a5177f026f9419a4b08be8a7`
  );
  let movies = await res.json();

  if (term.length > 0) {
    displayMovies(movies.results);
  }
}
//?<-------- search about movies function ----------> 



//?<-------- form & validation of contact inputs ----------> 
$("form").on("submit", () => {

  if (checkIfAllInputsAreValid() == true) {
    nowPlayData()
    console.log('hellllo'); ;
  }
});

function validateAllInputs(regex, element, alertMsg) {
  let pattern = regex;
  if (pattern.test(element.value) == true) {
    alertMsg.classList.replace("d-block", "d-none");
    return true;
  } else {
    alertMsg.classList.replace("d-none", "d-block");
    return false;
  }
}
function checkIfAllInputsAreValid() {
  if (
    validateAllInputs(/^[a-zA-Z]{3,}$/, nameInput, alertName) &&
    validateAllInputs(
      /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/,
      emailInput,
      alertEmail
    ) &&
    validateAllInputs(
      /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/,
      phoneInput,
      alertPhone
    ) 
    // validateAllInputs(/^(1|2|3|4|5|6|7|8)[6-9]$/, ageInput, alertAge) &&
    // validateAllInputs(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    //   passInput,
    //   alertPass
    // ) &&
    // validateAllInputs(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    //   repassInput,
    //   alertRepass
    // ) 
  ){
    return true;
  } else {
    return false;
  }
}

//!<------------------- مشكلة ان الباس == الريباس ----------------------> 
// function checkPass() {
//   let pass = passInput.value;
//   let repass = repassInput.value;
//   if (pass === repass) {
//     alertRepass.classList.replace("d-block", "d-none");
//     return true;
//   } else {
//     alertRepass.classList.replace("d-none", "d-block");
//     return false;
//   }
// }
eye.addEventListener("click", function (e) {
  this.classList.toggle("fa-eye-slash");
  const type =
    passInput.getAttribute("type") === "password" ? "text" : "password";
  passInput.setAttribute("type", type);
});
//?<-------- form & validation of contact inputs ----------> 
