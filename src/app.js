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
  if (randomIcon == "♦" || randomIcon == "♥") {
    iconsDiv.forEach(value => (value.style.color = "red"));
    valueDiv.style.color = "red";
  }
  let cardContainer = document.querySelector(".cardContainer");
  let imageList = [
    "src/Blonnopie_1.svg",
    "src/Blonnopie_2.svg",
    "src/Blonnopie_3.png",
    "src/Blonnopie_4.svg",
    "src/Blonnopie_5.svg",
    "src/Blonnopie_6.svg",
    "src/Blonnopie_7.svg",
    "src/Blonnopie_8.svg",
    "src/Blonnopie_9.svg",
    "src/Blonnopie_10.svg",
    "src/Blonnopie_11.svg",
    "src/Blonnopie_12.svg",
    "src/Blonnopie_13.svg"
  ];
  let randomImage = getRandomItem(imageList);
  cardContainer.style.backgroundImage = `url('${randomImage}')`;
};
