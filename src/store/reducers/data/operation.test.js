import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import ActionType from "./action-type";
import {ActionType as RedirectActionType} from "../../middlewares/redirect";
import Operation from "./operation";
import {APIRoute, AuthorizationStatus, FIRST_FILTER_NAME, NameSpace} from "../../../const";
import serverFilm from "../../../mocks/serverFilm";
import film from "../../../mocks/film";
import review from "../../../mocks/review";
import store from "../../../mocks/store";
import {MY_LIST_SCREEN_ROUTE_PATH} from "../../../components/my-list-screen/route";
import {extend} from "../../../utils/extend";
import {adaptFilmFromServer} from "../../../utils/filmAdapter";

const api = createAPI(() => {});

describe(`data Operation should correct execute`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = Operation.fetchFilmsList();

    apiMock
      .onGet(APIRoute.FILMS)
      .reply(200, [serverFilm]);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: [film],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_FILTERS,
          payload: [FIRST_FILTER_NAME, serverFilm.genre],
        });
      });
  });

  it(`Should make a correct API call to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoFilmLoader = Operation.fetchPromoFilm();

    apiMock
      .onGet(APIRoute.PROMO_FILM)
      .reply(200, serverFilm);

    return promoFilmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO_FILM,
          payload: film,
        });
      });
  });

  it(`Should make a correct API call to /films/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoFilmLoader = Operation.fetchFilm(film.id);

    apiMock
      .onGet(new RegExp(`${APIRoute.FILMS}/*`))
      .reply(200, serverFilm);

    return promoFilmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILM,
          payload: film,
        });
      });
  });

  it(`Should make a correct API call to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoFilmLoader = Operation.fetchComments(film.id);

    apiMock
      .onGet(new RegExp(`${APIRoute.COMMENTS}/*`))
      .reply(200, review);

    return promoFilmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: review,
        });
      });
  });

  it(`Should make a correct API send to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const handleSubmit = jest.fn();
    const handleError = jest.fn();
    const commentMock = {};
    const promoFilmLoader = Operation.sendComment(film.id, commentMock, handleSubmit, handleError);

    apiMock
      .onPost(new RegExp(`${APIRoute.COMMENTS}/*`))
      .reply(200, review);

    return promoFilmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(0);
        expect(handleSubmit).toHaveBeenCalledTimes(1);
        expect(handleError).toHaveBeenCalledTimes(0);
      });
  });

  it(`Should make a correct API send to /comments/:id with error`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const handleSubmit = jest.fn();
    const handleError = jest.fn();
    const commentMock = {};
    const promoFilmLoader = Operation.sendComment(film.id, commentMock, handleSubmit, handleError);

    apiMock
      .onPost(new RegExp(`${APIRoute.COMMENTS}/*`))
      .reply(400, review);

    return promoFilmLoader(dispatch, () => {}, api)
      .finally(() => {
        expect(dispatch).toHaveBeenCalledTimes(0);
        expect(handleSubmit).toHaveBeenCalledTimes(0);
        expect(handleError).toHaveBeenCalledTimes(1);
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteFilmsLoader = Operation.fetchFavoriteFilms(film.id);

    apiMock
      .onGet(APIRoute.FAVORITE)
      .reply(200, [serverFilm]);

    return favoriteFilmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE_FILMS,
          payload: [film],
        });
      });
  });

  it(`Should not execute API for /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteFilmsLoader = Operation.changeFavoriteFilmStatus(film.id);
    const filmNewFavoriteStatus = 1;
    const expectApiUrl = `${APIRoute.FAVORITE}/${film.id}/${filmNewFavoriteStatus}`;

    apiMock
      .onGet(new RegExp(expectApiUrl))
      .reply(200, [serverFilm]);

    return favoriteFilmsLoader(dispatch, store.getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: RedirectActionType.REDIRECT_TO_ROUTE,
          payload: MY_LIST_SCREEN_ROUTE_PATH,
        });
      });
  });

  it(`Should not execute API for /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const handleSuccess = jest.fn();
    const getState = () => extend(
        store.getState(),
        {
          [NameSpace.USER]: {
            authorizationStatus: AuthorizationStatus.AUTH
          }
        }
    );
    const favoriteFilmsLoader = Operation.changeFavoriteFilmStatus(film, handleSuccess);
    const filmNewFavoriteStatus = 1;
    const serverFavoriteFilm = extend(
        serverFilm,
        {
          'is_favorite': filmNewFavoriteStatus
        }
    );
    const expectApiUrl = `${APIRoute.FAVORITE}/${film.id}/${filmNewFavoriteStatus}`;

    apiMock
      .onPost(new RegExp(expectApiUrl))
      .reply(200, serverFavoriteFilm);

    return favoriteFilmsLoader(dispatch, getState, api)
      .then(() => {
        const adaptedFilmFromServer = adaptFilmFromServer(serverFavoriteFilm);
        expect(handleSuccess).toHaveBeenCalledTimes(1);
        expect(handleSuccess).toHaveBeenNthCalledWith(1, adaptedFilmFromServer);
        expect(dispatch).toHaveBeenCalledTimes(0);
      });
  });
});
