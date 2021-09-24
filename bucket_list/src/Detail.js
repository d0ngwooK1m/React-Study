import React from 'react';
import {useHistory, useParams} from "react-router-dom"
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {updateBucketFB, deleteBucketFB} from "./redux/modules/bucket"

import Button from "@material-ui/core/Button";

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
            }}>{bucket_list[bucket_index]?bucket_list[bucket_index].text: ""}</h1>
            <Button variant="outlined" color="primary" onClick={() => {
                // dispatch(updateBucket(bucket_index));
                dispatch(updateBucketFB(bucket_list[bucket_index].id))
                history.goBack();
            }}>완료하기</Button>
            <Button variant="outlined" color="secondary" onClick={() => {
                // dispatch(removeBucket(bucket_index));
                dispatch(deleteBucketFB(bucket_list[bucket_index].id));
                history.goBack();
            }}>삭제하기</Button>
        </>
    );
};

export default Detail