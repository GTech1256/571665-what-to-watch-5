import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withActiveItem from "./with-active-item";

const MockComponent = ({activeItem, children}) => {
  return (children[activeItem]);
};

MockComponent.propTypes = {
  activeItem: PropTypes.number.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(
      PropTypes.element.isRequired
  ).isRequired
};

const MockComponentWrapped = withActiveItem(MockComponent);

it(`withActiveItem is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped>
      <p>1</p>
      <p>2</p>
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
