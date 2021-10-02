import React from "react";
import { Grid, Button, Input } from "../elements";

const CommentInput = () => {
    return (
        <React.Fragment>
            <Grid is_flex>
                <Input width="90vw"></Input>
                <Button width="10vw"></Button>
            </Grid>
        </React.Fragment>
    );
};

export default CommentInput;