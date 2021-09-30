import React from "react";
import { Grid, Button, Input, Text } from "../elements";

const SignupForm = (props) => {

    return (
        <React.Fragment>
            <Grid width="95vw" margin="auto">
                <Text bold size="35px">{props.pageTheme}</Text>
                <Grid margin="30px 0px">
                    <Input placeholder="아이디를 입력하세요">{props.idComment}</Input>
                </Grid>
                <Grid margin="30px 0px">
                    <Input placeholder="닉네임을 입력하세요">{props.nickNameComment}</Input>
                </Grid>
                <Grid margin="30px 0px">
                    <Input placeholder="비밀번호를 입력하세요" _onChange={() => console.log("pw")}>{props.pwComment}</Input>
                </Grid>
                <Grid margin="30px 0px">
                    <Input placeholder="비밀번호를 다시 입력하세요" _onChange={() => console.log("pwCheck")}>{props.pwCheckComment}</Input>
                </Grid>
                <Grid margin="30px 0px">
                    <Button _onClick={() => {console.log("submit")}}>{props.pageTheme}</Button>
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