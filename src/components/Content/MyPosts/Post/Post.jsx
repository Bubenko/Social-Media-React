import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://picsum.photos/300/300" alt="" />
      {props.message}
      <br />
      Likes: {props.likes}
    </div>
  );
};

export default Post;
