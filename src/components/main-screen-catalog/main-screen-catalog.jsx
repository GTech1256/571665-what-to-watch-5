import React from "react";
import PropTypes from "prop-types";
import FileList from "../films-list/films-list";
import {filmType} from "../../types";
import GenreList from "../genre-list/genre-list";
import ShowMoreBtn from "../show-more-btn/show-more-btn";

const MainScreenCatalog = ({
  films,
  activeGenre,
  genres,
  state,
  onGenreClick,
  onShowMoreBtnClick
}) => {
  const {filmsShowedCount} = state;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenreList
        genres={genres}
        activeGenre={activeGenre}
        onGenreClick={onGenreClick}
      />

      <FileList films={films.slice(0, filmsShowedCount)} />

      {filmsShowedCount < films.length && (
        <ShowMoreBtn onClick={onShowMoreBtnClick} />
      )}
    </section>
  );
};

MainScreenCatalog.propTypes = {
  films: PropTypes.arrayOf(PropTypes.exact(filmType).isRequired).isRequired,
  activeGenre: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  state: PropTypes.exact({
    filmsShowedCount: PropTypes.number.isRequired
  }).isRequired,
  onGenreClick: PropTypes.func.isRequired,
  onShowMoreBtnClick: PropTypes.func.isRequired
};

MainScreenCatalog.defaultProps = {
  onPlayBtnClick: () => {},
  onMyListBtnClick: () => {}
};

export default MainScreenCatalog;
