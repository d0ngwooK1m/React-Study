import React, { useState, useEffect } from "react";
import { Grid, Image, Button } from "../elements";
import Permit from "../shared/Permit";
import { getCookie, deleteCookie } from "../shared/Cookie";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { history } from "../redux/configureStore";

import pepe from "../imageSrc/pepegood.jpg"
import { apiKey } from "../shared/firebase";

import NotiBadge from "./NotiBadge";

const Header = (props) => {
    const dispatch = useDispatch();
    const is_signin = useSelector((state) => state.user.is_signin);

    // const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;

    // const is_session = sessionStorage.getItem(_session_key) ? true : false;

    return (
        <React.Fragment>
            {
                is_signin ?
                    <Permit>
                        <Grid width="95vw" margin="auto" is_flex>
                            <Grid>
                                <Image shape="logo" src={props.src} />
                            </Grid>

                            <Grid width="100px">
                                <Button backgroundColor="#eee" color="black" text="내 정보"></Button>
                            </Grid>
                            <Grid width="50px">
                                <NotiBadge _onClick={() => {
                                    history.push("/noti");
                                }} />
                            </Grid>

                            <Grid width="100px">
                                <Button backgroundColor="#eee" color="black" text="로그아웃" _onClick={() => {
                                    dispatch(userActions.signoutFB());
                                }}></Button>
                            </Grid>
                        </Grid>
                    </Permit> :
                    <Grid width="95vw" margin="auto" is_flex>
                        <Grid>
                            <Image shape="logo" src={props.src} />
                        </Grid>

                        <Grid width="100px">
                            <Button backgroundColor="#eee" color="black" text="회원가입" _onClick={() => {
                                history.push("/signup");
                            }}></Button>
                        </Grid>
                        <Grid width="100px">
                            <Button backgroundColor="#eee" color="black" text="로그인" _onClick={() => {
                                history.push("/signin");
                            }}></Button>
                        </Grid>
                    </Grid>
            }

        </React.Fragment>
    );

};

Header.defaultProps = {
    src: pepe,
    signupComment: "회원가입",
    signinComment: "로그인",
};

export default Header;