import React from "react";
import { useSelector } from "react-redux";
import { apiKey } from "./firebase";

const Permit = (props) => {
    const is_signin = useSelector(state => state.user.user);

    const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;

    const is_session = sessionStorage.getItem(_session_key) ? true : false;


    if (is_session && is_signin) {
        return (
            <React.Fragment>
                {props.children}
            </React.Fragment>
        );
    } else {
        return null;
    }
}

export default Permit;