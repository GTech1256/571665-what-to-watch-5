import React from "react";
import PropTypes from "prop-types";

const MAX_GENRES_COUNT = 10;

const GenreList = ({
  genres,
  activeGenre,
  onGenreClick,
}) => (
  <ul className="catalog__genres-list">
    {genres.slice(0, MAX_GENRES_COUNT).map((genre) => (
      <li
        key={genre}
        className={`catalog__genres-item ${activeGenre === genre ? `catalog__genres-item--active` : ``}`}
      >
        <a
          className="catalog__genres-link"
          onClick={() => activeGenre !== genre && onGenreClick(genre)}
        >
          {genre}
        </a>
      </li>
    ))}
  </ul>
);

GenreList.propTypes = {
  activeGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default GenreList;
