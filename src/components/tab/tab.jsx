import React from "react";
import PropTypes from "prop-types";


const Tab = ({title, onClick, isActive}) => (
  <li className={`movie-nav__item ${isActive ? `movie-nav__item--active` : ``}`} onClick={onClick}>
    <a className="movie-nav__link">{title}</a>
  </li>
);

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func
};


export default Tab;
