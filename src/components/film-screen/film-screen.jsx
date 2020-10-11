import React from "react";
import PropTypes from "prop-types";
import {Link, Redirect} from "react-router-dom";
import {filmType} from "../../types";
import FilmsList from "../films-list/films-list";
import {getFilmById} from "../../utils/getFilmById";

/**
 * от 0 до 3 — Bad.
 * от 3 до 5 — Normal.
 * от 5 до 8 — Good.
 * от 8 до 10 — Very good.
 * 10 — Awesome.
*/
const FilmRatingData = {
  0: `Bad`,
  3: `Normal`,
  5: `Good`,
  8: `Very good`,
  10: `Awesome`
};

const filmRatingKeys = Object.keys(FilmRatingData);
const filmLevelMaxCountOfRating = filmRatingKeys[filmRatingKeys.length - 1];

const getFilmLevel = (filmRating) => {
  let currentLevel = filmLevelMaxCountOfRating[0];

  if (filmLevelMaxCountOfRating <= filmRating) {
    return FilmRatingData[filmLevelMaxCountOfRating];
  }

  for (let i = 0; i < filmLevelMaxCountOfRating; i++) {
    currentLevel = FilmRatingData[i] ? FilmRatingData[i] : currentLevel;

    if (filmRating === i) {
      break;
    }
  }

  return currentLevel;
};

const FilmScreen = ({
  films,
  filmId
}) => {
  const film = getFilmById(filmId);

  if (film === undefined) {
    return <Redirect to="/"/>;
  }

  const {
    name,
    posterImage,
    previewImage,
    genre,
    released,
    rating,
    scoresCount,
    director,
    description
  } = getFilmById(filmId);

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={previewImage} alt={name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link className="logo__link" to="/">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327"/>
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className="movie-nav__item movie-nav__item--active">
                    <a href="#" className="movie-nav__link">Overview</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Details</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="movie-rating">
                <div className="movie-rating__score">{rating}</div>
                <p className="movie-rating__meta">
                  <span className="movie-rating__level">{getFilmLevel(rating)}</span>
                  <span className="movie-rating__count">{scoresCount} ratings</span>
                </p>
              </div>

              <div className="movie-card__text">
                <p>{description}</p>

                <p className="movie-card__director"><strong>{director}</strong></p>

                <p className="movie-card__starring"><strong>{}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList films={films} />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link className="logo__link logo__link--light" to="/">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

FilmScreen.propTypes = {
  filmId: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(PropTypes.exact(filmType).isRequired).isRequired
};

export default FilmScreen;
