import React from "react";
import {useHistory} from "react-router";
import styled from "styled-components";
import img from "./images/pepewine.png";
import { useDispatch, useSelector } from "react-redux";
import { updateRank } from "./redux/modules/rank";
import { clearAnswer } from "./redux/modules/quiz";
import {db} from "./firebase";
import {collection, addDoc} from "@firebase/firestore";

const Score = () => {
    // const dispatch = useDispatch();
    const history = useHistory();
    const my_name = useSelector((state) => state.name.name);
    const comment = React.useRef(null);
    //점수 계산
    const quiz_list = useSelector((state) => state.quiz.quiz_list);
    const user_answer_list = useSelector((state) => state.quiz.user_answer_list);
    let score = 0;
    user_answer_list.filter((val, idx) => {
        // if (quiz_list[idx].answer === user_answer_list[idx]) {
        //     return score+=20;
        // }
        quiz_list[idx].answer === user_answer_list[idx] ? score+=20 : score+=0
    })

    // const user_rank_list = useSelector((state) => state.rank.rank_list);
    // console.log(score);
    // let rank = 0;
    // user_rank_list.filter((val, idx) => {
    //     console.log(typeof score);
    //     (user_rank_list[idx].score >= score) ?  rank++ : console.log();
        
    // });
    // rank++;

    const dispatch = useDispatch();
    const addRank = async () => {
        // console.log(rank, my_name[0], score, comment.current.value);
        dispatch(updateRank({ name: my_name[0], score: score, comment: comment.current.value}))

        const docRef = await addDoc(collection(db, "ranking"), {
            name: my_name[0],
            score: score,
            comment: comment.current.value
        });
        history.push("/rank")
    }

    


    return (
        <>
            <h2>{my_name}님은 {score}점을 맞았어요!</h2>
            <Image src={img}/>
            <Container>
                <Emoji>
                    <div>소감을 이모지로 남겨보세요!</div>
                    <select ref={comment}>
                        <option>😎</option>
                        <option>😪</option>
                        <option>😜</option>
                    </select>
                </Emoji>
                <button onClick={addRank}>랭킹 올리기</button>
                <button onClick={() => {
                dispatch(clearAnswer());
                history.push("/");
            }}
            >다시하기</button>
            </Container>
        </>
    );
};

const Image = styled.img`
    width: 200px;
    height: 200px;
    margin: auto;
`;

const Emoji = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 5px 0px;
`;

const Container = styled.div`
    width: 300px;
    height: 200px;
    margin: auto;
    & input {
        width: 97%;
    }
    & button {
        width: 100%;
    }
`;

export default Score