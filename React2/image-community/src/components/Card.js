import React from "react";
import { Grid, Image, Text } from "../elements";

import { history } from "../redux/configureStore";

const Card = (props) => {
    const { image_url, user_name, post_id } = props;

    return (
        <Grid padding="16px" is_flex bg="#FFFFFF" margin="8px 0px" _onClick={() => {
            history.push(`/postdetail/${post_id}`);
        }}>
            <Grid width="auto" margin="0px 8px 0px 0px">
                <Image shape="logo" src={image_url} />
            </Grid>
            <Grid>
                <Text>
                    <b>{user_name}</b>님이 게시글에 댓글을 남겼습니다.
                </Text>
            </Grid>
        </Grid>
    );
};

Card.defaultProps = {
    image_url: "",
    user_name: "",
    post_id: null,
}

export default Card;