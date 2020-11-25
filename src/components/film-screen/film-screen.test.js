import React from "react";
import {MemoryRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {AuthorizationStatus} from "../../const";
import films from "../../mocks/films";
import film from "../../mocks/film";
import review from "../../mocks/review";
import {noop} from "../../utils/noop";
import FilmScreen from "./film-screen";
import store from "../../mocks/store";
import {Provider} from "react-redux";

describe(`FilmScreen is rendered correctly`, () => {
  it(`Authed`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <Provider store={store}>
              <FilmScreen
                filmId={film.id}
                film={film}
                similarFilms={films}
                filmReviews={[review]}
                fetchReview={noop}
                authorizationStatus={AuthorizationStatus.AUTH}
                onPlayBtnClick={noop}
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

  it(`non Authed`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <Provider store={store}>
              <FilmScreen
                filmId={film.id}
                film={film}
                similarFilms={films}
                filmReviews={[review]}
                fetchReview={noop}
                authorizationStatus={AuthorizationStatus.NO_AUTH}
                onPlayBtnClick={noop}
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
