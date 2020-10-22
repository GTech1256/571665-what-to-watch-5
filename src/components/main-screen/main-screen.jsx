import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import FileList from "../films-list/films-list";
import {filmType} from "../../types";
import GenreList from "../genre-list/genre-list";
import ShowMoreBtn from "../show-more-btn/show-more-btn";

const FILMS_SHOWED_PER_STEP_COUNT = 8;

class MainScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filmsShowedCount: FILMS_SHOWED_PER_STEP_COUNT
    };

    this.handleShowMoreBtnClick = this.handleShowMoreBtnClick.bind(this);
    this.handleGenreClick = this.handleGenreClick.bind(this);
  }

  render() {
    const {
      filmPromo: {
        name,
        released,
        genre,
        posterImage
      },
      films,
      onMyListBtnClick,
      onPlayBtnClick,
      activeGenre,
      genres,
    } = this.props;
    const {filmsShowedCount} = this.state;

    return (
      <React.Fragment>
        <section className="movie-card">
          <div className="movie-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
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
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__info">
              <div className="movie-card__poster">
                <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
              </div>

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
                  <button
                    className="btn btn--list movie-card__button"
                    type="button"
                    onClick={onMyListBtnClick}
                  >
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            <GenreList
              genres={genres}
              activeGenre={activeGenre}
              onGenreClick={this.handleGenreClick}
            />

            <FileList films={films.slice(0, filmsShowedCount)} />

            {filmsShowedCount !== films.length && (
              <ShowMoreBtn onClick={this.handleShowMoreBtnClick} />
            )}
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
  }

  handleShowMoreBtnClick() {
    const allFilmsCount = this.props.films.length;

    this.setState(({filmsShowedCount}) => ({
      filmsShowedCount: Math.min(filmsShowedCount + FILMS_SHOWED_PER_STEP_COUNT, allFilmsCount)
    }));
  }

  handleGenreClick(genre) {
    if (genre === this.props.activeGenre) {
      return;
    }

    this.setState({filmsShowedCount: FILMS_SHOWED_PER_STEP_COUNT});
    this.props.onGenreClick(genre);
  }
}
MainScreen.propTypes = {
  filmPromo: PropTypes.exact(filmType).isRequired,
  films: PropTypes.arrayOf(PropTypes.exact(filmType).isRequired).isRequired,
  activeGenre: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onGenreClick: PropTypes.func.isRequired,
  onPlayBtnClick: PropTypes.func,
  onMyListBtnClick: PropTypes.func
};

MainScreen.defaultProps = {
  onPlayBtnClick: () => {},
  onMyListBtnClick: () => {}
};

export default MainScreen;
