import {connect} from 'react-redux';
import {Operation} from '../../store/reducers/data/data';
import {getFilm} from '../../store/reducers/data/selectors';
import withFilm from './with-film';

export default (Component) => connect(
    (state, {filmId}) => ({
      film: getFilm(state, filmId)
    }),
    (dispatch, {filmId}) => ({
      fetchFilm() {
        dispatch(Operation.fetchFilm(filmId));
      }
    })
)(withFilm(Component));
