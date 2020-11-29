import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {EMPTY_STATE_VALUE} from '../../const';
import {filmType} from '../../types';

const withFilm = (Component) => {
  class WithFilm extends PureComponent {
    componentDidMount() {
      if (this.props.film === EMPTY_STATE_VALUE) {
        this.props.fetchFilm();
      }
    }

    render() {
      if (this.props.film === EMPTY_STATE_VALUE) {
        return null;
      }

      return <Component {...this.props}/>;
    }
  }

  WithFilm.propTypes = {
    filmId: PropTypes.string.isRequired,
    film: PropTypes.oneOfType([
      PropTypes.oneOf([null]),
      PropTypes.exact(filmType).isRequired
    ]),
    fetchFilm: PropTypes.func.isRequired,
  };

  return WithFilm;
};

export default withFilm;
