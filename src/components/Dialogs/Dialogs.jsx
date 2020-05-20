import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  updateNewMessageBodyCreator,
  sendMessageBodyCreator,
} from "../../redux/messages-reducer";

const Dialogs = (props) => {
  let state = props.messagesPage.messagesPage;

  let dialogsElements = state.dialogsData.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} url={d.url} />
  ));

  let messagesElements = state.messagesData.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  // ----- NOT WORKING ----
  // let newMessageBody = props.updateNewMessageBody;
  // debugger;

  let messageRef = React.createRef();

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = () => {
    // let body = e.target.value;
    let body = messageRef.current.value;
    props.updateNewMessageBody(body);
  };
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogsElements}</div>
        <div className={s.messages}>
          <div>{messagesElements}</div>
          <div className="addPost">
            <div>
              <textarea
                value={props.messagesPage.newMessageBody}
                onChange={onNewMessageChange}
                placeholder="Add new message"
                ref={messageRef}
              ></textarea>
            </div>
            <div>
              <button onClick={onSendMessageClick}>Add Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
