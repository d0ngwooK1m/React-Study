import React, { useState } from "react";
import { Grid, Input, Button, Text } from "../elements";
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const SigninForm = (props) => {
    const dispatch = useDispatch();
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");


    const login = () => {
        if (id === "" || pw === "") {
            window.alert("공란이 없도록 해주세요!")
        }

        console.log("signinform login");
        dispatch(userActions.signinFB(id, pw));
    };

    return (
        <React.Fragment>
            <Grid width="95vw" margin="auto">
                <Text bold size="35px">{props.pageTheme}</Text>
                <Grid margin="30px 0px">
                    <Input placeholder="아이디를 입력하세요" value={id} _onChange={(e) => {
                        setId(e.target.value);
                    }}>{props.idComment}</Input>
                </Grid>
                <Grid margin="30px 0px">
                    <Input placeholder="비밀번호를 입력하세요" value={pw} type="password" _onChange={(e) => {
                        setPw(e.target.value);
                    }} >{props.pwComment}</Input>
                </Grid>
                <Grid margin="30px 0px">
                    <Button _onClick={() => {
                        login();
                    }} text="로그인"></Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

SigninForm.defaultProps = {
    pageTheme: "로그인",
    idComment: "아이디",
    pwComment: "비밀번호",
}

export default SigninForm;