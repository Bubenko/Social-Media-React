import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidenavReducer from "./sidenav-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  sideNavigation: sidenavReducer,
});

let store = createStore(reducers);

export default store;
