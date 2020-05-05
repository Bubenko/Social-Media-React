import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../redux/state";

const MyPosts = (props) => {
  let postsElements = props.data.map((p) => (
    <Post message={p.message} likes={p.likes} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    //props.addPost();
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    //props.updateNewPostTest(text);
    props.dispatch(updateNewPostActionCreator(text));
  };

  return (
    <div className={s.myPostBlock}>
      <h2>My post</h2>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
