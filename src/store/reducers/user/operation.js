import {MAIN_SCREEN_ROUTE_PATH} from "../../../components/main-screen/route";
import {APIRoute, AuthorizationStatus} from "../../../const";
import {ActionCreator as redirectActionCreator} from "../../middlewares/redirect";
import ActionCreator from "./action-creator";

export default {
  checkAuth: () => (dispatch, _getState, api) => (
    api.get(APIRoute.LOGIN)
      .then(({data}) => dispatch(ActionCreator.getUser(data)))
      .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
  ),

  login: (authData) => (dispatch, _getState, api) => (
    api.post(APIRoute.LOGIN, authData)
      .then(({data}) => dispatch(ActionCreator.getUser(data)))
      .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
      .then(() => dispatch(redirectActionCreator.redirect(MAIN_SCREEN_ROUTE_PATH)))
  )
};
