import React from "react";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import films from "../../mocks/films";
import genres from "../../mocks/genres";
import store from "../../mocks/store";
import {noop} from "../../utils/noop";
import MainScreenCatalog from "./main-screen-catalog";

describe(`MainScreenCatalog is rendered correctly`, () => {
  it(`with ShowMoreBtn`, () => {
    const tree = renderer
    .create(
        <MemoryRouter>
          <Provider store={store}>
            <MainScreenCatalog
              films={films}
              activeGenre={genres[0]}
              genres={genres}
              isShowShowMoreBtn
              onGenreClick={noop}
              onShowMoreBtnClick={noop}
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

  it(`without ShowMoreBtn`, () => {
    const tree = renderer
    .create(
        <MemoryRouter>
          <Provider store={store}>
            <MainScreenCatalog
              films={films}
              activeGenre={genres[0]}
              genres={genres}
              onGenreClick={noop}
              onShowMoreBtnClick={noop}
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
});
