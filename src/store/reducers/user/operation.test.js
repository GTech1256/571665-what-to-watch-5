import MockAdapter from "axios-mock-adapter";
import {MAIN_SCREEN_ROUTE_PATH} from "../../../components/main-screen/route";
import {APIRoute, AuthorizationStatus} from "../../../const";
import {ActionType as redirectActionType} from "../../middlewares/redirect";
import {createAPI} from "../../../services/api";
import ActionType from "./action-type";
import Operation from "./operation";

const api = createAPI(() => {});


describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {login: `test@test.ru`, password: `123456`};
    const checkAuthLoader = Operation.checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, fakeUser);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_USER,
          payload: fakeUser,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it(`Should make a correct API post to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {login: `test@test.ru`, password: `123456`};
    const loginLoader = Operation.login(fakeUser);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, fakeUser);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_USER,
          payload: fakeUser,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: redirectActionType.REDIRECT_TO_ROUTE,
          payload: MAIN_SCREEN_ROUTE_PATH,
        });
      });
  });

});
