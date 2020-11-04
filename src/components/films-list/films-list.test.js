import React from "react";
import {MemoryRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import films from "../../mocks/films";
import FilmsList from "./films-list";

it(`FilmsList is rendered correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <FilmsList
            limit={2}
            films={films}
          />
        </MemoryRouter>,
        {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
