import React from "react";
import {useSelector} from "react-redux";
import {useHistory} from "react-router";

const Score = () => {
    // const dispatch = useDispatch();
    const history = useHistory();
    const quiz_list = useSelector((state) => state.quiz.quiz_list);
    const user_answer_list = useSelector((state) => state.quiz.user_answer_list);
    let score = 0;
    const my_name = useSelector((state) => state.name.name);

    user_answer_list.filter((val, idx) => {
        if (quiz_list[idx].answer === user_answer_list[idx]) {
            return score+=20;
        }
    })
    return (
        <>
            <h2>{my_name}님은 {score}점을 맞았어요!</h2>
            <button onClick={() => {
                history.push("/");
            }}
            >다시하기</button>
        </>
    );
};

export default Score