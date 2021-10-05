import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { firestore, storage } from "../../shared/firebase";
import "moment";

import pepe from "../../imageSrc/pepegood.jpg"
import moment from "moment";

import { actionCreators as imageActions } from "./image";
import { useRouteMatch } from "react-router";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const LOADING = "LOADING";

const setPost = createAction(SET_POST, (post_list, paging) => ({ post_list, paging }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (post_id, post) => ({ post_id, post }));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

const initialState = {
    list: [],
    paging: { start: null, next: null, size: 3 },
    is_loading: false,
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
        // console.log(_image);
        // console.log(typeof _image);

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

const getPostFB = (start = null, size = 3) => {
    return function (dispatch, getState, { history }) {
        let _paging = getState().post.paging;

        if (_paging.start && !_paging.next) {
            return;
        }

        dispatch(loading(true));

        const postDB = firestore.collection("post");

        let query = postDB.orderBy("insert_dt", "desc");

        if (start) {
            query = query.startAt(start);
        }

        query.limit(size + 1).get().then(docs => {
            // console.log(docs.data());
            let post_list = [];
            let paging = {
                start: docs.docs[0],
                next: docs.docs.length === size + 1 ? docs.docs[docs.docs.length - 1] : null,
                size: size,
            }
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
            post_list.pop();
            dispatch(setPost(post_list, paging));
        });

        return;
    }
};

const getOnePostFB = (id) => {
    return function (dispatch, getState, { history }) {
        const postDB = firestore.collection("post");
        postDB.doc(id).get().then(doc => {
            console.log(doc);
            console.log(doc.data());
            let _post = doc.data();

            let post = Object.keys(_post).reduce((acc, cur) => {
                if (cur.indexOf("user_") !== -1) {
                    return { ...acc, user_info: { ...acc.user_info, [cur]: _post[cur] } };
                }

                return { ...acc, [cur]: _post[cur] }
            }, { id: doc.id, user_info: {} });

            dispatch(setPost([post]));
        });
    }
}

const editPostFB = (post_id = null, post = {}) => {
    return function (dispatch, getState, { history }) {
        const postDB = firestore.collection("post")
        const _user = getState().user.user;

        const _image = getState().image.preview;

        const _post_idx = getState().post.list.findIndex(p => p.id === post_id);
        const _post = getState().post.list[_post_idx];

        console.log(`?!?!${_image} ${_post.image_url} ${_post.contents}`);

        if (_image === null) {
            postDB.doc(post_id).update({ ...post }).then(doc => {
                dispatch(editPost(post_id, { ...post }));
                history.replace("/");
            });
            return;
        }
        else {
            const _upload = storage.ref(`images/${_user.uid}_${new Date().getTime()}`).putString(_image, "data_url");

            _upload.then(snapshot => {
                snapshot.ref.getDownloadURL().then((url) => {
                    console.log(url);

                    return url;
                }).then(url => {
                    postDB.doc(post_id).update({ ...post, image_url: url, }).then(doc => {
                        dispatch(editPost(post_id, { ...post, image_url: url }));
                        history.replace("/");
                    });
                }).catch((err) => {
                    window.alert("이미지 업로드 실패");
                    console.log("이미지 업로드 실패", err);
                })
            });

        };
    }
}


export default handleActions(
    {
        [SET_POST]: (state, action) => produce(state, (draft) => {
            draft.list.push(...action.payload.post_list);

            draft.list = draft.list.reduce((acc, cur) => {
                if (acc.findIndex(a => a.id === cur.id) === -1) {
                    return [...acc, cur];
                } else {
                    acc[acc.findIndex(a => a.id === cur.id)] = cur;
                    return acc;
                }
            }, []);

            if (action.payload.paging) {
                draft.paging = action.payload.paging;
            }
            draft.is_loading = false;
        }),

        [ADD_POST]: (state, action) => produce(state, (draft) => {
            draft.list.unshift(action.payload.post);
        }),
        [EDIT_POST]: (state, action) => produce(state, (draft) => {
            let idx = draft.list.findIndex((p) => p.id === action.payload.post_id)

            draft.list[idx] = { ...draft.list[idx], ...action.payload.post }
        }),
        [LOADING]: (state, action) => produce(state, (draft) => {
            draft.is_loading = action.payload.is_loading;
        })
    }, initialState
);

const actionCreators = {
    setPost,
    addPost,
    editPost,
    getPostFB,
    getOnePostFB,
    addPostFB,
    editPostFB,
}

export { actionCreators };