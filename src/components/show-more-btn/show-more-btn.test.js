import React from "react";
import renderer from "react-test-renderer";
import {noop} from "../../utils/noop";
import ShowMoreBtn from "./show-more-btn";

it(`ShowMoreBtn is rendered correctly`, () => {
  const tree = renderer
    .create(
        <ShowMoreBtn
          onClick={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
