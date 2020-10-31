export const getFilmById = (filmId, films) => films.find(({id}) => filmId === `${id}`);
