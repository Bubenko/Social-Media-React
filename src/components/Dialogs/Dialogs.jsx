import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  updateNewMessageBodyCreator,
  sendMessageBodyCreator,
} from "../../redux/messages-reducer";

const Dialogs = (props) => {
  let state = props.messagesPage;

  let dialogsElements = state.messagesPage.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} url={d.url} />
  ));

  let messagesElements = state.messagesPage.messagesData.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageBody = state.newMessageBody;

  let messageRef = React.createRef();

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
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
                value={newMessageBody}
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
