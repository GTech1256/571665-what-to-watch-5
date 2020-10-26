import {films as mockFilms} from "../mocks/films";

export const getFilmById = (filmId, films = mockFilms) => films.find(({id}) => filmId === `${id}`);
