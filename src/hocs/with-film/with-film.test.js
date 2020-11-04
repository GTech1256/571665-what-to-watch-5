import React from "react";
import {Provider} from "react-redux";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import {filmType} from "../../types";
import withFilm from "./with-film.connect";
import filmMock from "../../mocks/film";
import store from "../../mocks/store";

const MockComponent = ({film}) => <p>{film.name}</p>;

MockComponent.propTypes = {
  film: PropTypes.exact(filmType).isRequired,
};

const MockComponentWrapped = withFilm(MockComponent);

it(`withFilm is rendered correctly`, () => {
  const tree = renderer.create((
    <Provider store={store}>
      <MockComponentWrapped filmId={filmMock.id} />
    </Provider>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
