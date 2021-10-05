import React from "react";
import Post from "../components/Post";
import CommentInput from "../components/CommentInput";
import CommentArea from "../components/CommentArea";

import Permit from "../shared/Permit";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";


const PostDetail = (props) => {
    const dispatch = useDispatch();
    const id = props.match.params.post_id;
    // console.log(`??!!${id}`);

    const user_info = useSelector((state) => state.user.user);

    const post_list = useSelector((state) => state.post.list);

    const post_idx = post_list.findIndex((p) => p.id === id);
    // console.log(`??!!${post_list[0].id}`);

    const post = post_list[post_idx];
    // console.log(post);

    React.useEffect(() => {

        if (post) {
            return;
        }

        dispatch(postActions.getOnePostFB(id))

    }, []);



    return (
        <React.Fragment>
            {post && <Post {...post} is_me={post.user_info.user_id === user_info?.uid} />}
            <Permit>
                <CommentInput post_id={id} />
            </Permit>
            <CommentArea post_id={id} />
        </React.Fragment>
    );
};

export default PostDetail;