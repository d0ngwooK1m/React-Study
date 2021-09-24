import React from "react";
import styled from "styled-components";
import {Eco} from "@material-ui/icons";

const Spinner = (props) => {
    return (
        <Outer>
            <Eco style={{
                color: "orange", fontSize: "150px"
            }} />
        </Outer>
    );
};

const Outer = styled.div`
    background: #ffeca0;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default Spinner;