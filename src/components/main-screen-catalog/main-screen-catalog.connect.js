import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import MainScreen from "./main-screen.state";

export default connect(
    ({films, genre, genres}) => ({
      films,
      activeGenre: genre,
      genres
    }),
    (dispatch) => ({
      onGenreClick: (genre) => dispatch(ActionCreator.toggleGenreFilter(genre)),
    })
)(MainScreen);
