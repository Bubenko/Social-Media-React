import React from "react";
import classes from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import FriendsBar from "./FriendsBar/FriendsBar";

const Nav = (props) => {
  return (
    <div className={classes.nav}>
      <nav>
        <div className={classes.item}>
          <NavLink to="/content">Profile</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/dialogs">Messages</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/news">News</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="music">Music</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/settings">Settings</NavLink>
        </div>
      </nav>
      {/* <FriendsBar friendsData={props.friendsData} /> */}
    </div>
  );
};

export default Nav;
