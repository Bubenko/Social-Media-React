const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialReducer = {
  messagesPage: {
    messagesData: [
      {
        id: 1,
        message: "Hello World!",
      },
      {
        id: 2,
        message: "How are you?",
      },
      {
        id: 3,
        message: "This is message",
      },
      {
        id: 4,
        message: "Props Route Test",
      },
    ],
    dialogsData: [
      {
        id: 1,
        name: "Dima",
        url: "https://picsum.photos/50/50",
      },
      {
        id: 2,
        name: "Andrew",
        url: "https://picsum.photos/50/50",
      },
      {
        id: 3,
        name: "Igor",
        url: "https://picsum.photos/50/50",
      },
      {
        id: 4,
        name: "Viktor",
        url: "https://picsum.photos/50/50",
      },
      {
        id: 5,
        name: "Saha",
        url: "https://picsum.photos/50/50",
      },
    ],
    newMessageBody: "",
  },
};

const messagesReducer = (state = initialReducer, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      return {
        ...state,
        newMessageBody: action.body,
      };
      // stateCopy.newMessageBody = action.body;
      // return stateCopy;
    }
    case SEND_MESSAGE: {
      let body = state.newMessageBody;
      let stateCopy = {
        ...state,
        newMessageBody: "",
        // messagesPage: {
        //   messagesData: [
        //     ...state.messagesPage.messagesData,
        //     { id: 6, message: body },
        //   ],
        // },
      };
      // stateCopy.newMessageBody = "";
      stateCopy.messagesPage.messagesData.push({ id: 6, message: body });
      return stateCopy;
    }
    default:
      return state;
  }
};

export const sendMessageBodyCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
};

export default messagesReducer;
