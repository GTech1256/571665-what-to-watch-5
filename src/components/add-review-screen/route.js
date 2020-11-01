import {FILM_SCREEN_BASE_PATH} from "../film-screen/route";

const ADD_REVIEW_SCREEN_PATH = `review`;
export const ADD_REVIEW_SCREEN_ROUTE_PATH = `${FILM_SCREEN_BASE_PATH}/:id/${ADD_REVIEW_SCREEN_PATH}`;

export const getFilmReviewScreenFullPath = (filmId) => `${FILM_SCREEN_BASE_PATH}/${filmId}/${ADD_REVIEW_SCREEN_PATH}`;
