const DATE_TIME_FORMAT_LOCALE = `en-US`;
const DATE_TIME_FORMAT_OPTION = {
  month: `long`,
  day: `numeric`,
  year: `numeric`
};

export const getFormatedDate = (value) => new Intl.DateTimeFormat(
    DATE_TIME_FORMAT_LOCALE,
    DATE_TIME_FORMAT_OPTION
)
  .format(
      new Date(value)
  );
