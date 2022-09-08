import React from "react";
import styled from 'styled-components';

const RadioButton = (props) => {

    const { buttonData, id, theme } = props;

    return (
        <RadioButtonWrapper theme={theme}>
            {props.label}
            <InputWrapper theme={theme}>
                {buttonData.map((buttonLabel, index) => {
                    return (
                        <React.Fragment key={index}>
                            <input {...props.register(`${id}`, { required: true })} type="radio" id={buttonLabel} name={id} value={buttonLabel} />
                            <label htmlFor={buttonLabel}>{buttonLabel}</label>
                        </React.Fragment>
                    )
                })}
            </InputWrapper>
        </RadioButtonWrapper>
    )

}

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
        ${props=>props.theme === 'dark' && `
            color:white;
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
    ${props=>props.theme === 'dark' && `
            color:white;
            font-weight: bold;
        `}
`


export default RadioButton;