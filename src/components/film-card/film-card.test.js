import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import FilmCard from './film-card';
import filmMock from '../../mocks/film';
import {noop} from '../../utils/noop';

it(`Should FilmCard component render correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <FilmCard
            film={filmMock}
            onCardClick={noop}
          >
          </FilmCard>
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
