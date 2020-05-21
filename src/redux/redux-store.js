import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidenavReducer from "./sidenav-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  sideNavigation: sidenavReducer,
  usersPage: usersReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
