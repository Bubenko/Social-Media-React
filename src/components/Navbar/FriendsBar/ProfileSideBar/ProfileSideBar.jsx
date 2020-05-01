import React from "react";
import s from "./ProfileSideBar.module.css";

const ProfileSideBar = (props) => {
  return (
    <div>
      <img src={props.url} alt="" />
      <div>{props.name}</div>
    </div>
  );
};

export default ProfileSideBar;
