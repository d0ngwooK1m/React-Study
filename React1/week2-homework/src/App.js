import './App.css';
import React from 'react';
import styled from 'styled-components';
import Name from './Name.js';

const App = () => {
  const [name, setName] = React.useState("김동우")
  return (
    <div className="App">
      <Container>
        <Image></Image>
        <Content>
          나는 <Name name={name}/>에 대해서
          <br/>
          얼마나 알고 있을까?
        </Content>

        <Input>
          <InputComment type="text"/>
          <InputButton>시작하기</InputButton>
        </Input>
      </Container>
    </div>
  );
}

const Container = styled.div`
  border: 1px solid black;
  margin: auto;
  width: 350px;
  height: 500px;
`;

const Image = styled.div`
  margin: 20px auto;
  width: 230px;
  height: 230px;
  background-color: aqua;
`;

const Content = styled.div`
  font-size: 1.3rem;
`;

// const Point = styled.strong`
//   background-color: yellow;
//   padding: 2px;
//   margin: 5px 0;
//   border: 1px solid black;
//   border-radius: 5px;
// `;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
  margin: 20px auto;
`;

const InputComment = styled.input`
  margin-bottom: 10px;
  padding: 5px 0;
  border-radius: 7px;
  &:focus {
    outline: none;
  }
`;

const InputButton = styled.button`
  width: 180px;
  margin: auto;
  background-color: aliceblue;
  border-radius: 5px;
`;


export default App;
