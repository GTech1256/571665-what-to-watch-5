import {connect} from "react-redux";
import {getFilmById} from "../../utils/getFilmById";
import PlayerScreen from "./player-screen.state";

export default connect(
    ({allFilms}, {filmId}) => ({
      film: getFilmById(filmId, allFilms)
    })
)(PlayerScreen);
