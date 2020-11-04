import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";

import ActionType from "./action-type";
import Operation from "./operation";
import {APIRoute, FIRST_FILTER_NAME} from "../../../const";
import serverFilm from "../../../mocks/serverFilm";
import film from "../../../mocks/film";
import review from "../../../mocks/review";

const api = createAPI(() => {});

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
  const promoFilmLoader = Operation.sendComment(film.id);

  apiMock
    .onPost(new RegExp(`${APIRoute.COMMENTS}/*`))
    .reply(200, review);

  return promoFilmLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(0);
    });
});
