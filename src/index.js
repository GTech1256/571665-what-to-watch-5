import React from "react";
import ReactDom from "react-dom";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import App from "./components/app/app.connect";
import rootReducer from "./store/reducers/root-reducer";
import {createAPI} from "./services/api";
import {fetchFilmsList, fetchPromoFilm} from "./store/api-actions";

const api = createAPI();

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

Promise.all([
  store.dispatch(fetchPromoFilm()),
  store.dispatch(fetchFilmsList()),
]).then(() => {
  ReactDom.render(
      <Provider store={store}>
        <App/>
      </Provider>,
      document.querySelector(`#root`)
  );
});

