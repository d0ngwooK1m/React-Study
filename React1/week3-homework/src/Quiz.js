import React from "react";
import styled from "styled-components";
import img from "./images/smilepepe.jpg";

import {useHistory} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {addAnswer} from "./redux/modules/quiz";

const Quiz = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const quiz_list = useSelector((state) => state.quiz.quiz_list);
    const user_answer_list = useSelector((state) => state.quiz.user_answer_list);
    //현재변수 - 모듈 파일명(의 initialState로 접근) - 해당 변수

    const setAnswer = (user_answer) => {
        dispatch(addAnswer(user_answer))
    };

    React.useEffect(() => {
        if (user_answer_list.length === quiz_list.length) {
            history.push("/score");
        }
    }, [user_answer_list]);

    //퀴즈가 5/5가 되면 페이지가 바로 넘어가는 문제 발생 history에 setTimeout을 걸어봤는데 넘어가는 시간이 늦어질뿐 프로그래스 바는 변화가 없다.

    if (user_answer_list.length === quiz_list.length) {
        // const width = "100%"
        return null;
    }

    //여기서 발생하는 문제 같은데 

    //useEffect와 if문 두개를 왜 깔았지?
    // console.log(user_answer_list.length, quiz_list.length)

    return (
        <>
            <Progress>
                <HighLight width={(user_answer_list.length / quiz_list.length) * 100 + "%"}></HighLight>
                <Frog>🐸</Frog>
            </Progress>
            <QuizImage src={img}/>
            <h1>{user_answer_list.length +1}번 문제</h1>
            <p>
                {quiz_list[user_answer_list.length].quiz}
            </p>
            <RightBtn onClick={() => {
                setAnswer(true);
            }}>⭕</RightBtn>
            <LeftBtn onClick={() => {
                setAnswer(false);
            }}>❌</LeftBtn>
        </>
        //quiz index로 보내는 것이 아니라 정답을 채우면 자동으로 바뀌게 설정
    );
};

const Progress = styled.div`
    height: 30px;
    background-color: #eee;
    display: flex;
    align-items: center;
    margin-top: 5px;
`;

const HighLight = styled.div`
    height: 30px;
    width: ${(props) => props.width};
    background: yellowgreen;
    transition: 1s;    
`;

const Frog = styled.div`
    font-size: 1.5rem;
    background-color: yellowgreen;
    border: 1px solid green;
`;

const QuizImage = styled.img`
    margin-top: 20px;
    width: 150px;
    height: 150px;
`;

const RightBtn = styled.button`
    margin-right: 20px;
`;

const LeftBtn = styled.button`
    margin-left: 20px;
`;

export default Quiz