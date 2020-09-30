import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app";

const Settings = {
  filmPromo: {
    name: `The Grand Budapest Hotel`,
    date: `2014`,
    genre: `Drama`
  }
};

ReactDom.render(
    <App filmPromo={Settings.filmPromo} />,
    document.querySelector(`#root`)
);

