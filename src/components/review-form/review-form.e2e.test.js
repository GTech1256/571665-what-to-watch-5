
import React from "react";
import {mount} from "enzyme";
import {act} from "react-dom/test-utils";
import ReviewForm from "./review-form";

const TIMEOUT_DURATION = 1000;
const VALID_TEXT_MOCK = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;
const VALID_STAR_MOCK = `5`;
const ERROR = {
  TEXT_LENGTH_MIN: `Minimum of 50 characters in the review text`,
  TEXT_LENGTH_MAX: `Maximum of 400 characters in the review text`,
  EMPTY: ``
};

jest.useFakeTimers();

describe(`ReviewForm correct`, () => {
  it(`Should form not submit with error message`, () => {
    const handleSubmit = jest.fn();

    const expectedCallsCount = 0;
    const textLongLength = 500;
    const textValueShort = `Hello`;
    const textValueLong = new Array(textLongLength).join();

    const wrapper = mount(
        <ReviewForm
          onSubmit={handleSubmit}
        />
    );

    wrapper
      .find(`textarea.add-review__textarea`)
      .simulate(`change`, {
        target: {
          value: textValueShort
        },
      });

    expect(wrapper.find(`p.review__error`).text()).toBe(ERROR.TEXT_LENGTH_MIN);

    wrapper
      .find(`textarea.add-review__textarea`)
      .simulate(`change`, {
        target: {
          value: textValueLong
        },
      });

    expect(wrapper.find(`p.review__error`).text()).toBe(ERROR.TEXT_LENGTH_MAX);

    wrapper
      .find(`form.add-review__form`)
      .simulate(`submit`);

    expect(handleSubmit).toHaveBeenCalledTimes(expectedCallsCount);
  });

  it(`Should form be submitted without error`, () => {
    const handleSubmit = jest.fn((_data, onSuccess) => {
      setTimeout(onSuccess, TIMEOUT_DURATION);
    });

    const expectTextValue = VALID_TEXT_MOCK;
    const expectStarValue = VALID_STAR_MOCK;
    const expectStarIndex = 4;

    const wrapper = mount(
        <ReviewForm
          onSubmit={handleSubmit}
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
      .simulate(`change`, {
        target: {
          value: expectTextValue
        },
      });

    wrapper
      .find(`form.add-review__form`)
      .simulate(`submit`);


    expect(
        wrapper
        .find(`button.add-review__btn`)
        .prop(`disabled`)
    ).toBeTruthy();

    act(() => {
      jest.runAllTimers();
      wrapper.update();
    });


    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenNthCalledWith(
        1,
        {
          rating: expectStarValue,
          comment: expectTextValue
        },
        expect.any(Function),
        expect.any(Function)
    );


    expect(wrapper.find(`p.review__error`).text()).toBe(ERROR.EMPTY);
    expect(
        wrapper
        .find(`button.add-review__btn`)
        .prop(`disabled`)
    ).toBeFalsy();
  });

  it(`Should form be submitted with network error`, () => {
    const handleSubmit = jest.fn((_data, _onSuccess, onError) => {
      timeout(onError);
    });

    const expectTextValue = VALID_TEXT_MOCK;
    const expectStarValue = VALID_STAR_MOCK;
    const expectStarIndex = 4;
    const timeout = (onError) => {
      setTimeout(
          () => {
            onError(errorMock);
          },
          TIMEOUT_DURATION
      );
    };
    const errorMock = {
      message: `Network Error`
    };

    const wrapper = mount(
        <ReviewForm
          onSubmit={handleSubmit}
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
      .simulate(`change`, {
        target: {
          value: expectTextValue
        },
      });

    wrapper
      .find(`form.add-review__form`)
      .simulate(`submit`);


    expect(
        wrapper
        .find(`button.add-review__btn`)
        .prop(`disabled`)
    ).toBeTruthy();

    act(() => {
      jest.runAllTimers();
      wrapper.update();
    });


    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenNthCalledWith(
        1,
        {
          rating: expectStarValue,
          comment: expectTextValue
        },
        expect.any(Function),
        expect.any(Function)
    );


    expect(wrapper.find(`p.review__error`).text()).toBe(errorMock.message);
    expect(
        wrapper
        .find(`button.add-review__btn`)
        .prop(`disabled`)
    ).toBeFalsy();
  });

  it(`Should form be submitted with server error`, () => {
    const handleSubmit = jest.fn((_data, _onSuccess, onError) => {
      timeout(onError);
    });

    const expectTextValue = VALID_TEXT_MOCK;
    const expectStarValue = VALID_STAR_MOCK;
    const expectStarIndex = 4;
    const timeout = (onError) => {
      setTimeout(
          () => {
            onError(errorMock);
          },
          TIMEOUT_DURATION
      );
    };
    const errorMock = {
      message: `Server Error`,
      response: {
        data: {
          error: `error text`
        }
      }
    };

    const wrapper = mount(
        <ReviewForm
          onSubmit={handleSubmit}
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
      .simulate(`change`, {
        target: {
          value: expectTextValue
        },
      });

    wrapper
      .find(`form.add-review__form`)
      .simulate(`submit`);


    expect(
        wrapper
        .find(`button.add-review__btn`)
        .prop(`disabled`)
    ).toBeTruthy();

    act(() => {
      jest.runAllTimers();
      wrapper.update();
    });


    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenNthCalledWith(
        1,
        {
          rating: expectStarValue,
          comment: expectTextValue
        },
        expect.any(Function),
        expect.any(Function)
    );


    expect(wrapper.find(`p.review__error`).text()).toBe(`${errorMock.message}: ${errorMock.response.data.error}`);
    expect(
        wrapper
        .find(`button.add-review__btn`)
        .prop(`disabled`)
    ).toBeFalsy();
  });
});
