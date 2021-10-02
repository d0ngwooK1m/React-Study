import React from "react";
import styled from "styled-components";
//props: 플레이스 홀더, 타입, 라벨


const Input = (props) => {
    const { width, placeholder, label, children, _onChange, type } = props;

    const inputStyle = { width, type };
    const labelStyle = { label };


    if (type === "textarea") {
        return (
            <React.Fragment>
                <Textarea {...inputStyle} placeholder={placeholder} onChange={_onChange}></Textarea>
            </React.Fragment >
        );
    }

    return (
        <React.Fragment>
            <Label {...labelStyle}>{children}
                <InputElement {...inputStyle} placeholder={placeholder} onChange={_onChange} />
            </Label>
        </React.Fragment>
    );
};

Input.defaultProps = {
    width: "100%",
    placeholder: "Check it Again",
    label: "block",
    type: "text",
    _onChange: () => { }
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

const Textarea = styled.textarea`
    box-sizing: border-box;
    width: 100vw;
    height: 30vh;
`;

export default Input;