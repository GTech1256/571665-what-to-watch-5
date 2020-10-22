import {ActionType} from "./action";
import {films, genres} from "../mocks/films";
import {extend} from "../utils/extend";
import {FILM_ALL_GENRES} from "../const";
import {getFilmsByGenre} from "../bl/film";

const initialState = {
  films,
  genre: FILM_ALL_GENRES,
  genres
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.TOGGLE_GENRE_FILTER:
      const genre = action.payload;

      return extend(state, {
        genre,
        films: getFilmsByGenre(initialState.films, genre)
      });

    default:
      return state;
  }
};

export {reducer};
