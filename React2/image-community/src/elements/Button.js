import React from "react";
import styled from "styled-components";

const Button = (props) => {
    const {width, color, backgroundColor, _onClick, children} = props;

    const styles = {width: width, color:color, backgroundColor:backgroundColor};

    return(
        <React.Fragment>
            <Btn {...styles} onClick={_onClick}>{children}</Btn>
        </React.Fragment>
    );
};

Button.defaultProps = {
    width: "100%",
    color: "white",
    backgroundColor: "black",
    _onClick: () => {}, 
}

const Btn = styled.button`
    width: ${(props) => props.width};
    height: 40px;
    comment: ${(props) => props.comment};
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color}

`;

export default Button;