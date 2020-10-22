import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import MainScreen from "./main-screen";

export default connect(
    ({genre, genres}) => ({
      activeGenre: genre,
      genres
    }),
    (dispatch) => ({
      onGenreClick: (genre) => dispatch(ActionCreator.toggleGenreFilter(genre)),
    })
)(MainScreen);
