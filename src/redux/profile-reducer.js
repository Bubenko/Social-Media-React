const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
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
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likes: 12,
      };
      state.newPostText = "";
      state.postData.push(newPost);
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

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

export default profileReducer;