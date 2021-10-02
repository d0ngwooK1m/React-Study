import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";

import { auth } from "../../shared/firebase";
import firebase from "firebase/app";


// actions
// const SIGN_IN = "SIGN_IN";
const SIGN_OUT = "SIGN_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER"

// action creators
// const signIn = createAction(SIGN_IN, (user) => ({user}));
const signOut = createAction(SIGN_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

// initialState
const initialState = {
    user: null,
    uid: "guest",
    is_signin: false,
}

const user_initial = {
    user_name: "dongwoo",
}

// middleware actions
const signinFB = (id, pw) => {
    return function (dispatch, getState, { history }) {
        auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then((res) => {
            auth
                .signInWithEmailAndPassword(id, pw)
                .then((user) => {
                    // Signed in

                    dispatch(setUser({
                        user_name: user.user.displayName,
                        id: id,
                        user_profile: "",
                        uid: user.user.uid,
                    }));

                    history.push("/");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    console.log(errorCode, errorMessage);
                });
        });



    }
}


const signupFB = (id, pw, user_name) => {
    return function (dispatch, getState, { history }) {
        auth
            .createUserWithEmailAndPassword(id, pw)
            .then((user) => {


                // Signed in
                console.log(user);

                auth.currentUser.updateProfile({
                    displayName: user_name,
                }).then(() => {
                    dispatch(setUser({
                        user_name: user_name,
                        id: id, user_profile: "",
                        uid: user.user.uid,
                    }));
                    history.push("/");
                }).catch((error) => {
                    console.log(error);
                });
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });
    }
}

const signinCheckFB = () => {
    return function (dispatch, getState, { history }) {
        auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(setUser({
                    user_name: user.displayName,
                    user_profile: "",
                    id: user.email,
                    uid: user.uid,
                }));
            } else {
                // dispatch(logOut());
            }
        });
    }
}

const signoutFB = () => {
    return function (dispatch, getState, { history }) {
        auth.signOut().then(() => {
            dispatch(signOut());
            history.replace("/");
        });
    }
}

// handle actions(reducer)
//immer는 불변성 유지를 위해 사용 produce 이용해 원본 값 복사해서 사용
export default handleActions({
    [SET_USER]: (state, action) => produce(state, (draft) => {
        setCookie("is_signin", "success", 3);
        draft.user = action.payload.user;
        draft.is_signin = true;
    }),
    [SIGN_OUT]: (state, action) => produce(state, (draft) => {
        deleteCookie("is_signin");
        draft.user = null;
        draft.is_signin = false;
    }),
    [GET_USER]: (state, action) => produce(state, (draft) => { }),
},
    initialState
);

// action creator export
const actionCreators = {
    setUser,
    signOut,
    getUser,
    signupFB,
    signinFB,
    signinCheckFB,
    signoutFB,
};

export { actionCreators };