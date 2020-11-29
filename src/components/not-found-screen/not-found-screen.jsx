import React from 'react';

const NotFoundScreen = () => (
  <div className="user-page">
    <header className="page-header user-page__head">
      <div className="logo">
        <a href="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <h1 className="page-title user-page__title visually-hidden">Error</h1>
    </header>

    <section className="catalog">
      <h2 className="catalog__title catalog__title_center">404 Sorry cant find that!</h2>
    </section>

    <footer className="page-footer">
      <div className="logo">
        <a href="/" className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="copyright">
        <p>© 2020 What to watch Ltd.</p>
      </div>
    </footer>
  </div>
);

NotFoundScreen.propTypes = {};

export default NotFoundScreen;
