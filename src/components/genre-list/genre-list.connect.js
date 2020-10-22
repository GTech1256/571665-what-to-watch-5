import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import GenreList from "./genre-list";

export default connect(
    ({genre, genres}) => ({
      activeGenre: genre,
      genres
    }),
    (dispatch) => ({
      onGenreClick: (genre) => dispatch(ActionCreator.toggleGenreFilter(genre)),
    })
)(GenreList);
