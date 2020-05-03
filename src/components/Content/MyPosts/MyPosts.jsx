import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.data.map((p) => (
    <Post message={p.message} likesCount={p.likes} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
    props.updateNewPostTest("");
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostTest(text);
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
