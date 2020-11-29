import ActionType from "./action-type";
import {extend} from "../../../utils/extend";
import {
  EMPTY_STATE_VALUE,
  FILMS_SHOWED_PER_STEP_COUNT,
  FIRST_FILTER_NAME
} from "../../../const";

const initialState = {
  showedFilmsCount: FILMS_SHOWED_PER_STEP_COUNT,
  activeFilterGenre: FIRST_FILTER_NAME,
  errorMessage: EMPTY_STATE_VALUE
};


export default (state = initialState, action) => {
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

    case ActionType.SET_ERROR_MESSAGE:
      return extend(state, {
        errorMessage: action.payload
      });
  }

  return state;
};
