import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import SignInScreen from "../sign-in-screen/sign-in-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import FilmScreen from "../film-screen/film-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import PlayerScreen from "../player-screen/player-screen";

const App = (props) => {
  const {filmPromo} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainScreen filmPromo={filmPromo} />
        </Route>
        <Route path="/login" exact>
          <SignInScreen />
        </Route>
        <Route path="/mylist" exact>
          <MyListScreen />
        </Route>
        <Route path="/films/:id" exact>
          <FilmScreen />
        </Route>
        <Route path="/films/:id/review" exact>
          <AddReviewScreen />
        </Route>
        <Route path="/player/:id" exact>
          <PlayerScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  filmPromo: PropTypes.exact({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired
  })
};

export default App;
