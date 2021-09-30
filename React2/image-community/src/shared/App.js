import React from "react";
import "./App.css";

import {BrowserRouter, Route} from "react-router-dom";
import PostList from "../pages/PostList";
import SigninPage from "../pages/SigninPage";
import SignupPage from "../pages/SignupPage";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/" exact component={PostList}></Route>
        <Route path="/signin" exact component={SigninPage}></Route>
        <Route path="/signup" exact component={SignupPage}></Route>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
