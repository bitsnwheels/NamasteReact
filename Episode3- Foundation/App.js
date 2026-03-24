import React from "react";
import ReactDOM from "react-dom/client"; // Note the /client for React 18+
// React.createElement() => object  => HTML DOM

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
 
// ---------------->jsx<----------------
// jsx is not html in js, it just looks like html.This is not a string, this is not html, this is jsx. This is a syntax extension to javascript. This is a syntactic sugar over react.createElement().

// jsx is transpiled to react.createElement() by parcel(Babel). So, under the hood, jsx is just a react element. We can write jsx in our code and parcel(Babel) will transpile it to react.createElement().

// React element
const heading = (<h1 className="head" tabIndex="0">Namaste React from JSX</h1>
);



// React Component
// two types of components
// 1. Class Component > old way of writing components
// 2. Functional Component > new way of writing components

// const HeadingComponent = () => {
//     return <h1>Namaste React from Functional Component</h1>
// }

// the above is same as below.

// Note: In functional component, we can directly return the jsx without using return keyword if there is only one line of code. This is called implicit return.
const HeadingComponent1 = () => <h1>Namaste React from Functional Component 1</h1>




//shorter way of writing functional component

// component composition: we can compose components inside other components. This is called component composition. We can reuse components inside other components. This is one of the main advantages of using components in React. It helps in reusability and maintainability of code.
// const HeadingComponent = () => (
//     <div id = "container"> 
//     <HeadingComponent1 />
//      <h1>Namaste React from Functional Component</h1>
//      </div>
// ) 

const number = 2000;
const HeadingComponent = () => (
    <div id = "container"> 
    {/* component inside component: component composition */}
    <HeadingComponent1 />
    <HeadingComponent1></HeadingComponent1>
    {HeadingComponent1()}

    {/* element inside component */}
    {heading}
    {
        // you can write any javascript code here.
        // number
        console.log("This is a number: ", number)
    }

     <h1>Namaste React from Functional Component</h1>
     </div>
) 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);