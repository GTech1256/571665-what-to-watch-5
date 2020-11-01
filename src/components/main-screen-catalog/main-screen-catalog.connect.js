import {connect} from "react-redux";

import {ActionCreator} from "../../store/reducers/adjustment/adjustment";
import {getShowedFilms, getActiveFilter, getShowedFilmsCount, getFilteredFilms} from "../../store/reducers/adjustment/selectors";
import {getFilterItems} from "../../store/reducers/data/selectors";
import MainScreenCatalog from "./main-screen-catalog";

export default connect(
    (state) => ({
      films: getShowedFilms(state),
      activeGenre: getActiveFilter(state),
      genres: getFilterItems(state),
      isShowShowMoreBtn: getShowedFilmsCount(state) <= getFilteredFilms(state).length
    }),
    (dispatch) => ({
      onGenreClick: (genre) => {
        dispatch(ActionCreator.changeGenreFilter(genre));
        dispatch(ActionCreator.resetShowedFilmCount());
      },
      onShowMoreBtnClick: () => dispatch(ActionCreator.incrementShowedFilmCount())
    })
)(MainScreenCatalog);
