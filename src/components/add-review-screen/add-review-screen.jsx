import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import ReviewForm from "../review-form/review-form.state";
import {filmType} from "../../types";
import {getFilmScreenFullPath} from "../film-screen/route";

const AddReviewScreen = ({film}) => {
  const {id, poster, name} = film;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link className="logo__link" to="/">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={getFilmScreenFullPath(id)}>{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={poster} alt={`${name} poster`} width="218" height="327"/>
        </div>
      </div>

      <ReviewForm />

    </section>
  );
};

AddReviewScreen.propTypes = {
  filmId: PropTypes.string.isRequired,
  film: PropTypes.exact(filmType).isRequired,
};

export default AddReviewScreen;
