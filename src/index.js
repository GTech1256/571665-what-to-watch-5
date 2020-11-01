import React from "react";
import ReactDom from "react-dom";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import App from "./components/app/app.connect";
import rootReducer from "./store/reducers/root-reducer";
import {redirect} from "./store/middlewares/redirect";
import {Operation as UserOperation, ActionCreator} from "./store/reducers/user/user";
import {Operation as DataOperation} from "./store/reducers/data/data";
import {createAPI} from "./services/api";
import {AuthorizationStatus} from "./const";

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

store.dispatch(UserOperation.checkAuth());

Promise.all([
  store.dispatch(DataOperation.fetchPromoFilm()),
  store.dispatch(DataOperation.fetchFilmsList()),
]).then(() => {
  ReactDom.render(
      <Provider store={store}>
        <App/>
      </Provider>,
      document.querySelector(`#root`)
  );
});

