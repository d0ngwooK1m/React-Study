import React from "react";
import {Grid, Image, Text} from "../elements";

import pepe from "../imageSrc/pepegood.jpg"

const Post = (props) => {
    return (
        <React.Fragment>
            <Grid>
                <Grid is_flex>
                    <Image shape="circle" src={props.src}/>
                    <Text bold>{props.user_info.user_name}</Text>
                    <Text>{props.insert_dt}</Text>
                </Grid>
                <Grid padding="16px">
                    <Text>{props.contents}</Text>
                </Grid>
                <Grid padding="16px">
                    <Image shape="rectangle" src={props.src}/>
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