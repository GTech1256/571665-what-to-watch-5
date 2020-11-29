import reducer from "./reducer";
import ActionType from "./action-type";
import {EMPTY_STATE_VALUE, FIRST_FILTER_NAME} from "../../../const";
import {extend} from "../../../utils/extend";
import films from "../../../mocks/films";
import review from "../../../mocks/review";
import film from "../../../mocks/film";

const initialState = {
  promoFilm: EMPTY_STATE_VALUE,
  film: EMPTY_STATE_VALUE,
  films: [],
  filters: [],
  comments: [],
  favoriteFilms: EMPTY_STATE_VALUE,
};

describe(`data reducers should change state correct`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual(initialState);
  });

  it(`Reducer should update filters`, () => {
    expect(
        reducer(initialState, {
          type: ActionType.LOAD_FILTERS,
          payload: [FIRST_FILTER_NAME]
        })
    ).toEqual(
        extend(initialState, {
          filters: [FIRST_FILTER_NAME]
        })
    );
  });

  it(`Reducer should update films`, () => {
    expect(
        reducer(initialState, {
          type: ActionType.LOAD_FILMS,
          payload: films
        })
    ).toEqual(
        extend(initialState, {
          films
        })
    );
  });

  it(`Reducer should update promoFilm`, () => {
    expect(
        reducer(initialState, {
          type: ActionType.LOAD_PROMO_FILM,
          payload: film
        })
    ).toEqual(
        extend(initialState, {
          promoFilm: film
        })
    );
  });

  it(`Reducer should update film`, () => {
    expect(
        reducer(initialState, {
          type: ActionType.LOAD_FILM,
          payload: film
        })
    ).toEqual(
        extend(initialState, {
          film
        })
    );
  });

  it(`Reducer should update comments`, () => {
    expect(
        reducer(initialState, {
          type: ActionType.LOAD_COMMENTS,
          payload: [review]
        })
    ).toEqual(
        extend(initialState, {
          comments: [review]
        })
    );
  });

  it(`Reducer should update favoriteFilms`, () => {
    expect(
        reducer(initialState, {
          type: ActionType.LOAD_FAVORITE_FILMS,
          payload: films
        })
    ).toEqual(
        extend(initialState, {
          favoriteFilms: films
        })
    );
  });
});
