import React, { useRef } from "react";

import { Button } from "../elements";
import { storage } from "./firebase";
import { actionCreators as imageActions } from "../redux/modules/image";
import { useDispatch, useSelector } from "react-redux";

const Upload = (props) => {
    const fileInput = useRef();
    const is_uploading = useSelector((state) => state.image.uploading);
    const dispatch = useDispatch();

    const selectFile = (e) => {
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.files[0]);

        console.log(fileInput.current.files[0]);
        const reader = new FileReader();
        const file = fileInput.current.files[0];
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            console.log(reader.result);
            dispatch(imageActions.setPreview(reader.result));
        }
    }

    const uploadFB = () => {
        let image = fileInput.current.files[0];
        dispatch(imageActions.uploadImageFB(image));


        // const _upload = storage.ref(`images/${image.name}`).put(image);
        // console.log("ref");

        // _upload.then((snapshot) => {
        //     console.log(snapshot);

        //     snapshot.ref.getDownloadURL().then((url) => {
        //         console.log(url);
        //     });
        // });
    }

    return (
        <React.Fragment>
            <input type="file" onChange={selectFile} ref={fileInput} disabled={is_uploading} />
            <Button text="업로드 하기" width="15vw" _onClick={uploadFB} ></Button>
        </React.Fragment>
    );
};

export default Upload;