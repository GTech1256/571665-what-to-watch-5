import axios from "axios";
import {SeverError} from "../const";

const BACKEND_URL = `https://5.react.pages.academy/wtw`;
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
};

export const createAPI = (onUnauthorized, onServerError) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response) {
      if (response.status === HttpCode.UNAUTHORIZED) {
        onUnauthorized();
      } else if (response.status === HttpCode.NOT_FOUND) {
        onServerError(SeverError.NotFound);
      } else if (!Object.keys(HttpCode).entries(response.status)) {
        onServerError(SeverError.UnknownError);
      }
    } else {
      onServerError(SeverError.NotAvailable);
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
