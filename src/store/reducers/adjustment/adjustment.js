import {FILM_ALL_GENRES} from "../../../const";
import {extend} from "../../../utils/extend";
import {ActionType} from "../../action";

const initialState = {
  genre: FILM_ALL_GENRES,
};

const adjustment = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.TOGGLE_GENRE_FILTER:
      return extend(state, {
        genre: action.payload,
      });
  }

  return state;
};


export {adjustment};
