import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className="mainImage" src="https://picsum.photos/600/300" />
      </div>
      <div className={s.description}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
