import React, { useEffect } from "react";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import Header from "../components/Header";
import PostList from "../pages/PostList";
import SigninPage from "../pages/SigninPage";
import SignupPage from "../pages/SignupPage";
import PostDetail from "../pages/PostDetail";
import Search from "./Search";

import PostAdd from "../pages/PostAdd";
import { Grid, Button } from "../elements";
import Permit from "./Permit";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { apiKey } from "./firebase";

function App() {
  const dispatch = useDispatch();

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  useEffect(() => {
    if (is_session) {
      dispatch(userActions.signinCheckFB());
    }
  }, [])


  return (
    <React.Fragment>
      <Grid>
        <Header></Header>
        <ConnectedRouter history={history}>
          <Route path="/" exact component={PostList}></Route>
          <Route path="/signin" exact component={SigninPage}></Route>
          <Route path="/signup" exact component={SignupPage}></Route>
          <Route path="/postdetail" exact component={PostDetail}></Route>
          <Route path="/postadd" exact component={PostAdd}></Route>
          <Route path="/write/:post_id" exact component={PostAdd}></Route>
          <Route path="/search" exact component={Search}></Route>
        </ConnectedRouter>
      </Grid>
      <Permit>
        <Button is_float text="+" _onClick={() => {
          history.push("/postadd");
        }}></Button>
      </Permit>
    </React.Fragment >
  );
}

export default App;
