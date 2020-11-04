import React from "react";
import {Provider} from "react-redux";
import renderer from "react-test-renderer";
import store from "../../mocks/store";
import App from "./app";


it(`App is rendered correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <App />
        </Provider>,
        {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
