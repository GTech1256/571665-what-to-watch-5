import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {Link, Redirect} from "react-router-dom";
import FilmsList from "../films-list/films-list";
import Tabs from "../tabs/tabs";
import Tab from "../tab/tab";
import {filmType} from "../../types";
import {getFilmById} from "../../utils/getFilmById";

const MAX_STARRING_OVERVIEW_COUNT = 4;
const MAX_FILMS_LIST_COUNT = 4;

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
  films: allFilms,
  filmId,
  onPlayBtnClick
}) => {
  const film = getFilmById(filmId);

  if (film === undefined) {
    return <Redirect to="/"/>;
  }

  const {
    id,
    name,
    posterImage,
    previewImage,
    genre,
    released,
    rating,
    scoresCount,
    director,
    starring,
    description,
    runTime,
    reviews
  } = getFilmById(filmId);

  const films = allFilms.filter((similarFilm) => similarFilm.genre === genre && similarFilm.id !== id);

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
                <button
                  className="btn btn--play movie-card__button"
                  type="button"
                  onClick={onPlayBtnClick}
                >
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
                <Link
                  className="btn movie-card__button"
                  to={`/films/${filmId}/review`}
                >
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327"/>
            </div>

            <Tabs>
              <Tab title="Overview">
                <div className="movie-rating">
                  <div className="movie-rating__score">{rating}</div>
                  <p className="movie-rating__meta">
                    <span className="movie-rating__level">{getFilmLevel(rating)}</span>
                    <span className="movie-rating__count">{scoresCount} ratings</span>
                  </p>
                </div>

                <div className="movie-card__text">
                  <p>{description}</p>

                  <p className="movie-card__director"><strong>Director: {director}</strong></p>

                  <p className="movie-card__starring"><strong>
                    Starring: {starring.slice(0, MAX_STARRING_OVERVIEW_COUNT).join(`, `)}{starring.length > MAX_STARRING_OVERVIEW_COUNT ? ` and other` : ``}
                  </strong></p>
                </div>
              </Tab>
              <Tab title="Details">
                <div className="movie-card__text movie-card__row">
                  <div className="movie-card__text-col">
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Director</strong>
                      <span className="movie-card__details-value">{director}</span>
                    </p>
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Starring</strong>
                      <span className="movie-card__details-value">
                        {starring.map((star, index, arr) => index !== arr.length - 1 ?
                          (<Fragment key={star}>{star}, <br /></Fragment>) :
                          star
                        )}
                      </span>
                    </p>
                  </div>

                  <div className="movie-card__text-col">
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Run Time</strong>
                      <span className="movie-card__details-value">{Math.floor(runTime / 60)}h {runTime % 60}m</span>
                    </p>
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Genre</strong>
                      <span className="movie-card__details-value">{genre}</span>
                    </p>
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Released</strong>
                      <span className="movie-card__details-value">{released}</span>
                    </p>
                  </div>
                </div>
              </Tab>
              <Tab title="Reviews">
                <div className="movie-card__reviews movie-card__row">
                  <div className="movie-card__reviews-col">
                    {reviews.map((review) => (
                      <div key={review.id} className="review">
                        <blockquote className="review__quote">
                          <p className="review__text">{review.comment}</p>

                          <footer className="review__details">
                            <cite className="review__author">{review.user.name}</cite>
                            {/* TODO: Поправить дату */}
                            <time className="review__date" dateTime={review.date}>{review.date}</time>
                          </footer>
                        </blockquote>

                        <div className="review__rating">{review.rating}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList films={films} limit={MAX_FILMS_LIST_COUNT} />
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
  films: PropTypes.arrayOf(PropTypes.exact(filmType).isRequired).isRequired,
  onPlayBtnClick: PropTypes.func
};

FilmScreen.defaultProps = {
  onPlayBtnClick: () => {}
};

export default FilmScreen;
