import reducer from "./reducer";
import ActionType from "./action-type";
import {AuthorizationStatus, EMPTY_STATE_VALUE} from "../../../const";
import {extend} from "../../../utils/extend";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: EMPTY_STATE_VALUE
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual(initialState);
});

it(`Reducer should update authorizationStatus`, () => {
  expect(
      reducer(initialState, {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.AUTH
      })
  ).toEqual(
      extend(initialState, {
        authorizationStatus: AuthorizationStatus.AUTH
      })
  );
});

it(`Reducer should update user`, () => {
  const userMock = {
    username: `name`,
    avatar: ``
  };

  expect(
      reducer(initialState, {
        type: ActionType.GET_USER,
        payload: userMock
      })
  ).toEqual(
      extend(initialState, {
        user: userMock
      })
  );
});
