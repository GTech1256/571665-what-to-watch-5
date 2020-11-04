import React from 'react';
import {shallow} from 'enzyme';
import withActiveItem from './with-active-item';

const MockComponent = () => <div/>;
const MockComponentWrapped = withActiveItem(MockComponent);

it(`Should change active item`, () => {
  const wrapper = shallow(
      <MockComponentWrapped/>
  );

  expect(wrapper.props().activeItem).toEqual(0);
  wrapper.props().onActiveItemChange(1);
  expect(wrapper.props().activeItem).toEqual(1);
});
