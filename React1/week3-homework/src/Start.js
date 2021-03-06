import React from "react";
import img from "./images/pepegood.jpg"
import styled from "styled-components";
import {useHistory} from "react-router"
import {useDispatch} from "react-redux"
import {addName, addNameFB} from "./redux/modules/name";

const Start = () => {
    const history = useHistory();
    const name_ref = React.useRef(null);
    const dispatch = useDispatch();

    return (
        <>
            <ProfileImg src={img}/>
            <h3>λλπΈμ λν΄ μΌλ§λ μκ³  μμκΉ?</h3>
            <p>λ΄ μ΄λ¦μ μλ ₯νκ³  μμν΄λ³΄μΈμ!</p>
            <input type="text" ref={name_ref}/>
            <button onClick={() => {
                // console.log(name_ref.current.value);
                dispatch(addNameFB(name_ref.current.value));
                history.push("/quiz");
            }}>μμνκΈ°!</button>
        </>
    );
};

const ProfileImg = styled.img`
    margin-top: 20px;
`;

export default Start