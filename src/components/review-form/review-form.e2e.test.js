
import React from "react";
import {mount} from "enzyme";
import ReviewForm from "./review-form";

it(`Should form be submitted`, () => {
  const handleSubmit = jest.fn();
  const handleStarChange = jest.fn();
  const handleTextChange = jest.fn();

  // const initTextValue = ``;
  // const initStarValue = `3`;
  const expectTextValue = `Hello`;
  const expectStarValue = `5`;
  const expectStarIndex = 4;

  const wrapper = mount(
      <ReviewForm
        state={{
          textValue: expectTextValue,
          starValue: expectStarValue,
        }}
        onSubmit={handleSubmit}
        onStarChange={handleStarChange}
        onTextChange={handleTextChange}
      />
  );

  wrapper
    .find(`input.rating__input`)
    .at(expectStarIndex)
    .simulate(`change`, {
      target: {
        value: expectStarValue,
      }
    });

  wrapper
    .find(`textarea.add-review__textarea`)
    .simulate(`input`, {
      target: {
        value: expectTextValue
      },
    });

  wrapper
    .find(`form.add-review__form`)
    .simulate(`submit`);

  expect(handleSubmit).toHaveBeenNthCalledWith(1, {
    rating: expectStarValue,
    comment: expectTextValue
  });
});
