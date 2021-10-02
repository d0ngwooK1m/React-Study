import React from "react";
import { Button, Text, Image, Grid } from "../elements";

const CommentArea = () => {
    return (
        <React.Fragment>
            <Grid>
                <Grid is_flex>
                    <Image shape="circle"></Image>
                    <Text bold="bold">제목</Text>
                    <Text>내용</Text>
                    <Button width="8vw" text="삭제"></Button>
                </Grid>

                <Grid is_flex>
                    <Image shape="circle"></Image>
                    <Text bold="bold">제목</Text>
                    <Text>내용</Text>
                    <Button width="8vw" text="삭제"></Button>
                </Grid>

                <Grid is_flex>
                    <Image shape="circle"></Image>
                    <Text bold="bold">제목</Text>
                    <Text>내용</Text>
                    <Button width="8vw" text="삭제"></Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default CommentArea;