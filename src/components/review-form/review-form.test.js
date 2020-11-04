import React from "react";
import renderer from "react-test-renderer";
import {noop} from "../../utils/noop";
import ReviewForm from "./review-form";

const stateMock = {
  textValue: `World`,
  starValue: `1`,
};

it(`ReviewForm is rendered correctly`, () => {
  const tree = renderer
    .create(
        <ReviewForm
          state={stateMock}
          onSubmit={noop}
          onStarChange={noop}
          onTextChange={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
