import React from "react";
import {mount} from "enzyme";
import Tabs from "./tabs";
import Tab from "../tab/tab";

const ACTIVE_TAB_INDEX = 1;
const ComponentMock = () => <p>ComponentMock</p>;
const ComponentTextMock = () => <p>text</p>;

it(`Should change active tab`, () => {
  const handleActiveItemChange = jest.fn();

  const MountComponent = (
    <Tabs
      activeItem={ACTIVE_TAB_INDEX}
      onActiveItemChange={handleActiveItemChange}
    >
      <Tab
        title="ComponentMock"
      >
        <ComponentMock />
      </Tab>
      <Tab
        title="ComponentTextMock"
      >
        <ComponentTextMock/>
      </Tab>
    </Tabs>
  );

  const wrapper = mount(MountComponent);

  wrapper
    .find(`li`)
    .at(ACTIVE_TAB_INDEX)
    .find(`a`)
    .simulate(`click`);

  expect(handleActiveItemChange)
    .toHaveBeenNthCalledWith(
        1,
        ACTIVE_TAB_INDEX
    );
});
