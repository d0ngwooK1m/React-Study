import React from 'react';
import {useHistory, useParams} from "react-router-dom"
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {removeBucket} from "./redux/modules/bucket"

const Detail = () => {
    const history = useHistory();
    const params = useParams();
    const bucket_index = params.index
    const bucket_list = useSelector((state) => state.bucket.list);
    const dispatch = useDispatch();
    // console.log(bucket_list);
    // console.log(bucket_index);
    // console.log(bucket_list[bucket_index]);
    return (
        <>
            <h1 onClick={() => {
                history.push("/");
            }}>{bucket_list[bucket_index]}</h1>
            <button onClick={() => {
                dispatch(removeBucket(bucket_index));
                history.goBack();
            }}>삭제하기</button>
        </>
    );
};

export default Detail