import styled, {keyframes} from "styled-components";

function App() {
  return (
    <div className="App">
      <Box></Box>
    </div>
  );
}

const boxAnimation = keyframes`
  0% {
    border-radius: 0%;
    top: 20px;
    left: 20px;
  }
  25% {
    top: 300px;
    left: 300px;
  }
  50% {
    border-radius: 25%;
    top: 700px;
    left: 700px;
  }
  75% {
    border-radius: 25%;
    top: 100px;
    left: 100px;
  }
  100% {
    border-radius: 50%;
    top: 300px;
    left: 300px;
  }
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background: green;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: 20px;
  animation: ${boxAnimation} 2s 1s infinite linear alternate
`;

export default App;
