// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let amount = JSON.parse(localStorage.getItem("amount")) || 0;
let wallet = document.querySelector("#wallet");
wallet.innerHTML = amount;

let movies = document.querySelector("#movies");
let input = document.querySelector("#search");

async function moviefetch() {
  try {
    let res = await fetch(
      `https://www.omdbapi.com/?s=${input.value}&apikey=981e75a1`
    );

    let { Search } = await res.json();
    if (!Search) {
      return;
    }
    console.log(Search);
    displaydata(Search);
  } catch (err) {
    console.log(err);
  }
}

function displaydata(data) {
  movies.innerHTML = "";
  data.forEach((el) => {
    let div = document.createElement("div");
    div.classList.add("movie_tab");

    let img = document.createElement("img");
    img.src = el.Poster;

    let title = document.createElement("h2");
    title.innerText = el.Title;

    let btn = document.createElement("button");
    btn.innerText = "Book Now";
    btn.classList.add("book_now");
    btn.addEventListener("click", () => {
      localStorage.setItem("movie", JSON.stringify(el));
      window.location.href = "checkout.html";
    });

    div.append(img, title, btn);
    movies.append(div);
  });
}
let id;
function main(time) {
  if (id) {
    clearInterval(id);
  }
  id = setTimeout(() => {
    moviefetch();
  }, time);
}
