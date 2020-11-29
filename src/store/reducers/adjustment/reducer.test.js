import reducer from "./reducer";
import ActionType from "./action-type";
import {extend} from "../../../utils/extend";
import {
  FILMS_SHOWED_PER_STEP_COUNT,
  EMPTY_STATE_VALUE,
  FIRST_FILTER_NAME
} from "../../../const";

const initialState = {
  showedFilmsCount: FILMS_SHOWED_PER_STEP_COUNT,
  activeFilterGenre: FIRST_FILTER_NAME,
  errorMessage: EMPTY_STATE_VALUE
};

describe(`adjustment reducers should change state correct`, () => {
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
    const expectedValue = `Action`;

    expect(
        reducer(initialState, {
          type: ActionType.SET_ACTIVE_FILTER,
          payload: expectedValue
        })
    ).toEqual(
        extend(initialState, {
          activeFilterGenre: expectedValue
        })
    );
  });

  it(`Reducer should update errorMessage`, () => {
    const expectedValue = `Some Error`;

    expect(
        reducer(initialState, {
          type: ActionType.SET_ERROR_MESSAGE,
          payload: expectedValue
        })
    ).toEqual(
        extend(initialState, {
          errorMessage: expectedValue
        })
    );
  });
});
