import React from "react";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import film from "../../mocks/film";
import store from "../../mocks/store";
import {noop} from "../../utils/noop";
import AddReviewScreen from "./add-review-screen";

it(`AddReviewScreen is rendered correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <Provider store={store}>
            <AddReviewScreen
              filmId={film.id}
              film={film}
              onSubmit={noop}
            />
          </Provider>
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
