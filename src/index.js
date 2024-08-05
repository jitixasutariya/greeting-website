import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

let currentDate = new Date(2024, 5, 5, 15);
currentDate = currentDate.getHours();
let greeting = "";
const cssStyle = {};

if (currentDate >= 1 && currentDate < 12) {
  greeting = "Good Morning";
  cssStyle.color = "green";
} else if (currentDate >= 12 && currentDate < 19) {
  greeting = "Good Afternoon";
  cssStyle.color = "Orange";
} else {
  greeting = "Good Night";
  cssStyle.color = "black";
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <marquee>
    <h1>
      Hello! Jitixa <span style={cssStyle}>{greeting}</span>
    </h1>
  </marquee>
);
