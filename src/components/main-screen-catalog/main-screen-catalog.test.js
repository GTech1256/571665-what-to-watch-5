import React from "react";
import {MemoryRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import films from "../../mocks/films";
import genres from "../../mocks/genres";
import {noop} from "../../utils/noop";
import MainScreenCatalog from "./main-screen-catalog";

describe(`MainScreenCatalog is rendered correctly`, () => {
  it(`with ShowMoreBtn`, () => {
    const tree = renderer
    .create(
        <MemoryRouter>
          <MainScreenCatalog
            films={films}
            activeGenre={genres[0]}
            genres={genres}
            isShowShowMoreBtn
            onGenreClick={noop}
            onShowMoreBtnClick={noop}
          />
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

  it(`without ShowMoreBtn`, () => {
    const tree = renderer
    .create(
        <MemoryRouter>
          <MainScreenCatalog
            films={films}
            activeGenre={genres[0]}
            genres={genres}
            onGenreClick={noop}
            onShowMoreBtnClick={noop}
          />
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
});
