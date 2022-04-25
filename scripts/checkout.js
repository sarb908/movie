// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let amount = JSON.parse(localStorage.getItem("amount")) || 0;
let wallet = document.querySelector("#wallet");
wallet.innerHTML = amount;

let movie = JSON.parse(localStorage.getItem("movie"));
let appendMovie = document.querySelector("#movie");
function display() {
  let div = document.createElement("div");
  let title = document.createElement("h1");
  title.innerText = movie.Title;

  let img = document.createElement("img");
  img.src = movie.Poster;
  div.append(title, img);
  appendMovie.append(div);
}
display();

let confirm = document.querySelector("#confirm");

confirm.addEventListener("click", () => {
  let seat = document.querySelector("#number_of_seats").value;
  if (Number(amount) >= Number(seat) * 100) {
    alert("Booking successful!");
    amount = Number(amount) - Number(seat) * 100;
    wallet.innerHTML = amount;
    localStorage.setItem("amount", JSON.stringify(amount));
  } else {
    alert("Insufficient Balance!");
  }
});
