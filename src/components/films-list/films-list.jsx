import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card";
import {filmType} from "../../types";

class FilmsList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilmId: null
    };

    this.handleFilmHover = this.handleFilmHover.bind(this);
  }

  render() {
    const {
      films
    } = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film) => (<FilmCard
          key={film.id}
          film={film}
          onFilmHover={this.handleFilmHover}
        />))}
      </div>
    );
  }

  handleFilmHover({id}) {
    this.setState({
      activeFilmId: id
    });
  }
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.exact(filmType).isRequired).isRequired
};

export default FilmsList;
