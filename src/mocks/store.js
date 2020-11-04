
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {NameSpace} from "../store/reducers/root-reducer";
import film from './film';
import films from './films';
import review from './review';

const FILMS_SHOWED_PER_STEP_COUNT = 8;
const FIRST_FILTER_NAME = `All Genres`;
const EMPTY_STATE_VALUE = null;

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const mockStore = configureStore([thunk]);

export default mockStore({
  [NameSpace.ADJUSTMENT]: {
    showedFilmsCount: FILMS_SHOWED_PER_STEP_COUNT,
    activeFilterGenre: FIRST_FILTER_NAME,
  },
  [NameSpace.DATA]: {
    promoFilm: film,
    film,
    films,
    filters: [FIRST_FILTER_NAME, `Action`, `Comedy`],
    comments: [review],
    favoriteFilms: films,
  },
  [NameSpace.USER]: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    user: EMPTY_STATE_VALUE
  },
});
