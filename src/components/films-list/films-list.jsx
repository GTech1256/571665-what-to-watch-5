import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card";
import {filmType} from "../../types";


const FilmsList = ({
  films,
  limit
}) => {
  const localFilms = films.slice(
      0,
      typeof limit === `number` ?
        limit :
        films.length
  );

  return (
    <div className="catalog__movies-list">
      {localFilms.map((film) => <FilmCard
        film={film}
        key={film.id}
      />)
      }
    </div>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.exact(filmType).isRequired).isRequired,
  limit: PropTypes.number
};

export default FilmsList;
