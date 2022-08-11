import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import usersReducer from "./usersReducer";
import usersDropdownReducer from "./usersDropdownReducer";

const rootReducer = combineReducers({
  usersReducer,
  usersDropdownReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
