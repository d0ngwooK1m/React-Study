import React, { useState, useEffect } from "react";
import Post from "../components/Post";
import { Grid, Text, Input, Button, Image } from "../elements";
import Upload from "../shared/Upload";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as imageActions } from "../redux/modules/image";

const PostAdd = (props) => {
    useEffect(() => {
        if (post_id !== undefined) {
            dispatch(imageActions.getEditPostFB(post_id));
        }


    }, []);

    const dispatch = useDispatch();
    const is_signin = useSelector((state) => state.user.is_signin);
    const preview = useSelector((state) => state.image.preview);
    const edit_image = useSelector((state) => state.image.edit_post.image_url);
    const edit_content = useSelector((state) => state.image.edit_post.contents);

    const post_id = props.match.params.post_id;



    const { history } = props;

    const [contents, setContents] = useState("");

    const changeContents = (e) => {
        setContents(e.target.value);
    }

    const addPost = () => {
        dispatch(postActions.addPostFB(contents));
        history.replace("/");
    }

    const editPost = () => {
        let fixed_content;

        if (contents === "") {
            fixed_content = edit_content;
        } else {
            fixed_content = contents;
        }


        dispatch(postActions.editPostFB(post_id, { contents: fixed_content, }));

        history.replace("/");
    }



    if (!is_signin) {
        return (
            <Grid margin="100px 0px" padding="16px" center>
                <Text size="32px" bold>잠깐!</Text>
                <Text size="16px">로그인 후에 글을 쓸 수 있어요!</Text>
                <Button _onClick={() => {
                    history.replace("/");
                }} text="로그인 하러가기"></Button>
            </Grid>
        );
    }

    if (post_id !== undefined) {
        return (
            <React.Fragment>
                <Grid>
                    <Text bold size="32px">게시글 작성</Text>
                    <Upload></Upload>
                    <Image shape="rectangle" src={preview ? preview : edit_image} />
                </Grid>
                {/* <Post /> */}
                <Grid>
                    <Text>게시글 내용</Text>
                    <Input type="textarea" width="100vw" _onChange={changeContents} placeholder={edit_content}></Input>
                </Grid>
                <Grid>
                    <Button _onClick={editPost} text="게시글 수정"></Button>
                </Grid>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <Grid>
                {/* <Text bold="bold" size="30px">미리보기</Text>
                <Input type="file"></Input> */}
                <Text bold size="32px">게시글 작성</Text>
                <Upload></Upload>
                <Image shape="rectangle" src={preview ? preview : "http://via.placeholder.com/400x300"} />
            </Grid>
            {/* <Post /> */}
            <Grid>
                <Text>게시글 내용</Text>
                <Input type="textarea" width="100vw" _onChange={changeContents} placeholder="게시글 입력"></Input>
            </Grid>
            <Grid>
                <Button _onClick={addPost} text="게시글 작성"></Button>
            </Grid>
        </React.Fragment>
    );
};

export default PostAdd;