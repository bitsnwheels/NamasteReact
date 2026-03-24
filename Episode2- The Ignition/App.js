// Manipulate the HTML DOM using Javascript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React

// Create nested React Elements


import React from "react";  // this react is coming from node modules
import ReactDOM from "react-dom/client"; // Note the '/client' // this react-dom is coming from node modules
const heading = React.createElement(
  "h1",
  {
    id: "title",
    key: "h1", // Add a unique key here
    className: "title"
  },
  "heading"
);

const heading1 = React.createElement(
  "h1",
  {
    id: "title1", // IDs should also be unique!
    key: "h2",    // Add a unique key here
  },
  "heading1"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading1]
);

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(container);