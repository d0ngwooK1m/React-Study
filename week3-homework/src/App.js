import './App.css';
import styled from "styled-components";
import {Route, Switch} from "react-router-dom";
import Start from "./Start"; 
import Quiz from "./Quiz";
import Score from "./Score";
import NotFound from "./NotFound";

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

export default App;
