import React, {useRef} from "react";
import styled from "styled-components";
import { useSelector} from "react-redux";
import {useHistory} from "react-router";


const Rank = () => {
    const history = useHistory();
    const Id = useRef(0);
    const my_rank = useSelector((state) => state.rank.rank_list);
    console.log(my_rank);
    const sorted_rank = my_rank.sort((a, b) => {
        return b.score - a.score;
        
    })
    
    return (
        <>
            <h1>랭킹 페이지지렁</h1>
            <TopContainer>
                    {sorted_rank.map((list, index) => {
                        console.log(list);
                        return (
                            <Container key={index}  ref={Id}>
                                <Content >
                                    {index + 1}
                                </Content>
                                <Content >
                                    {list.name}
                                </Content>
                                <Content >
                                    {list.score}
                                </Content>
                                <Content >
                                    {list.comment}
                                </Content>
                            </Container>
                        );
                    })}
                </TopContainer>
                <Return onClick={() => {
                    history.push("/");
                }}>돌아가기</Return>
        </>
    );
};

const TopContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    height: 300px;
    overflow-x: hidden;
    overflow-y: scroll;
`;

const Container = styled.div`
    display: flex;
    flex-shrink: 0;
    justify-content: space-evenly;
    border: 1px solid green;
    width: 250px;
    height: 50px;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: yellowgreen;
`;

const Content = styled.div`
    padding-top: 12px;
    font-weight: bold;
`;

const Return = styled.button`
    margin-top: 10px;
`;



export default Rank