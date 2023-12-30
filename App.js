import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div", { id: "parent" }, [
        React.createElement(
            "div", { id: "child1" },[
            React.createElement("h1", {}, "hi... i am h1 tag"),
            React.createElement("h2", {}, "hi... i am h2 tag")
            ]
        ),React.createElement(
            "div", { id: "child2" },[
            React.createElement("h1", {}, "hi... i am h1 tag"),
            React.createElement("h2", {}, "hi... i am h2 tag")
            ]
        )
    ]
)

const body = ReactDOM.createRoot(document.getElementById("body"));
body.render(parent);

const heading = React.createElement("h1", { id: "heading" }, "Hello World from React!");

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);

root.render(heading);