import React from "react";
import classes from "./Content.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Content = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
      {/* data={props.data} dispatch={props.dispatch} */}
    </div>
  );
};

export default Content;
