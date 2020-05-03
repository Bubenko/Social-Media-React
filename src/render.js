import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import state, { addPost, updateNewPostTest } from "./redux/state";

export let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateNewPostTest={updateNewPostTest}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
