import React, {PureComponent} from 'react';
import PropsTypes from 'prop-types';
import {connect} from 'react-redux';
import {Operation} from '../../store/reducers/data/data';
import {getFilm} from '../../store/reducers/data/selectors';
import {EMPTY_STATE_VALUE} from '../../const';
import {filmType} from '../../types';

const withFilm = (Component) => {
  class WithFilm extends PureComponent {
    render() {
      if (this.props.film === EMPTY_STATE_VALUE) {
        return null;
      }

      return <Component {...this.props}/>;
    }

    componentDidMount() {
      if (this.props.film === EMPTY_STATE_VALUE) {
        this.props.fetchFilm();
      }
    }
  }

  WithFilm.propTypes = {
    filmId: PropsTypes.string.isRequired,
    film: PropsTypes.oneOfType([
      PropsTypes.oneOf([null]),
      PropsTypes.exact(filmType).isRequired
    ]),
    fetchFilm: PropsTypes.func.isRequired,
  };

  return WithFilm;
};

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
