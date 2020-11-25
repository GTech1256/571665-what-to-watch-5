import React from "react";
import {MemoryRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {AuthorizationStatus} from "../../const";
import UserBlock from "./user-block";

describe(`UserBlock is rendered correctly`, () => {
  it(`Authed`, () => {
    const tree = renderer
      .create(
          <UserBlock
            authorizationStatus={AuthorizationStatus.AUTH}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Unauthed`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <UserBlock
              authorizationStatus={AuthorizationStatus.NO_AUTH}
            />
          </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
