import React from "react";
import Post from "../components/Post";
import CommentInput from "../components/CommentInput";
import CommentArea from "../components/CommentArea";

const PostDetail = () => {
    return (
        <React.Fragment>
            <Post />
            <CommentInput />
            <CommentArea />
        </React.Fragment>
    );
};

export default PostDetail;