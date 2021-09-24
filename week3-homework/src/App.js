import './App.css';
import styled from "styled-components";
import {Route, Switch} from "react-router-dom";
import Start from "./Start"; 
import Quiz from "./Quiz";
import Score from "./Score";
import Rank from "./Rank";
import NotFound from "./NotFound";

import {withRouter} from "react-router"
import {connect} from "react-redux"

const mapStateTopProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  load: () => {

  },
});

function App() {
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

export default connect(mapStateTopProps, mapDispatchToProps)(withRouter(App));
