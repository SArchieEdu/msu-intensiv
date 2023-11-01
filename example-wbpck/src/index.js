import { getWeather } from "./services/weather";

import "./index.css";

const content = document.getElementById("content");

const reloadButton = document.getElementById("reloadWeather");
reloadButton.addEventListener("click", () => {
  getWeather().then((result) => {
    const img = document.createElement("img");
    img.src = `https://yastatic.net/weather/i/icons/funky/dark/${result.fact.icon}.svg`;
    content.appendChild(img);
  });
});
