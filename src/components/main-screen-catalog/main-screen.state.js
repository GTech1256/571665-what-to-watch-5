
import {withState} from "../../hocs/with-state/with-state";
import MainScreen from "./main-screen-catalog";

const FILMS_SHOWED_PER_STEP_COUNT = 8;

export default withState(
    {filmsShowedCount: FILMS_SHOWED_PER_STEP_COUNT},
    (setState, props) => ({
      onShowMoreBtnClick: () => {
        const allFilmsCount = props.films.length;

        setState(({filmsShowedCount}) => ({
          filmsShowedCount: Math.min(filmsShowedCount + FILMS_SHOWED_PER_STEP_COUNT, allFilmsCount)
        }));
      },
      onGenreClick(genre) {
        if (genre === props.activeGenre) {
          return;
        }

        setState({filmsShowedCount: FILMS_SHOWED_PER_STEP_COUNT});
        props.onGenreClick(genre);
      }
    })
)(MainScreen);
