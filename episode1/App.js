import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",{id:"parent"},
    React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"Hello h1 🚀"),React.createElement("h2",{},"Hello h2 ")]));
console.log(ReactDOM);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(parent);