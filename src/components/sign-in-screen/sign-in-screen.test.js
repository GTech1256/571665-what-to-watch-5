import React from "react";
import {MemoryRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {noop} from "../../utils/noop";
import SignInScreen from "./sign-in-screen";

it(`ShowMoreBtn is rendered correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <SignInScreen
            onSubmit={noop}
          />
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
