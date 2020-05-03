import { rerenderEntireTree } from "../render";

let state = {
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
    newPostText: "it-.com",
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
  },
  sideNavigation: {
    friendsData: [
      { id: 1, name: "Andrei", url: "https://picsum.photos/50/50" },
      { id: 2, name: "Vovan", url: "https://picsum.photos/50/50" },
      { id: 3, name: "Nazar", url: "https://picsum.photos/50/50" },
    ],
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.postData.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export let updateNewPostTest = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;
