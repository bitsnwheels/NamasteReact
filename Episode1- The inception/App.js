// Manipulate the HTML DOM using Javascript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React

// Create nested React Elements
const heading = React.createElement(
  "h1",
  {
    id: "title",
    style: {
      
      background:"red",
    },
    className:"title"
  },
  "heading"
);


// console.log(heading);   // returns an object
const heading1 = React.createElement(
  "h1",
  {
    id: "title",
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