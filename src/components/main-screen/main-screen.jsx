import React, {useCallback} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import MainScreenCatalog from "../main-screen-catalog/main-screen-catalog.connect";
import UserBlock from "../user-block/user-block.connect";
import {MAIN_SCREEN_ROUTE_PATH} from "./route";
import {filmType} from "../../types";
import {noop} from "../../utils/noop";

const MainScreen = ({
  filmPromo,
  onMyListBtnClick,
  onPlayBtnClick
}) => {
  const {
    id,
    name,
    released,
    genre,
    posterImage,
    isFavorite
  } = filmPromo;

  const handleMyListBtnClick = useCallback(() => {
    onMyListBtnClick(filmPromo);
  }, [onMyListBtnClick, filmPromo]);

  const handlePlayBtnClick = useCallback(() => {
    onPlayBtnClick(id);
  }, [onPlayBtnClick, id]);

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <Link className="logo__link" to={MAIN_SCREEN_ROUTE_PATH}>
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <UserBlock />
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
                  onClick={handlePlayBtnClick}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list movie-card__button"
                  type="button"
                  onClick={handleMyListBtnClick}
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref={isFavorite ? `#in-list` : `#add`}></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <MainScreenCatalog />

        <footer className="page-footer">
          <div className="logo">
            <Link className="logo__link logo__link--light" to={MAIN_SCREEN_ROUTE_PATH}>
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

MainScreen.propTypes = {
  filmPromo: PropTypes.exact(filmType).isRequired,
  onMyListBtnClick: PropTypes.func,
  onPlayBtnClick: PropTypes.func,
};

MainScreen.defaultProps = {
  onMyListBtnClick: noop,
  onPlayBtnClick: noop
};

export default MainScreen;
