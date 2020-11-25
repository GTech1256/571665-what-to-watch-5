import React from "react";
import PropTypes from "prop-types";
import Tab from "../tab/tab.jsx";

const Tabs = ({
  activeItem,
  onActiveItemChange,
  children
}) => (
  <div className="movie-card__desc">
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {children.map((tab, index) => (
          <Tab
            key={tab.props.title}
            title={tab.props.title}
            isActive={activeItem === index}
            onClick={() => onActiveItemChange(index)}
          />
        ))}
      </ul>
    </nav>
    {children[activeItem].props.children}
  </div>
);

Tabs.propTypes = {
  activeItem: PropTypes.number.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(
      PropTypes.element.isRequired
  ).isRequired
};

export default Tabs;
