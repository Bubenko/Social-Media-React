import React from "react";
import * as axios from "axios";

let Users = (props) => {
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((responce) => {
        props.setUsers(responce.data.items);
      });

    // props.setUsers([
    //   {
    //     id: 1,
    //     fullName: "Vladimir",
    //     status: "Boss",
    //     location: { city: "Minsk", country: "Belarus" },
    //     followed: false,
    //     profileUrl: "https://picsum.photos/200/300",
    //   },
    // ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img
                src={
                  u.photos.small != null
                    ? u.photos.small
                    : "https://picsum.photos/200/300"
                }
                alt=""
              />
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
