import React from "react";
import renderer from "react-test-renderer";
import {noop} from "../../utils/noop";
import Tab from "../tab/tab";
import Tabs from "./tabs";

const ComponentMock = () => <p>ComponentMock</p>;
const ACTIVE_ITEM_INDEX = 0;

it(`Tabs is rendered correctly`, () => {
  const tree = renderer
    .create(
        <Tabs
          activeItem={ACTIVE_ITEM_INDEX}
          onActiveItemChange={noop}
        >
          <Tab
            title="ComponentMock"
          >
            <ComponentMock />
          </Tab>
          <Tab
            title="test"
          >
            <p>test</p>
          </Tab>
        </Tabs>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
