import React from "react";
import {useHistory} from "react-router"

const NotFound = () => {
    const history = useHistory();
    return (
        <>
            <h1>잘못된 경로에요!</h1>
            <button onClick={() => {
                history.push("/")
            }}>돌아가기</button>
        </>
    );
};

export default NotFound