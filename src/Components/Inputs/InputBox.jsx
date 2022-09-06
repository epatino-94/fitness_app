import React from "react";
import styled from "styled-components"


const InputBox = (props) => {
    return (
        <InputWrapper theme={props.theme}>
            <label  htmlFor={props.id}>{props.label}</label>
            <input placeholder={props.placeHolder} name={props.id} {...props.register(`${props.id}`, { required: true })} />
        </InputWrapper>

    )
}

const InputWrapper = styled.div`
    display:flex;
    flex-direction:column;
    label{
        font-size: 14px;
        padding: 5px 0px;
        ${props=>props.theme === 'dark' && `
            color:white;
            font-weight: bold;
        `}
    }
    input{
        height: 25px;
        padding: 0px 10px;
        background-color: ;
        font-size: 18px;
        border: 1px solid black;
        border-radius: 10px;
    }
    
`
export default InputBox;