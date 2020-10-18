import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import SignInScreen from "../sign-in-screen/sign-in-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import FilmScreen from "../film-screen/film-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import PlayerScreen from "../player-screen/player-screen";
import {filmType} from "../../types";

const App = ({films}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact
          render={({history}) => {
            const filmPromo = films[0];

            return (
              <MainScreen
                filmPromo={filmPromo}
                films={films}
                onPlayBtnClick={() => history.push(`/player/${filmPromo.id}`)}
              />
            );
          }}
        />
        <Route path="/login" exact>
          <SignInScreen />
        </Route>
        <Route path="/mylist" exact>
          <MyListScreen films={films.filter(({isFavorite}) => !!isFavorite)} />
        </Route>
        <Route
          path="/films/:id"
          exact
          render={({history, match}) => (
            <FilmScreen
              films={films}
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
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(filmType).isRequired).isRequired
};

export default App;
