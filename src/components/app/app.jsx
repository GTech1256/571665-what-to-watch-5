import React from "react";
import PropTypes from "prop-types";
import {Router as BrowserRouter, Switch, Route} from "react-router-dom";
import browserHistory from "../../browser-history";
import MainScreen from "../main-screen/main-screen.connect";
import {MAIN_SCREEN_ROUTE_PATH} from "../main-screen/route";
import SignInScreen from "../sign-in-screen/sign-in-screen.connect";
import {SIGN_IN_SCREEN_ROUTE_PATH} from "../sign-in-screen/route";
import MyListScreen from "../my-list-screen/my-list-screen.connect";
import {MY_LIST_SCREEN_ROUTE_PATH} from "../my-list-screen/route";
import FilmScreen from "../film-screen/film-screen.connect";
import {FILM_SCREEN_ROUTE_PATH} from "../film-screen/route";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import {ADD_REVIEW_SCREEN_ROUTE_PATH} from "../add-review-screen/route";
import PlayerScreen from "../player-screen/player-screen.connect";
import {PLAYER_SCREEN_ROUTE_PATH} from "../player-screen/route";
import PrivateRoute from "../private-route/private-route.connect";
import ErrorScreen from "../error-screen/error-screen";
import NotFoundScreen from "../not-found-screen/not-found-screen";
import withFilm from "../../hocs/with-film/with-film.connect";
import {AuthorizationStatus, EMPTY_STATE_VALUE, SeverError} from "../../const";

const AddReviewFilmScreen = withFilm(AddReviewScreen);
const PlayerFilmScreen = withFilm(PlayerScreen);
const FilmScreenWrapped = withFilm(FilmScreen);

const App = ({errorMessage}) => {
  switch (errorMessage) {
    case SeverError.NotFound:
      return <NotFoundScreen />;
    case EMPTY_STATE_VALUE:
      return (
        <BrowserRouter history={browserHistory}>
          <Switch>
            <Route
              path={MAIN_SCREEN_ROUTE_PATH}
              exact
            >
              <MainScreen/>
            </Route>
            <PrivateRoute
              path={SIGN_IN_SCREEN_ROUTE_PATH}
              exact
              expectedAuthorizationStatus={AuthorizationStatus.NO_AUTH}
              redirectTo={MAIN_SCREEN_ROUTE_PATH}
              render={() => <SignInScreen />}
            />
            <PrivateRoute
              path={MY_LIST_SCREEN_ROUTE_PATH}
              exact
              expectedAuthorizationStatus={AuthorizationStatus.AUTH}
              redirectTo={SIGN_IN_SCREEN_ROUTE_PATH}
              render={() => <MyListScreen />}
            />
            <Route
              path={FILM_SCREEN_ROUTE_PATH}
              exact
              render={({match}) => (
                <FilmScreenWrapped
                  key={match.params.id}
                  filmId={match.params.id}
                />
              )}
            />
            <PrivateRoute
              path={ADD_REVIEW_SCREEN_ROUTE_PATH}
              exact
              expectedAuthorizationStatus={AuthorizationStatus.AUTH}
              redirectTo={SIGN_IN_SCREEN_ROUTE_PATH}
              render={({match}) => (
                <AddReviewFilmScreen
                  filmId={match.params.id}
                />
              )}
            />
            <Route
              path={PLAYER_SCREEN_ROUTE_PATH}
              exact
              render={({history, match}) => (
                <PlayerFilmScreen
                  filmId={match.params.id}
                  onExitClick={() => history.push(MAIN_SCREEN_ROUTE_PATH)}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      );
    default:
      return <ErrorScreen />;

  }
};

App.propTypes = {
  errorMessage: PropTypes.oneOf([
    PropTypes.string.isRequired,
    EMPTY_STATE_VALUE
  ])
};

export default App;
