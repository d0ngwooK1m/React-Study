import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { firestore, storage } from "../../shared/firebase";
import "moment";

import pepe from "../../imageSrc/pepegood.jpg"
import moment from "moment";

import { actionCreators as imageActions } from "./image";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (post) => ({ post }));

const initialState = {
    list: [],
    edit_image: "",
}

const initialPost = {
    // id: 0,
    // user_info: {
    //     user_name: "Dongwoo",
    //     user_profile: pepe,
    // },
    image_url: pepe,
    contents: "페페네요!",
    comment_cnt: 10,
    insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
    // insert_dt: "2021-09-30 16:00:00",
}


const addPostFB = (contents = "",) => {
    return function (dispatch, getState, { history }) {
        const postDB = firestore.collection("post");
        const _user = getState().user.user;

        const user_info = {
            user_name: _user.user_name,
            user_id: _user.uid,
            user_profile: _user.user_profile,
        }

        const _post = {
            ...initialPost,
            contents: contents,
            insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
        };

        const _image = getState().image.preview;
        console.log(_image);
        console.log(typeof _image);

        const _upload = storage.ref(`images/${user_info.user_id}_${new Date().getTime()}`).putString(_image, "data_url");

        _upload.then(snapshot => {
            snapshot.ref.getDownloadURL().then((url) => {
                console.log(url);

                return url;
            }).then(url => {
                postDB
                    .add({ ...user_info, ..._post, image_url: url })
                    .then((doc) => {
                        let post = { user_info, ..._post, id: doc.id, image_url: url };
                        dispatch(addPost(post));
                        history.replace("/");

                        dispatch(imageActions.setPreview(null));
                    })
                    .catch((err) => {
                        window.alert("포스트 작성 실패");
                        console.log("포스트 작성 실패", err);
                    });
            }).catch((err) => {
                window.alert("이미지 업로드 실패");
                console.log("이미지 업로드 실패", err);
            })
        });
    }
};

const getPostFB = () => {
    return function (dispatch, getState, { history }) {
        const postDB = firestore.collection("post")

        postDB.get().then((docs) => {
            // console.log(docs.data());
            let post_list = [];
            docs.forEach((doc) => {

                let _post = doc.data();

                //['comment_cnt', 'contents', ...]
                let post = Object.keys(_post).reduce((acc, cur) => {
                    if (cur.indexOf("user_") !== -1) {
                        return { ...acc, user_info: { ...acc.user_info, [cur]: _post[cur] } };
                    }

                    return { ...acc, [cur]: _post[cur] }
                }, { id: doc.id, user_info: {} });


                post_list.push(post);
            });
            console.log(post_list);

            dispatch(setPost(post_list));
        });
    }
};

export default handleActions(
    {
        [SET_POST]: (state, action) => produce(state, (draft) => {
            draft.list = action.payload.post_list;
        }),

        [ADD_POST]: (state, action) => produce(state, (draft) => {
            draft.list.unshift(action.payload.post);
        }),
    }, initialState
);

const actionCreators = {
    setPost,
    addPost,
    getPostFB,
    addPostFB,

}

export { actionCreators };