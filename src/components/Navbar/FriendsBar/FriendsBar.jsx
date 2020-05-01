import React from "react";
import s from "./FriendsBar.module.css";
import ProfileSideBar from "./ProfileSideBar/ProfileSideBar";

const FriendsBar = (props) => {
  let fridendsElements = props.friendsData.map((f) => (
    <ProfileSideBar url={f.url} name={f.name} />
  ));

  return (
    <div>
      <div>
        <h1 className={s.heading}>This is Friends bar</h1>
      </div>
      <div className={s.friendsGrid}>{fridendsElements}</div>
    </div>
  );
};

export default FriendsBar;
