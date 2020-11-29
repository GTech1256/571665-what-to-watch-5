import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import UserBlock from "../user-block/user-block.connect";
import ReviewForm from "../review-form/review-form.connect";
import {filmType} from "../../types";
import {getFilmScreenFullPath} from "../film-screen/route";
import {MAIN_SCREEN_ROUTE_PATH} from "../main-screen/route";

const AddReviewScreen = ({
  film
}) => {
  const {id, posterImage, name} = film;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link className="logo__link" to={MAIN_SCREEN_ROUTE_PATH}>
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

          <UserBlock />
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt={`${name} poster`} width="218" height="327"/>
        </div>
      </div>

      <ReviewForm />

    </section>
  );
};

AddReviewScreen.propTypes = {
  film: PropTypes.exact(filmType).isRequired,
};

export default AddReviewScreen;
