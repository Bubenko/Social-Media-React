import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <img
        className={classes.logo}
        src="https://somnomed.com/wp-content/uploads/2017/09/SM-SOCIAL-MEDIA-ICON-FACEBOOK-5.png"
      />
    </header>
  );
};

export default Header;
