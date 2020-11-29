import React from "react";
import ReactDom from "react-dom";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import App from "./components/app/app.connect";
import rootReducer from "./store/reducers/root-reducer";
import {redirect} from "./store/middlewares/redirect";
import AdjustmentActionCreator from "./store/reducers/adjustment/action-creator";
import UserOperation from "./store/reducers/user/operation";
import UserActionCreator from "./store/reducers/user/action-creator";
import DataOperation from "./store/reducers/data/operation";
import {createAPI} from "./services/api";
import {AuthorizationStatus} from "./const";

const api = createAPI(
    () => store.dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)),
    (errorMessage) => store.dispatch(AdjustmentActionCreator.setErrorMessage(errorMessage))
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
]).finally(() => {
  ReactDom.render(
      <Provider store={store}>
        <App/>
      </Provider>,
      document.querySelector(`#root`)
  );
});

