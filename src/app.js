/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let valueList = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let iconList = ["♦", "♥", "♠", "♣"];
  function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  let randomValue = getRandomItem(valueList);
  let randomIcon = getRandomItem(iconList);
  let iconsDiv = document.querySelectorAll(".icon");
  iconsDiv.forEach(value => (value.innerHTML = randomIcon));
  let valueDiv = document.querySelector(".value");
  valueDiv.innerText = randomValue;
};
