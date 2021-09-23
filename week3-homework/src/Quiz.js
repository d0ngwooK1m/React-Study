import React from "react";
import styled from "styled-components";
import img from "./images/smilepepe.jpg";

import {useHistory} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {addAnswer} from "./redux/modules/quiz";

const Quiz = () => {
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
            return;
        }
    }, [user_answer_list]);

    if (user_answer_list.length === quiz_list.length) {
        return null;
    }

    //useEffect와 if문 두개를 왜 깔았지?

    return (
        <>
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

const QuizImage = styled.img`
    margin-top: 20px;
`;

const RightBtn = styled.button`
    margin-right: 20px;
`;

const LeftBtn = styled.button`
    margin-left: 20px;
`;

export default Quiz