import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"; 
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./BucketList";
import Detail from "./Detail";
import NotFound from "./NotFound"
import Spinner from "./Spinner";
import Progress from "./Progress";

import {createBucket, loadBucketFB, addBucketFB } from "./redux/modules/bucket"
import {db} from "./Firebase";
import {
    collection,
    doc,
    getDoc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc
} from "firebase/firestore"


function App() {

// const [list, setList] = React.useState(["영화관 가기", "매일 책읽기", "수영 배우기"]);
const text = React.useRef(null);
const dispatch = useDispatch();
const is_loaded = useSelector((state) => state.bucket.is_loaded);
console.log(is_loaded);

React.useEffect(async() => {
    dispatch(loadBucketFB());
}, [])

const addBucketList = () => {
// setList([...list, text.current.value]);
    // dispatch(createBucket({text: text.current.value, completed: false}));
    dispatch(addBucketFB({text: text.current.value, completed: false}));
}

return (
<div className="App">
<Container>
<Title>내 버킷리스트</Title>
<Progress />
<Line />
{/* 컴포넌트를 넣어줍니다. */}
{/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
<Switch>
    <Route path="/" exact>
        <BucketList component={BucketList}/>
    </Route>
    <Route path="/detail/:index" exact component={Detail}>
    </Route>
    <Route>
        <NotFound />
    </Route>
</Switch>
</Container>
{/* 인풋박스와 추가하기 버튼을 넣어줬어요. */}
<Input>
<input type="text" ref={text} />
<button onClick={addBucketList}>추가하기</button>
</Input>
{!is_loaded && <Spinner/>}
</div>
);
}

const Input = styled.div`
max-width: 350px;
min-height: 10vh;
background-color: #fff;
padding: 16px;
margin: 20px auto;
border-radius: 5px;
border: 1px solid #ddd;
display: flex;
flex-direction: column;
justify-content: center;
& input {
    border: 1px solid gray;
    margin-bottom: 10px;
}

& input:focus {
    outline:none;
    border: 2px solid orange;
    transition: 2s;
}

& button {
    padding: 5px 0;
    background: orange;
}
`;

const Container = styled.div`
max-width: 350px;
min-height: 60vh;
background-color: #fff;
padding: 16px;
margin: 20px auto;
border-radius: 5px;
border: 1px solid #ddd;
`;

const Title = styled.h1`
color: orange;
text-align: center;
`;

const Line = styled.hr`
margin: 16px 0px;
border: 1px dotted #ddd;
`;

export default App;
