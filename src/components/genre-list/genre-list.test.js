import React from "react";
import renderer from "react-test-renderer";
import genres from "../../mocks/genres";
import {noop} from "../../utils/noop";
import GenreList from "./genre-list";

it(`GenreList is rendered correctly`, () => {
  const tree = renderer
    .create(
        <GenreList
          activeGenre={genres[0]}
          onGenreClick={noop}
          genres={genres}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
