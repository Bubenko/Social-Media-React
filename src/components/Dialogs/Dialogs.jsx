import React from "react";
import s from "./Dialogs.module.css";
import { Route, NavLink } from "react-router-dom";

const Dialogs = () => {
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          <div className={s.dialog}>
            <NavLink to="/dialogs/1">Person 1 </NavLink>
          </div>
          <div className={s.dialog}>
            <NavLink to="/dialogs/2">Person 2</NavLink>
          </div>
          <div className={s.dialog}>
            <NavLink to="/dialogs/3">Person 3</NavLink>
          </div>
          <div className={s.dialog}>
            <NavLink to="/dialogs/4">Person 4</NavLink>
          </div>
          <div className={s.dialog}>
            <NavLink to="/dialogs/5">Person 5</NavLink>
          </div>
        </div>
        <div className={s.messages}>
          <div className={s.message}>Hello 1</div>
          <div className={s.message}>Hello 2</div>
          <div className={s.message}>Hello 3</div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
