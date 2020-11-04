import React from "react";
import PropTypes from "prop-types";
import FilmsList from "../films-list/films-list";
import {filmType} from "../../types";
import GenreList from "../genre-list/genre-list";
import ShowMoreBtn from "../show-more-btn/show-more-btn";

const MainScreenCatalog = ({
  films,
  activeGenre,
  genres,
  isShowShowMoreBtn,
  onGenreClick,
  onShowMoreBtnClick
}) => (
  <section className="catalog">
    <h2 className="catalog__title visually-hidden">Catalog</h2>

    <GenreList
      genres={genres}
      activeGenre={activeGenre}
      onGenreClick={onGenreClick}
    />

    <FilmsList films={films} />

    {isShowShowMoreBtn && (
      <ShowMoreBtn onClick={onShowMoreBtnClick} />
    )}
  </section>
);

MainScreenCatalog.propTypes = {
  films: PropTypes.arrayOf(PropTypes.exact(filmType).isRequired).isRequired,
  activeGenre: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  isShowShowMoreBtn: PropTypes.bool,
  onGenreClick: PropTypes.func.isRequired,
  onShowMoreBtnClick: PropTypes.func.isRequired
};

MainScreenCatalog.defaultProps = {
  isShowShowMoreBtn: false
};

export default MainScreenCatalog;
