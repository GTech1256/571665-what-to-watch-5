import {AuthorizationStatus, EMPTY_STATE_VALUE} from "../../../const";
import {extend} from "../../../utils/extend";
import ActionType from "./action-type";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: EMPTY_STATE_VALUE
};

export default (state = initialState, action) => {
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
