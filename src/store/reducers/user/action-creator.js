import ActionType from "./action-type";

export default {
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status
  }),

  getUser: (userData) => ({
    type: ActionType.GET_USER,
    payload: userData
  })
};
