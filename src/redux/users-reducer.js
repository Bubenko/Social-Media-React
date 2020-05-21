const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      fullName: "Vladimir",
      status: "Boss",
      location: { city: "Minsk", country: "Belarus" },
      followed: false,
      profileUrl: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      fullName: "Viktor",
      status: "Dealer",
      location: { city: "Kiev", country: "Ukraine" },
      followed: true,
      profileUrl: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      fullName: "Stepan",
      status: "Viliger",
      location: { city: "Ternopil", country: "Ukraine" },
      followed: true,
      profileUrl: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      fullName: "Sofa",
      status: "Student",
      location: { city: "Moscow", country: "Russia" },
      followed: false,
      profileUrl: "https://picsum.photos/200/300",
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }

    default:
      return state;
  }
};

export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};

export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export default usersReducer;
