import React from "react";
import BucketList from './BucketList';
import "./style.css";
import styled from "styled-components";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["옷이랑 신발사기", "하루동안 아무것도 안하기", "자전거 타기"],
    }

    this.text = React.createRef();
    // this.state.list = React.createRef();
  }

  componentDidMount() {
  }

  addBucket = () => {
    // console.log(this.text.current.value);
    const new_item = this.text.current.value;
    this.setState({list: [...this.state.list, new_item]});
    //list를 새롭게 갱신한다.
  }

  render() {
    console.log(this.state.list)
    return (
      <div className="App">
        <Container>
          <div className="container">
            <h1>내 버킷리스트</h1>
            <hr className="line" />
            <BucketList list={this.state.list}/>
          </div>
        </Container>
        <SearchBackground>
          <SearchContainer>
            <input type="text" ref={this.text}/>
            <button onClick={this.addBucket}>추가하기</button>
          </SearchContainer>
        </SearchBackground>
      </div>
    );
  }
}
//왜 new 키워드를 안써도 되는거지? 원래 그런건감

const Container = styled.div`
  background-color: #eee;
  height: 90vh;
  width: 100vw;
  display: flex;

  .container {
    margin: auto;
    background-color: #fff;
    width: 50vw;
    max-width: 350px;
    height: 80vh;
    padding: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;

    h1 {
      color: slateblue;
      text-align: center;
    }

    hr {
      margin: 16px 0px;
    }

    .list-item {
      padding: 16px;
      margin: 8px;
      background-color: aliceblue;
    }
  }
`;
//div.App은 잘 안건드리는 듯하다... 조심하자!

const SearchBackground = styled.div`
  background-color: #eee;
  display: flex;
  justify-content: center;
  height: 10vh;
`;

const SearchContainer = styled.div`
  background-color: #fff;
  max-width: 350px;
  width: 50vw;
  
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;

`;

export default App;
