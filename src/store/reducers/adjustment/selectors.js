import {createSelector} from "reselect";
import {getFilms} from "../data/selectors";
import {NameSpace} from "../root-reducer";
import {FIRST_FILTER_NAME} from "../../../const";

const NAME_SPACE = NameSpace.ADJUSTMENT;

export const getShowedFilmsCount = (state) => state[NAME_SPACE].showedFilmsCount;

export const getActiveFilter = (state) => state[NAME_SPACE].activeFilterGenre;

export const getFilteredFilms = createSelector(
    getActiveFilter,
    getFilms,
    (
        activeFilter,
        films
    ) => activeFilter === FIRST_FILTER_NAME ?
      films :
      films
        .filter(({genre}) => genre === activeFilter)
);

export const getShowedFilms = createSelector(
    getShowedFilmsCount,
    getFilteredFilms,
    (
        count,
        films
    ) => films.slice(0, count)
);
