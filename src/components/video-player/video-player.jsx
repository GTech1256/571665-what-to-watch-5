import React from "react";
import PropTypes from "prop-types";

const AudioPlayer = ({
  children,
  onMouseEnter,
  onMouseLeave,
}) =>(
  <div
    className="small-movie-card__image"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {children}
  </div>
);

AudioPlayer.propTypes = {
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  children: PropTypes.element.isRequired
};

export default AudioPlayer;
