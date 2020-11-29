import {combineReducers} from "redux";
import {NameSpace} from "../../const";
import {reducer as adjustmentReducer} from "./adjustment/adjustment";
import {reducer as dataReducer} from "./data/data";
import {reducer as userReducer} from "./user/user";

export default combineReducers({
  [NameSpace.ADJUSTMENT]: adjustmentReducer,
  [NameSpace.DATA]: dataReducer,
  [NameSpace.USER]: userReducer,
});
