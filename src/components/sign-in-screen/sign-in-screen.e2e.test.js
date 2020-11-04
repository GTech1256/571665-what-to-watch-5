
import React from "react";
import {mount} from "enzyme";
import SignInScreen from "./sign-in-screen";
import {MemoryRouter} from "react-router-dom";

it(`Should form be submitted`, () => {
  const handleSubmit = jest.fn();

  const expectEmail = `valid@email.com`;
  const expectPassword = `123456789`;

  const wrapper = mount(
      <MemoryRouter>
        <SignInScreen
          onSubmit={handleSubmit}
        />
      </MemoryRouter>
  );

  wrapper
    .find(`input.sign-in__input[name="email"]`)
    .instance()
    .value = expectEmail;

  wrapper
    .find(`input.sign-in__input[name="password"]`)
    .instance()
    .value = expectPassword;

  wrapper
    .find(`form.sign-in__form`)
    .simulate(`submit`);

  expect(handleSubmit).toHaveBeenNthCalledWith(1, {
    email: expectEmail,
    password: expectPassword
  });
});
