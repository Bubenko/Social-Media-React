import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img className="mainImage" src="https://picsum.photos/600/300" />
      </div>
      <div className={s.description}>
        <img src={props.profile.photos.large} alt="" />
        ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;
