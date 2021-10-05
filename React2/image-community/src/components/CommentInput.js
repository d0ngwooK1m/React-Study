import React from "react";
import { Grid, Button, Input } from "../elements";

import { actionCreators as commentActions } from "../redux/modules/comment";
import { useDispatch, useSelector } from "react-redux";

const CommentInput = (props) => {
    const dispatch = useDispatch();
    const [comment_text, setCommentText] = React.useState();

    const { post_id } = props;
    const onChange = (e) => {
        setCommentText(e.target.value);
    };

    const write = () => {
        // console.log(comment_text);
        dispatch(commentActions.addCommentFB(post_id, comment_text));
        setCommentText("");

    }
    return (
        <React.Fragment>
            <Grid is_flex>
                <Input width="90vw" _onChange={onChange}
                    placeholder="댓글을 입력해주세요"
                    value={comment_text}
                    onSubmit={write}
                    isSubmit
                ></Input>
                <Button width="10vw"
                    _onClick={write}
                    text="작성"

                ></Button>
            </Grid>
        </React.Fragment>
    );
};

export default CommentInput;