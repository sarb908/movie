// Store the wallet amount to your local storage with key "amount"
let amount = JSON.parse(localStorage.getItem("amount")) || 0;
let wallet = document.querySelector("#wallet");
wallet.innerHTML = amount;

let add = document.querySelector("#add_to_wallet");
add.addEventListener("click", () => {
  let amtV = document.querySelector("#amount").value;

  amount = amount + Number(amtV);
  localStorage.setItem("amount", JSON.stringify(amount));
  wallet.innerHTML = amount;
});
