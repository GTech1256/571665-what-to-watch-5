export const FILM_SCREEN_BASE_PATH = `/films`;
export const FILM_SCREEN_ROUTE_PATH = `${FILM_SCREEN_BASE_PATH}/:id`;

export const getFilmScreenFullPath = (filmId) => `${FILM_SCREEN_BASE_PATH}/${filmId}`;
