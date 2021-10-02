import { createAction, handleActions } from "redux-actions";
import produce from "immer";

import { firestore, storage } from "../../shared/firebase";

const UPLOADING = "UPLOADING";
const UPLOAD_IMAGE = "UPLOAD_IMAGE";
const SET_PREVIEW = "SET_PREVIEW";
const EDIT_POST = "EDIT_POST";

const uploading = createAction(UPLOADING, (uploading) => ({ uploading }));
const uploadImage = createAction(UPLOAD_IMAGE, (image_url) => ({ image_url }));
const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }));
const editPost = createAction(EDIT_POST, (post_info) => ({ post_info }));

const initialState = {
    image_url: "",
    uploading: false,
    preview: null,
    edit_post: {},
}

const uploadImageFB = (image) => {
    return function (dispatch, getState, { history }) {
        dispatch(uploading(true));

        const _upload = storage.ref(`images/${image.name}`).put(image);
        console.log("ref");

        _upload.then((snapshot) => {
            console.log(snapshot);
            dispatch(uploading(false));

            snapshot.ref.getDownloadURL().then((url) => {
                dispatch(uploadImage(url));
                console.log(url);
            });
        });
    }
};

const getEditPostFB = (post_id) => {
    return function (dispatch, getState, { history }) {
        const postDB = firestore.collection("post").doc(post_id)
        postDB.get().then((doc) => {
            const image_url = doc.data().image_url;
            const contents = doc.data().contents;
            console.log(doc.data());

            dispatch(editPost({
                image_url: image_url,
                contents: contents,
            }));
        });
    }
};

export default handleActions({
    [UPLOAD_IMAGE]: (state, action) => produce(state, (draft) => {
        console.log(action.payload.image_url)
        draft.image_url = action.payload.image_url;
        draft.uploading = false;
    }),
    [UPLOADING]: (state, action) => produce(state, (draft) => {
        draft.uploading = action.payload.uploading;
    }),
    [SET_PREVIEW]: (state, action) => produce(state, (draft) => {
        draft.preview = action.payload.preview;
    }),
    [EDIT_POST]: (state, action) => produce(state, (draft) => {
        draft.edit_post = action.payload.post_info;
    })
}, initialState);

const actionCreators = {
    uploadImage,
    uploadImageFB,
    setPreview,
    getEditPostFB,
}

export { actionCreators };