import React from "react";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    props.store.dispatch(updateNewPostActionCreator(text));
  };
  return (
    <MyPosts
      updateNewPostTest={onPostChange}
      addPost={addPost}
      posts={props.store.data}
      // newPostElement={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
