let toogle = document.querySelector("#toggle");
let Daily = document.querySelectorAll(" .price-monthly");
let Weekly = document.querySelectorAll(" .price-anually");

toogle.addEventListener("change", function () {
  if (toogle.checked) {
    Weekly.forEach((price) => (price.style.display = "none"));
    Daily.forEach((price) => (price.style.display = "flex"));
  } else {
    Weekly.forEach((price) => (price.style.display = "flex"));
    Daily.forEach((price) => (price.style.display = "none"));
  }
});
