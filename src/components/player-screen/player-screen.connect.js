import {connect} from "react-redux";
import {getFilmById} from "../../utils/getFilmById";
import PlayerScreen from "./player-screen.state";

export default connect(
    ({DATA}, {filmId}) => ({
      film: getFilmById(filmId, DATA.films)
    })
)(PlayerScreen);
