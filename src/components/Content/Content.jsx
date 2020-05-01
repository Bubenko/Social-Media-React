import React from "react";
import classes from "./Content.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Content = () => {
  return (
    <div>
      <div>
        <img
          className="mainImage"
          src="https://thumbs.dreamstime.com/b/logo-wall-modern-office-editorial-conceptual-d-logo-facebook-wall-modern-office-editorial-conceptual-d-163585829.jpg"
        />
      </div>
      <MyPosts />
    </div>
  );
};

export default Content;
