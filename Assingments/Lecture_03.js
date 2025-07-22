import React from "react";

// Create a `Nested header Element` using `React.createElement`(h1,h2,h3 inside a div with class "title")

// const divContainer = React.createElement("div", {class: "title"}, [
//     React.createElement("h1", {}, "Titel 1"),
//     React.createElement("h2", {}, "Titel 2"),   
//     React.createElement("h3", {}, "Titel 3"),
// ]);

//Create the `same element using JSX
const divContainer = (
    <div className="title">
        <h1>Title 1</h1>
        <h2>Title 2</h2>
        <h3>Title 3</h3>
    </div>
);

const Lecture03 = () => {
    return (
        <div>
            
            <h1>Lecture 03: React Basics</h1>
            {divContainer}
        </div>
    )
}

export default Lecture03;