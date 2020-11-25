import React from "react";
import {mount} from "enzyme";
import AddReviewScreen from "./add-review-screen";
import film from "../../mocks/film";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "../../mocks/store";

it(`Should form be submitted`, () => {
  const handleSubmit = jest.fn();

  const wrapper = mount(
      <MemoryRouter>
        <Provider store={store}>
          <AddReviewScreen
            filmId={film.id}
            film={film}
            onSubmit={handleSubmit}
          />
        </Provider>
      </MemoryRouter>
  );

  wrapper
    .find(`form.add-review__form`)
    .simulate(`submit`);

  expect(handleSubmit).toHaveBeenNthCalledWith(1, {
    rating: `3`,
    comment: ``
  });
});
