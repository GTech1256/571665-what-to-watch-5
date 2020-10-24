import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import SignInScreen from "../sign-in-screen/sign-in-screen";
import MyListScreen from "../my-list-screen/my-list-screen.connect";
import FilmScreen from "../film-screen/film-screen.connect";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import PlayerScreen from "../player-screen/player-screen";
import {filmType} from "../../types";

const App = ({promoFilm}) => (
  <BrowserRouter>
    <Switch>
      <Route
        path="/"
        exact
        render={({history}) => {
          return (
            <MainScreen
              filmPromo={promoFilm}
              onPlayBtnClick={() => history.push(`/player/${promoFilm.id}`)}
            />
          );
        }}
      />
      <Route path="/login" exact>
        <SignInScreen />
      </Route>
      <Route path="/mylist" exact>
        <MyListScreen />
      </Route>
      <Route
        path="/films/:id"
        exact
        render={({history, match}) => (
          <FilmScreen
            filmId={match.params.id}
            onPlayBtnClick={() => history.push(`/player/${match.params.id}`)}
          />
        )}
      />
      <Route
        path="/films/:id/review"
        exact
        render={({match}) => (
          <AddReviewScreen
            filmId={match.params.id}
          />
        )}
      />
      <Route
        path="/player/:id"
        exact
        render={({history}) => (
          <PlayerScreen
            onExitClick={() => history.push(`/`)}
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
