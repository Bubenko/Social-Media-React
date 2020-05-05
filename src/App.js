import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Content from "./components/Content/Content";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav friendsData={props.state.sideNavigation.friendsData} />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                // dialogsData={props.state.messagesPage.dialogsData}
                // messagesData={props.state.messagesPage.messagesData}
                // dispatch={props.dispatch}
                store={props.store}
              />
            )}
          />
          <Route
            path="/content"
            render={() => (
              <Content
                data={props.state.profilePage.postData}
                dispatch={props.dispatch}
              />
            )}
          />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
