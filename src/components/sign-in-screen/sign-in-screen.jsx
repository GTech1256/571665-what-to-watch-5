import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {MAIN_SCREEN_ROUTE_PATH} from "../main-screen/route";

class SignInScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Link className="logo__link" to={MAIN_SCREEN_ROUTE_PATH}>
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form" onSubmit={this.handleSubmit}>
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input className="sign-in__input" type="email" placeholder="Email address" name="email" id="user-email"/>
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input className="sign-in__input" type="password" placeholder="Password" name="password" id="user-password"/>
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

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
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    this.props.onSubmit(data);
  }
}

SignInScreen.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignInScreen;
