import React from "react";
import styled from 'styled-components';

const RadioButton = (props) => {

    const { buttonData, id, theme, errors } = props;

    const displayErrorBorder= errors[`${props.id}`]?.message ? true : false;

    return (
        <RadioButtonWrapper theme={theme}>
            {props.label}
            <InputWrapper theme={theme}>
                {buttonData.map((buttonLabel, index) => {
                    return (
                        <React.Fragment key={index}>
                            <input {...props.register(`${id}`, props.validation)} type="radio" id={buttonLabel} name={id} value={buttonLabel} />
                            <label htmlFor={buttonLabel}>{buttonLabel}</label>
                        </React.Fragment>
                    )
                })}
                {errors[`${props.id}`]?.message && (
                    <ErrorMessageWrapper>
                        {errors[`${props.id}`]?.message}
                    </ErrorMessageWrapper>
                )}
            </InputWrapper>
        </RadioButtonWrapper>
    )

}


const ErrorMessageWrapper = styled.div`
    color:red;
    font-size: 12px;
    font-style:italic
`

const InputWrapper = styled.div`
    padding: 5px 0px;
    
    input{
        cursor: pointer;
        &:checked:after{
        width: 14px;
        height: 14px;
        border-radius: 15px;
        top: -2px;
        left: -1px;
        position: relative;
        background-color: #590f6e;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid white;
        ${props => props.theme === 'dark' && `
            color:black;
            background-color: #141414ff;
        `}
        }
    }
    label{
        padding: 0px 5px;
    }
`

const RadioButtonWrapper = styled.div`
    display:block;
    font-weight: bold;
    ${props => props.theme === 'dark' && `
            color:black;
        `}
`


export default RadioButton;