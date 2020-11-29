import {EMPTY_STATE_VALUE} from "../../../const";
import {extend} from "../../../utils/extend";
import ActionType from "./action-type";

const initialState = {
  promoFilm: EMPTY_STATE_VALUE,
  film: EMPTY_STATE_VALUE, // детальная информация о выбранном фильме
  films: [],
  filters: [],
  comments: [], // комментарии у открытого фильма
  favoriteFilms: EMPTY_STATE_VALUE,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILTERS:
      return extend(state, {
        filters: action.payload
      });

    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload
      });

    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {
        promoFilm: action.payload
      });

    case ActionType.LOAD_FILM:
      return extend(state, {
        film: action.payload
      });

    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        comments: action.payload
      });

    case ActionType.LOAD_FAVORITE_FILMS:
      return extend(state, {
        favoriteFilms: action.payload
      });
  }

  return state;
};
