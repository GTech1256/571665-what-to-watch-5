import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card";
import {filmType} from "../../types";
import withVideoPreview from "../../hocs/with-video-preview/with-video-preview";

const FilmCardWrapper = withVideoPreview(FilmCard);

const FilmsList = ({
  films
}) => (
  <div className="catalog__movies-list">
    {films.map((film) => (
      <FilmCardWrapper
        key={film.id}
        film={film}
      />
    ))}
  </div>
);

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.exact(filmType).isRequired).isRequired
};

export default FilmsList;
