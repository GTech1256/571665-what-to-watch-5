import {connect} from "react-redux";
import {getPromoFilm} from "../../store/reducers/data/selectors";
import MainScreen from "./main-screen";

export default connect(
    (state) => ({
      filmPromo: getPromoFilm(state)
    })
)(MainScreen);
