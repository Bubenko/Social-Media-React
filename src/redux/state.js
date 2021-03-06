import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";

let store = {
  _state: {
    profilePage: {
      postData: [
        {
          id: 1,
          message: "How are you",
          likes: 0,
        },
        {
          id: 2,
          message: "This is my first post",
          likes: 32,
        },
        {
          id: 3,
          message: "This is message",
          likes: 12,
        },
        {
          id: 4,
          message: "This is tets",
          likes: 14,
        },
        {
          id: 5,
          message: "Refactoring",
          likes: 20,
        },
      ],

      newPostText: "",
    },
    messagesPage: {
      messagesData: [
        {
          id: 1,
          message: "Hello World!",
        },
        {
          id: 2,
          message: "How are you?",
        },
        {
          id: 3,
          message: "This is message",
        },
        {
          id: 4,
          message: "Props Route Test",
        },
      ],
      dialogsData: [
        {
          id: 1,
          name: "Dima",
          url: "https://picsum.photos/50/50",
        },
        {
          id: 2,
          name: "Andrew",
          url: "https://picsum.photos/50/50",
        },
        {
          id: 3,
          name: "Igor",
          url: "https://picsum.photos/50/50",
        },
        {
          id: 4,
          name: "Viktor",
          url: "https://picsum.photos/50/50",
        },
        {
          id: 5,
          name: "Saha",
          url: "https://picsum.photos/50/50",
        },
      ],
      newMessageBody: "",
    },
    sideNavigation: {
      friendsData: [
        { id: 1, name: "Andrei", url: "https://picsum.photos/50/50" },
        { id: 2, name: "Vovan", url: "https://picsum.photos/50/50" },
        { id: 3, name: "Nazar", url: "https://picsum.photos/50/50" },
      ],
    },
  },
  _callSubscriber() {
    console.log("State was changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(
      this._state.messagesPage,
      action
    );

    this._callSubscriber(this._state);
  },
};
//end of store

export default store;
window.store = store;
