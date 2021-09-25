import './App.css';
import styled from "styled-components";
import {Route, Switch} from "react-router-dom";
import Start from "./Start"; 
import Quiz from "./Quiz";
import Score from "./Score";
import Rank from "./Rank";
import NotFound from "./NotFound";

import {withRouter} from "react-router"
import {connect, useDispatch} from "react-redux"
import {loadRankingsFB} from "./redux/modules/rank";
import React from 'react';

// const mapStateTopProps = (state) => ({
//   ...state,
// });

// const mapDispatchToProps = (dispatch) => ({
//   load: () => {

//   },
// });



function App() {
  const dispatch = useDispatch();

  React.useEffect(async () => {
    dispatch(loadRankingsFB());
  }, []);

  return (
    <div className="App">
      <Container>
        <Switch>
          <Route path="/" exact component={Start}>
          </Route>

          <Route path="/quiz" exact component={Quiz}>  
          </Route>

          <Route path="/score" exact component={Score}>  
          </Route>

          <Route path="/rank" exact component={Rank}>

          </Route>

          <Route component={NotFound}>
          
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

const Container = styled.div`
  border: 1px solid black;
  width: 350px;
  height: 60vh;
  margin: auto;
`;

// export default connect(mapStateTopProps, mapDispatchToProps)(withRouter(App));
export default App;