//PostList.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


import Post from "../components/Post";
import { actionCreators as postActions } from "../redux/modules/post";
import InfinityScroll from "../shared/infinityScroll";
import { Grid } from "../elements";



const PostList = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  console.log(post_list);
  const is_loading = useSelector((state) => state.post.is_loading);
  const paging = useSelector((state) => state.post.paging);

  const { history } = props;

  useEffect(() => {
    if (post_list.length < 2) {
      dispatch(postActions.getPostFB());
    }
  }, [dispatch]);

  return (
    <React.Fragment>
      {/* <Post /> */}
      <Grid bg={"#EFF6FF"}
        padding="20px 0px"
      >
        <InfinityScroll
          callNext={() => {
            dispatch(postActions.getPostFB(paging.next));
          }}
          is_next={paging.next ? true : false}
          loading={is_loading}
        >
          {post_list.map((val, idx) => {
            return (
              <Grid bg={"#FFFFFF"}
                key={val.id}
                _onClick={() => {
                  history.push(`/postdetail/${val.id}`)
                }}
                margin="40px 0px"
              >
                <Post  {...val} />
              </Grid>
            );



          })}
        </InfinityScroll>
      </Grid>
    </React.Fragment>
  );
};

export default PostList;
