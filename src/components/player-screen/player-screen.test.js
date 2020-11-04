import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import PlayerScreen from './player-screen.jsx';
import filmMock from '../../mocks/film';
import {noop} from '../../utils/noop';

it(`Should render PlayerScreen component correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <PlayerScreen
            film={filmMock}
            onExitButtonClick={noop}
          />
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
