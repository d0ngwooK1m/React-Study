import React from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";

const Progress = (props) => {
    const bucket_list = useSelector((state) => state.bucket.list);

    let count = 0;
    bucket_list.map((val, idx) => {
        if(val.completed) {
            return count++;
        }
    });
    console.log(bucket_list);
    console.log(count);
    return (
        <ProgressBar>
            <HighLight width={(count / bucket_list.length) * 100 + "%"}></HighLight>
            <Pointer></Pointer>
        </ProgressBar>
    );
};

const ProgressBar = styled.div`
    background: #eee;
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
`;

const HighLight = styled.div`
    background: orange;
    transition: 1s;
    width: ${(props) => props.width};
    height: 20px;
`;

const Pointer = styled.div`
    width: 37px;
    height: 37px;
    background: orange;
    border-radius: 50%;
    border: 3px solid black;
    margin: 0px -10px;
    flex-shrink: 0;
`;

export default Progress
