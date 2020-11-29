import React from "react";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import films from "../../mocks/films";
import store from "../../mocks/store";
import FilmsList from "./films-list";

it(`FilmsList is rendered correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <Provider store={store}>
            <FilmsList
              limit={2}
              films={films}
            />
          </Provider>
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
