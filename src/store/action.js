export const ActionType = {
  TOGGLE_GENRE_FILTER: `TOGGLE_GENRE_FILTER`,
};

export const ActionCreator = {
  toggleGenreFilter: (genre) => ({
    type: ActionType.TOGGLE_GENRE_FILTER,
    payload: genre
  }),
};
