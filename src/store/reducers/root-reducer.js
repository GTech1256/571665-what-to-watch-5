import {combineReducers} from "redux";
import {reducer as adjustmentReducer} from "./adjustment/adjustment";
import {reducer as dataReducer} from "./data/data";
import {reducer as userReducer} from "./user/user";

export const NameSpace = {
  ADJUSTMENT: `ADJUSTMENT`,
  DATA: `DATA`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.ADJUSTMENT]: adjustmentReducer,
  [NameSpace.DATA]: dataReducer,
  [NameSpace.USER]: userReducer,
});
