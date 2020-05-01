import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <Post message="Hello" likesCount="0" />
      <Post message="This is post 1" likesCount="21" />
      <Post message="This is post 2" likesCount="8" />
    </div>
  );
};

export default MyPosts;
