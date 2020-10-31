import {connect} from "react-redux";
import {getFilmById} from "../../utils/getFilmById";
import AddReviewScreen from "./add-review-screen";

export default connect(
    ({DATA}, {filmId}) => ({
      film: getFilmById(filmId, DATA.films)
    })
)(AddReviewScreen);
