import {ActionCreator as redirectActionCreator} from "../../middlewares/redirect";
import {APIRoute, AuthorizationStatus, EMPTY_STATE_VALUE} from "../../../const";
import {extend} from "../../../utils/extend";
import {MAIN_SCREEN_ROUTE_PATH} from "../../../components/main-screen/route";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: EMPTY_STATE_VALUE
};

export const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  GET_USER: `GET_USER`
};

export const ActionCreator = {
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status
  }),

  getUser: (userData) => ({
    type: ActionType.GET_USER,
    payload: userData
  })
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });

    case ActionType.GET_USER:
      return extend(state, {
        user: action.payload,
      });
  }

  return state;
};

export const Operation = {
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
