import React from "react";
import img from "./images/pepegood.jpg"
import styled from "styled-components";
import {useHistory} from "react-router"
import {useDispatch} from "react-redux"
import {addName} from "./redux/modules/name";

const Start = () => {
    const history = useHistory();
    const name_ref = React.useRef(null);
    const dispatch = useDispatch();

    return (
        <>
            <ProfileImg src={img}/>
            <h3>나는🐸에 대해 얼마나 알고 있을까?</h3>
            <p>내 이름을 입력하고 시작해보세요!</p>
            <input type="text" ref={name_ref}/>
            <button onClick={() => {
                // console.log(name_ref.current.value);
                dispatch(addName(name_ref.current.value));
                history.push("/quiz");
            }}>시작하기!</button>
        </>
    );
};

const ProfileImg = styled.img`
    margin-top: 20px;
`;

export default Start