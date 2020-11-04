import ActionType from "./action-type";
import {FILMS_SHOWED_PER_STEP_COUNT} from "../../../const";

export default {
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
