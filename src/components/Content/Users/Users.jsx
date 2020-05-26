import React from "react";
import * as axios from "axios";
import styles from "./users.module.css";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i < pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.container}>
      <div className={styles.pagination}>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && styles.selectedPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>

      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/content/" + u.id}>
                <img
                  src={
                    u.photos.small != null
                      ? u.photos.small
                      : "https://picsum.photos/200/300"
                  }
                  alt=""
                />
              </NavLink>
            </div>
          </span>
          <span>
            {u.followed ? (
              <button
                onClick={() => {
                  props.unfollow(u.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  props.follow(u.id);
                }}
              >
                Follow
              </button>
            )}
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              {/* <div>{u.location.country}</div> */}
              {/* <div>{u.location.city}</div> */}
              <div>World</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
