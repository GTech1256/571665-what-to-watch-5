import React from "react";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import films from "../../mocks/films";
import store from "../../mocks/store";
import MyListScreen from "./my-list-screen";

it(`MyListScreen is rendered correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <Provider store={store}>
            <MyListScreen
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
