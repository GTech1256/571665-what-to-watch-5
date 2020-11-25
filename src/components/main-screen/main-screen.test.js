import React from "react";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import film from "../../mocks/film";
import store from "../../mocks/store";
import {noop} from "../../utils/noop";
import MainScreen from "./main-screen";

it(`MainScreen is rendered correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <Provider store={store}>
            <MainScreen
              filmPromo={film}
              onMyListBtnClick={noop}
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
