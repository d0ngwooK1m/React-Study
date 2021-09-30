import React from "react";
import { Grid, Image, Button } from "../elements";

import pepe from "../imageSrc/pepegood.jpg"

const Header = (props) => {
    return (
        <React.Fragment>
            <Grid width="95vw" margin="auto" is_flex>
                <Grid>
                    <Image shape="logo" src={props.src}/>
                </Grid>

                <Grid width="100px">
                    <Button backgroundColor="#eee" color="black">{props.signupComment}</Button>
                </Grid>
                <Grid width="100px">
                    <Button backgroundColor="#eee" color="black">{props.signinComment}</Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

Header.defaultProps = {
    src: pepe,
    signupComment: "회원가입",
    signinComment: "로그인",
};

export default Header;