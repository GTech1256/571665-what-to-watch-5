import {combineReducers} from "redux";
import {adjustment} from "./adjustment/adjustment";
import {data} from "./data/data";
import {user} from "./user/user";

export const NameSpace = {
  ADJUSTMENT: `ADJUSTMENT`,
  DATA: `DATA`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.ADJUSTMENT]: adjustment,
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
});
