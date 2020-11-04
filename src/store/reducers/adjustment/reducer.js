import ActionType from "./action-type";
import {extend} from "../../../utils/extend";
import {FILMS_SHOWED_PER_STEP_COUNT, FIRST_FILTER_NAME} from "../../../const";

const initialState = {
  showedFilmsCount: FILMS_SHOWED_PER_STEP_COUNT,
  activeFilterGenre: FIRST_FILTER_NAME,
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
  }

  return state;
};
