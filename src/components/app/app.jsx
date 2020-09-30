import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main";

const App = (props) => {
  const {filmPromo} = props;

  return (
    <Main filmPromo={filmPromo} />
  );
};

App.propTypes = {
  filmPromo: PropTypes.exact({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired
  })
};

export default App;
