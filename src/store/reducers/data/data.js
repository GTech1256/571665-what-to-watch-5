import {extend} from "../../../utils/extend";
import {ActionType} from "../../action";


const initialState = {
  promoFilm: null,
  films: [],
  genres: []
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_PROMO_FILMS:
      return extend(state, {
        promoFilm: action.payload
      });

    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload
      });

    case ActionType.SET_GENRES:
      return extend(state, {
        genres: action.payload
      });

    default:
      return state;
  }
};

export {data};
