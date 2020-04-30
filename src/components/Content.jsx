import React from "react";
import classes from "./Content.module.css";

const Content = () => {
  return (
    <div className={classes.content}>
      <div className="headerImage">
        <img
          className={classes.mainImage}
          src="https://thumbs.dreamstime.com/b/logo-wall-modern-office-editorial-conceptual-d-logo-facebook-wall-modern-office-editorial-conceptual-d-163585829.jpg"
        />
      </div>
      <div className={classes.item}>
        My posts <br />
        <a href="#">link</a>
        <div>New Post</div>
      </div>
    </div>
  );
};

export default Content;
