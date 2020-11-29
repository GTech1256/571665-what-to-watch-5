export const makeErrorMessage = (error) => `${error.message}${error.response ? `: ${error.response.data.error}` : ``}`;
