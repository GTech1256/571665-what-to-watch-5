import React from "react";
import PropTypes from "prop-types";


const Tab = ({title, onClick, isActive}) => (
  <li className={`movie-nav__item ${isActive ? `movie-nav__item--active` : ``}`}>
    <a className="movie-nav__link" onClick={onClick}>{title}</a>
  </li>
);

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func
};


export default Tab;
