import React from "react";
import styled from "styled-components";
//props: 플레이스 홀더, 타입, 라벨

const Input = (props) => {
    const {width, placeholder, label, children, _onChange} = props;

    const inputStyle = {width};
    const labelStyle = {label};

    return(
        <React.Fragment>
            <Label {...labelStyle}>{children}
                <InputElement {...inputStyle} placeholder={placeholder} onChange={_onChange}/>
            </Label>
        </React.Fragment>
    );
};

Input.defaultProps = {
    width: "100%",
    placeholder: "Check it Again",
    label: "block",
    _onChange: () => {}
}

const Label = styled.label`
    display: ${(props) => props.label}
`;

const InputElement = styled.input`
    width: ${(props) => props.width};
    height: 40px;
    placeholder: ${(props) => props.placeholder};
    box-sizing: border-box;
`;

export default Input;