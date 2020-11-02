import {FIRST_FILTER_NAME} from "../../../const";
import {extend} from "../../../utils/extend";

const FILMS_SHOWED_PER_STEP_COUNT = 8;

const initialState = {
  showedFilmsCount: FILMS_SHOWED_PER_STEP_COUNT,
  activeFilterGenre: FIRST_FILTER_NAME,
};

export const ActionType = {
  SET_ACTIVE_FILTER: `SET_ACTIVE_FILTER`,
  INCREMENT_SHOWED_FILM_COUNT: `INCREMENT_SHOWED_FILM_COUNT`,
  RESET_SHOWED_FILM_COUNT: `RESET_SHOWED_FILM_COUNT`,
};

export const ActionCreator = {
  incrementShowedFilmCount: () => ({
    type: ActionType.INCREMENT_SHOWED_FILM_COUNT,
    payload: FILMS_SHOWED_PER_STEP_COUNT
  }),

  resetShowedFilmCount: () => ({
    type: ActionType.RESET_SHOWED_FILM_COUNT,
    payload: FILMS_SHOWED_PER_STEP_COUNT
  }),

  changeGenreFilter: (genre) => ({
    type: ActionType.SET_ACTIVE_FILTER,
    payload: genre
  }),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_SHOWED_FILM_COUNT:
      return extend(state, {
        showedFilmsCount: state.showedFilmsCount + action.payload
      });

    case ActionType.RESET_SHOWED_FILM_COUNT:
      return extend(state, {
        showedFilmsCount: action.payload
      });

    case ActionType.SET_ACTIVE_FILTER:
      return extend(state, {
        activeFilterGenre: action.payload
      });
  }

  return state;
};

