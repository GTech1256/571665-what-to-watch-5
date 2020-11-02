import React from "react";
import PropTypes from "prop-types";
import {Router as BrowserRouter, Switch, Route} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import {MAIN_SCREEN_ROUTE_PATH} from "../main-screen/route";
import SignInScreen from "../sign-in-screen/sign-in-screen.connect";
import {SIGN_IN_SCREEN_ROUTE_PATH} from "../sign-in-screen/route";
import MyListScreen from "../my-list-screen/my-list-screen.connect";
import {MY_LIST_SCREEN_ROUTE_PATH} from "../my-list-screen/route";
import FilmScreen from "../film-screen/film-screen.connect";
import {FILM_SCREEN_ROUTE_PATH} from "../film-screen/route";
import AddReviewScreen from "../add-review-screen/add-review-screen.connect";
import {ADD_REVIEW_SCREEN_ROUTE_PATH} from "../add-review-screen/route";
import PlayerScreen from "../player-screen/player-screen.state";
import {getPlayerScreenFullPath, PLAYER_SCREEN_ROUTE_PATH} from "../player-screen/route";
import {filmType} from "../../types";
import browserHistory from "../../browser-history";
import withFilm from "../../hocs/with-film/with-film";

const AddReviewFilmScreen = withFilm(AddReviewScreen);
const PlayerFilmScreen = withFilm(PlayerScreen);
const FilmScreenWrapped = withFilm(FilmScreen);

const App = ({promoFilm}) => (
  <BrowserRouter history={browserHistory}>
    <Switch>
      <Route
        path={MAIN_SCREEN_ROUTE_PATH}
        exact
        render={({history}) => {
          return (
            <MainScreen
              filmPromo={promoFilm}
              onPlayBtnClick={() => history.push(getPlayerScreenFullPath(promoFilm.id))}
            />
          );
        }}
      />
      <Route path={SIGN_IN_SCREEN_ROUTE_PATH} exact>
        <SignInScreen />
      </Route>
      <Route path={MY_LIST_SCREEN_ROUTE_PATH} exact>
        <MyListScreen />
      </Route>
      <Route
        path={FILM_SCREEN_ROUTE_PATH}
        exact
        render={({history, match}) => (
          <FilmScreenWrapped
            key={match.params.id}
            filmId={match.params.id}
            onPlayBtnClick={() => history.push(getPlayerScreenFullPath(match.params.id))}
          />
        )}
      />
      <Route
        path={ADD_REVIEW_SCREEN_ROUTE_PATH}
        exact
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

App.propTypes = {
  promoFilm: PropTypes.exact(filmType).isRequired
};

export default App;
