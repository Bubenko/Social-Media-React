let initialState = {
  sideNavigation: {
    friendsData: [
      { id: 1, name: "Andrei", url: "https://picsum.photos/50/50" },
      { id: 2, name: "Vovan", url: "https://picsum.photos/50/50" },
      { id: 3, name: "Nazar", url: "https://picsum.photos/50/50" },
    ],
  },
};

const sidenavReducer = (state = initialState, action) => {
  return state;
};

export default sidenavReducer;
