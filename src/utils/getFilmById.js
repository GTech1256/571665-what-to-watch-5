import films from "../mocks/films";

export const getFilmById = (filmId) => films.find(({id}) => filmId === `${id}`);
