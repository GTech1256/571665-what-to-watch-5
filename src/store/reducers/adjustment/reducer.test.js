import reducer from "./reducer";
import ActionType from "./action-type";
import {FILMS_SHOWED_PER_STEP_COUNT, FIRST_FILTER_NAME} from "../../../const";
import {extend} from "../../../utils/extend";

const initialState = {
  showedFilmsCount: FILMS_SHOWED_PER_STEP_COUNT,
  activeFilterGenre: FIRST_FILTER_NAME,
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual(initialState);
});

it(`Reducer should update showedFilmsCount`, () => {
  expect(
      reducer(initialState, {
        type: ActionType.INCREMENT_SHOWED_FILM_COUNT,
        payload: FILMS_SHOWED_PER_STEP_COUNT
      })
  ).toEqual(
      extend(initialState, {
        showedFilmsCount: FILMS_SHOWED_PER_STEP_COUNT + FILMS_SHOWED_PER_STEP_COUNT
      })
  );
});

it(`Reducer should reset showedFilmsCount`, () => {
  expect(
      reducer(initialState, {
        type: ActionType.RESET_SHOWED_FILM_COUNT,
        payload: FILMS_SHOWED_PER_STEP_COUNT
      })
  ).toEqual(
      extend(initialState, {
        showedFilmsCount: FILMS_SHOWED_PER_STEP_COUNT
      })
  );
});

it(`Reducer should update activeFilterGenre`, () => {
  expect(
      reducer(initialState, {
        type: ActionType.SET_ACTIVE_FILTER,
        payload: `Action`
      })
  ).toEqual(
      extend(initialState, {
        activeFilterGenre: `Action`
      })
  );
});
