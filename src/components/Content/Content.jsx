import React from "react";
import classes from "./Content.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Content = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts data={props.data} />
    </div>
  );
};

export default Content;
