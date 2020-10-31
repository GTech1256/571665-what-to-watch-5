import {connect} from "react-redux";
import {createSelector} from "reselect";
import {getFilmsByGenre} from "../../bl/film";
import {toggleGenreFilter} from "../../store/action";
import MainScreen from "./main-screen.state";

const getFilmsSelector = createSelector(
    ({DATA}) => DATA.films,
    ({ADJUSTMENT}) => ADJUSTMENT.genre,
    getFilmsByGenre
);

export default connect(
    ({DATA, ADJUSTMENT}) => ({
      films: getFilmsSelector({DATA, ADJUSTMENT}),
      activeGenre: ADJUSTMENT.genre,
      genres: DATA.genres
    }),
    (dispatch) => ({
      onGenreClick: (genre) => dispatch(toggleGenreFilter(genre)),
    })
)(MainScreen);
