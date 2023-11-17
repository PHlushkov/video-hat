import { combineReducers, legacy_createStore } from "redux";
import { dataReducer } from "./dataReducer";
import { inputValueReducer } from "./inputValueReducer";

const rootReducer = combineReducers({
  data: dataReducer,
  inputValue: inputValueReducer,
});

export const store = legacy_createStore(rootReducer);
