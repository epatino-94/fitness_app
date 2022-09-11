import React from "react";
import styled from "styled-components"


const InputBox = (props) => {

    const {errors,touched} = props;

    const displayErrorBorder= errors[`${props.id}`]?.message ? true : false;
    const isTouched = `${props.id}` in touched ? true:false; 

   

    return (
        <InputWrapper touched={isTouched} error={displayErrorBorder} theme={props.theme}>
            <label htmlFor={props.id}>{props.label}</label>
            <input placeholder={props.placeHolder} name={props.id} {...props.register(`${props.id}`, props.validation)} />
            {errors[`${props.id}`]?.message && (
                <ErrorMessageWrapper>
                    {errors[`${props.id}`]?.message}
                </ErrorMessageWrapper>
            )}
        </InputWrapper>

    )
}

const ErrorMessageWrapper = styled.div`
    color:red;
    font-size: 12px;
    font-style:italic
`

const InputWrapper = styled.div`
    display:flex;
    flex-direction:column;
    font-weight: bold;
    label{
        font-size: 14px;
        padding: 5px 0px;
        ${props=>props.theme === 'dark' && `
            color:black;
        `}
    }
    input{
        height: 25px;
        padding: 0px 10px;
        background-color: ;
        font-size: 18px;
        border: 1px solid black;
        border-radius: 10px;
        ${props=>props.error === true && `
            border: 2px solid red;
        `}
        ${props=>props.touched === true && props.error === false && `
            border: 2px solid green;
        `}
    }
    
`
export default InputBox;