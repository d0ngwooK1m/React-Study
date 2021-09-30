import React from "react";
import Header from "../components/Header";
import SigninForm from "../components/SigninForm";

const SigninPage = (props) => {
    return (
        <React.Fragment>
            <Header/>
            <SigninForm/>
        </React.Fragment>
    );
};

export default SigninPage;