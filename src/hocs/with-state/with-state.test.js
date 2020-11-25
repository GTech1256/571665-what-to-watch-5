import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import {filmType} from "../../types";
import filmMock from "../../mocks/film";
import withState from "./with-state";

const MockComponent = ({state: {film}, onFilmClick}) => <button onClick={onFilmClick}>{film.name}</button>;

MockComponent.propTypes = {
  state: PropTypes.exact({
    film: PropTypes.exact(filmType).isRequired
  }).isRequired,
  onFilmClick: PropTypes.func.isRequired
};

const MockComponentWrapped = withState(
    {film: filmMock},
    () => ({
      onFilmClick() {}
    })
)(MockComponent);

it(`withState is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
