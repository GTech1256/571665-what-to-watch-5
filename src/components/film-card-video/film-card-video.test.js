import React from "react";
import renderer from "react-test-renderer";
import {noop} from "../../utils/noop";
import FilmCardVideo from "./film-card-video";

const MockComponent = () => <p>MockComponent</p>;

it(`FilmCardVideo is rendered correctly`, () => {
  const tree = renderer
    .create(
        <FilmCardVideo
          onMouseEnter={noop}
          onMouseLeave={noop}
        >
          <MockComponent />
        </FilmCardVideo>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
