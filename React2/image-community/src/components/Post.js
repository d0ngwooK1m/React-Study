import React from "react";
import { Grid, Image, Text, Button } from "../elements";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

import pepe from "../imageSrc/pepegood.jpg"

const Post = (props) => {
    const history = useHistory();
    const user_now = useSelector((state) => state.user.user);
    // const post_id = useSelector((state) => state.user.id);
    console.log(props.id);
    // console.log(user_now.uid);
    // console.log(props.user_info.user_id);

    return (
        <React.Fragment>
            <Grid>
                <Grid is_flex>
                    <Image shape="circle" src={props.src} />
                    <Text bold>{props.user_info.user_name}</Text>
                    <Text>{props.insert_dt}</Text>
                    {user_now !== null && user_now.uid === props.user_info.user_id ?
                        <Button width="10vw" text="수정" _onClick={() => {
                            history.push(`/write/${props.id}`)
                        }}></Button> :
                        null}
                </Grid>
                <Grid padding="16px">
                    <Text>{props.contents}</Text>
                </Grid>
                <Grid padding="16px">
                    <Image shape="rectangle" src={props.image_url} />
                </Grid>
                <Grid padding="16px">
                    <Text bold>댓글{props.comment_cnt}개</Text>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

Post.defaultProps = {
    user_info: {
        user_name: "Dongwoo",
        user_profile: pepe,
    },
    image_url: pepe,
    contents: "페페네요!",
    comment_cnt: 10,
    insert_dt: "2021-09-30 16:00:00",
};

export default Post;