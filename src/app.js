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
    "src/Blonnopie_1.png",
    "src/Blonnopie_2.png",
    "src/Blonnopie_3.png",
    "src/Blonnopie_4.png",
    "src/Blonnopie_5.png",
    "src/Blonnopie_6.png",
    "src/Blonnopie_7.png",
    "src/Blonnopie_8.png",
    "src/Blonnopie_9.png",
    "src/Blonnopie_10.png",
    "src/Blonnopie_11.png",
    "src/Blonnopie_12.png",
    "src/Blonnopie_13.png",
    "src/Blonnopie_14.png",
    "src/Blonnopie_15.png"
  ];
  let randomImage = getRandomItem(imageList);
  cardContainer.style.backgroundImage = `url('${randomImage}')`;
};
