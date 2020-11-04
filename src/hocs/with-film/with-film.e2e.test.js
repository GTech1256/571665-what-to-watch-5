import React from 'react';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import withFilm from './with-film';
import store from '../../mocks/store';
import {EMPTY_STATE_VALUE} from '../../const';
import film from '../../mocks/film';

const MockComponent = () => <div/>;
const MockComponentWrapped = withFilm(MockComponent);

describe(`withFilm HOC`, () => {
  it(`Should exec fetchFilm`, () => {
    const fetchFilm = jest.fn();

    mount(
        <Provider store={store}>
          <MockComponentWrapped
            filmId={film.id}
            film={EMPTY_STATE_VALUE}
            fetchFilm={fetchFilm}
          />
        </Provider>
    );

    expect(fetchFilm).toBeCalledTimes(1);
  });

  it(`Should will not executed fetchFilm`, () => {
    const fetchFilm = jest.fn();

    mount(
        <Provider store={store}>
          <MockComponentWrapped
            filmId={film.id}
            film={film}
            fetchFilm={fetchFilm}
          />
        </Provider>
    );

    expect(fetchFilm).toBeCalledTimes(0);
  });
});

