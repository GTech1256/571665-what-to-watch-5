import React from 'react';
import renderer from 'react-test-renderer';
import NotFoundScreen from './not-found-screen';

it(`Should render NotFoundScreen component correctly`, () => {
  const tree = renderer
    .create(
        <NotFoundScreen/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
