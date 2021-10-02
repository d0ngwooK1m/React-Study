import React, { useState } from "react";
import { Grid, Button, Input, Text } from "../elements";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { emailCheck } from "../shared/common";

const SignupForm = (props) => {
    const dispatch = useDispatch();

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [pwCheck, setPwCheck] = useState("");
    const [user_name, setUserName] = useState("");

    const signup = () => {
        if (id === "" || pw === "" || user_name === "") {
            return;
        }

        if (pw !== pwCheck) {
            return;
        }

        if (!emailCheck(id)) {
            window.alert("양식을 맞춰주세요");
        }

        dispatch(userActions.signupFB(id, pw, user_name));
    };

    return (
        <React.Fragment>
            <Grid width="95vw" margin="auto">
                <Text bold size="35px">{props.pageTheme}</Text>
                <Grid margin="30px 0px">
                    <Input placeholder="아이디를 입력하세요" _onChange={(e) => {
                        setId(e.target.value)
                    }}>{props.idComment}</Input>
                </Grid>
                <Grid margin="30px 0px">
                    <Input placeholder="닉네임을 입력하세요" _onChange={(e) => {
                        setUserName(e.target.value);
                    }}>{props.nickNameComment}</Input>
                </Grid>
                <Grid margin="30px 0px">
                    <Input placeholder="비밀번호를 입력하세요" type="password" _onChange={(e) => {
                        setPw(e.target.value);
                    }}>{props.pwComment}</Input>
                </Grid>
                <Grid margin="30px 0px">
                    <Input placeholder="비밀번호를 다시 입력하세요" type="password" _onChange={(e) => {
                        setPwCheck(e.target.value);
                    }}>{props.pwCheckComment}</Input>
                </Grid>
                <Grid margin="30px 0px">
                    <Button _onClick={() => {
                        signup();
                    }} text="회원가입"></Button>
                </Grid>
            </Grid>

        </React.Fragment>
    );
};

SignupForm.defaultProps = {
    pageTheme: "회원가입",
    nickNameComment: "닉네임",
    idComment: "아이디",
    pwComment: "비밀번호",
}

export default SignupForm;