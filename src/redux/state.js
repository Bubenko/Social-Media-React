const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

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

  // addPost() {
  //   let newPost = {
  //     id: 5,
  //     message: this._state.profilePage.newPostText,
  //     likes: 10,
  //   };
  //   this._state.profilePage.postData.push(newPost);
  //   this._state.profilePage.newPostText = "";
  //   this._callSubscriber(this._state);
  // },
  // updateNewPostTest(newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likes: 12,
      };
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.messagesPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.messagesPage.newMessageBody;
      this._state.messagesPage.newMessageBody = "";
      this._state.messagesPage.messagesData.push({ id: 6, message: body });
      this._callSubscriber(this._state);
      // let newMessage = {
      //   id: 10,
      //   message: this._state.messagesPage.newMessageBody,
      // };
      // this._state.messagesPage.messagesData.push(newMessage);
      // this._state.messagesPage.newMessageBody = "";
    }
  },
};
//end of store

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export const sendMessageBodyCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
};

export default store;
window.store = store;
