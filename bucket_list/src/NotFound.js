import React from "react";
import { useHistory } from "react-router-dom";

const NotFound = () => {
    const history = useHistory();
    return (
        <>
            <h1>주소가 올바르지 않다요!</h1>
            <button onClick={() => {
                history.push("/");
            }}>뒤로가기</button>
        </>
    );
};

export default NotFound;