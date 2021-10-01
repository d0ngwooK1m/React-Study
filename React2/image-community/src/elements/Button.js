import React, { Children } from "react";
import styled from "styled-components";

const Button = (props) => {
    const { width, color, backgroundColor, _onClick, text, is_float } = props;

    const styles = { width: width, color: color, backgroundColor: backgroundColor };

    if (is_float) {
        return (
            <React.Fragment>
                <FloatBtn onClick={_onClick}>{text}</FloatBtn>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <Btn {...styles} onClick={_onClick}>{text}</Btn>
        </React.Fragment>
    );
};

Button.defaultProps = {
    width: "100%",
    color: "white",
    backgroundColor: "black",
    text: "test",
    _onClick: () => { },
    is_float: false,
}

const Btn = styled.button`
    width: ${(props) => props.width};
    height: 40px;
    comment: ${(props) => props.comment};
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color}

`;

const FloatBtn = styled.button`
    width: 50px;
    height: 50px;
    background-color: #212121;
    color: #ffffff;
    box-sizing: border-box;
    font-size: 36px;
    font-weight: 800;
    position: fixed;
    bottom: 50px;
    right: 16px;
    vertical-align: middle;
    text-align: center;
    border: none;
    border-radius: 50%;
`;

export default Button;