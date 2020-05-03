import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} url={d.url} />
  ));

  let messagesElements = props.messagesData.map((m) => (
    <Message message={m.message} />
  ));

  let messageRef = React.createRef();

  let addMessage = () => {
    let text = messageRef.current.value;
    alert(text);
  };

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogsElements}</div>
        <div className={s.messages}>{messagesElements}</div>
      </div>
      <div className="addPost">
        <div>
          <textarea ref={messageRef}></textarea>
        </div>
        <div>
          <button onClick={addMessage}>Add Post</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
