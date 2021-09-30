import React from "react";
import {Grid, Input, Button, Text} from "../elements";

const SigninForm = (props) => {
    return (
        <React.Fragment>
            <Grid width="95vw" margin="auto">
                <Text bold size="35px">{props.pageTheme}</Text>
                <Grid margin="30px 0px">
                    <Input placeholder="아이디를 입력하세요">{props.idComment}</Input>
                </Grid>
                <Grid margin="30px 0px">
                    <Input placeholder="비밀번호를 입력하세요">{props.pwComment}</Input>
                </Grid>
                <Grid margin="30px 0px">
                    <Button>{props.pageTheme}</Button>
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