import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import UserBlock from "../user-block/user-block";
import FileList from "../films-list/films-list";
import {filmType} from "../../types";
import {MAIN_SCREEN_ROUTE_PATH} from "../main-screen/route";

const MyListScreen = ({films}) => (
  <div className="user-page">
    <header className="page-header user-page__head">
      <div className="logo">
        <Link className="logo__link" to={MAIN_SCREEN_ROUTE_PATH}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <h1 className="page-title user-page__title">My list</h1>

      <UserBlock />
    </header>

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <FileList films={films} />
    </section>

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
);

MyListScreen.propTypes = {
  films: PropTypes.arrayOf(PropTypes.exact(filmType).isRequired).isRequired
};

export default MyListScreen;
