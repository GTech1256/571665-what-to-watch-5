import {connect} from "react-redux";
import {getFilmById} from "../../utils/getFilmById";
import FilmScreen from "./film-screen";

export default connect(
    ({DATA}, {filmId}) => {
      const film = getFilmById(filmId, DATA.films);

      return {
        film,
        similarFilms: DATA.films.filter((similarFilm) => similarFilm.genre === film.genre && similarFilm.id !== film.id),
        filmReviews: []
      };
    }
)(FilmScreen);
