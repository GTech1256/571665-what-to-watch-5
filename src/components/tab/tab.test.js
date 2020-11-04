import React from "react";
import renderer from "react-test-renderer";
import {noop} from "../../utils/noop";
import Tab from "./tab";

describe(`Tab is rendered correctly`, () => {
  it(`Active tab`, () => {
    const IS_ACTIVE = true;

    const tree = renderer
      .create(
          <Tab
            title="Title"
            isActive={IS_ACTIVE}
            onClick={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Inative tab`, () => {
    const IS_ACTIVE = false;

    const tree = renderer
      .create(
          <Tab
            title="Title"
            isActive={IS_ACTIVE}
            onClick={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
