import React, {PureComponent} from 'react';
import PropsTypes from 'prop-types';
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

export default withFilm;
