import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  updateNewMessageBodyCreator,
  sendMessageBodyCreator,
} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

// const DialogsContainer = (props) => {
//   let state = props.store.getState().messagesPage;

//   let onSendMessageClick = () => {
//     props.store.dispatch(sendMessageBodyCreator());
//   };

//   let onNewMessageChange = (body) => {
//     props.store.dispatch(updateNewMessageBodyCreator(body));
//   };

//   return (
//     <Dialogs
//       messagesPage={state}
//       sendMessage={onSendMessageClick}
//       updateNewMessageBody={onNewMessageChange}
//     />
//   );
// };

let mapStateToProps = (state) => {
  return {
    messagesPage: state,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: () => {
      dispatch(sendMessageBodyCreator());
    },
    sendMessage: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
