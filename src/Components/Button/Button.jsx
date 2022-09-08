import React from "react";
import styled from "styled-components";


const Button = (props) => {

    const {theme,viewport} = props;

    return (
        <ButtonWrapper theme={theme} viewport={viewport}>
            <button onClick={props.onClick}>{props.children}</button>
        </ButtonWrapper>
    )
}

const ButtonWrapper = styled.div`
    button{
        width: 100%;
        font-size: 15px;
        font-weight: bold;
        ${props => props.theme === 'light' && `
            color:white;
            background-color:#590f6e;
        `}
        ${props => props.theme === 'dark' && `
            color:white;
            background-color:#141414ff;
            font-weight: bold;
        `}
        border: none;
        height: 45px;
        cursor: pointer;
    }
 `

export default Button;