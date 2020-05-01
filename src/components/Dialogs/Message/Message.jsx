import React from "react";
import s from "./Messages.module.css";
import { Route, NavLink } from "react-router-dom";

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

export default Message;
