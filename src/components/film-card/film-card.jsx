import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {filmType} from "../../types";

const FilmCard = ({
  film,
  renderVideoPreview
}) => {
  const {
    id,
    name,
    posterImage,
    previewVideoLink,
  } = film;

  return (
    <article className="small-movie-card catalog__movies-card">
      <Link to={`/films/${id}`}>
        {renderVideoPreview(previewVideoLink, posterImage)}
      </Link>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>
          {name}
        </Link>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: PropTypes.exact(filmType).isRequired,
  renderVideoPreview: PropTypes.func.isRequired
};

export default FilmCard;
