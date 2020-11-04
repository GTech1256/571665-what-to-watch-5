import {EMPTY_STATE_VALUE} from "../../../const";
import {extend} from "../../../utils/extend";
import ActionType from "./action-type";

const initialState = {
  promoFilm: EMPTY_STATE_VALUE,
  film: EMPTY_STATE_VALUE, // детальная информация о выбранном фильме
  films: [],
  filters: [],
  comments: [], // комментарии у открытого фильма
  // favoriteFilms: [],
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

    // case ActionType.LOAD_FAVORITE_FILMS:
    //   return extend(state, {
    //     favoriteFilms: action.payload
    //   });

    // case ActionType.ADD_TO_FAVORITES:
    //   return extend(state, {
    //     favoriteFilms: [...state.favoriteFilms, action.payload]
    //   });

    // case ActionType.REMOVE_FROM_FAVORITES:
    //   return extend(state, {
    //     favoriteFilms: [...state.favoriteFilms].filter((it) => it.id !== action.payload.id)
    //   });
  }

  return state;
};
