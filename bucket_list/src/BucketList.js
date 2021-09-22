// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";
import {useHistory} from "react-router";
import {useSelector} from "react-redux";


const BucketList = () => {
    const history = useHistory();
    const my_lists = useSelector((state) => state.bucket.list);
    //스토어가 가지고 있는 전체 데이터를 가져와달라(state) =>전체 안에 모듈 안에 있는 Array만 가져와라 (state.bucket.list) 

    return (
        <ListStyle>
            {my_lists.map((list, index) => {
                return (
                    <ItemStyle className="list_item" key={index} onClick={() => {
                        history.push("/detail/"+index);
                    }}>
                    {list}
                    </ItemStyle>
                );
            })}
        </ListStyle>
    );
};

const ListStyle = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
`;

const ItemStyle = styled.div`
    padding: 16px;
    margin: 8px;
    background-color: aliceblue;
`;

export default BucketList;