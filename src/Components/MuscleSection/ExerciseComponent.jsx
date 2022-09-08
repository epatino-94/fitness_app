import React from "react";
import styled from "styled-components";
import Carousel from "../Carousel/Carousel";

const ExerciseComponent= (props) => {

    const {viewport, theme} = props;

    return(
        <ExerciseWrapper viewport={viewport} theme={theme}>
            <HeaderWrapper viewport={viewport} theme={theme}>
                {props.header}
            </HeaderWrapper>    
            <DescriptionWrapper viewport={viewport} theme={theme}>
                <p>{props.description}</p>
            </DescriptionWrapper>
            <Carousel dataKey={props.header} theme={theme} viewport={viewport}/>
        </ExerciseWrapper>
    )
}


const DescriptionWrapper = styled.div`
    ${props=>props.theme === 'light' && `
        color: #590f6e;
    `}
    ${props=>props.theme === 'dark' && `
        color: white; /*#db92f0*/;
    `}
    ${props => props.viewport === 'Mobile' && `
        text-align:center;
    `}
`

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px 0px;
    font-size: 35px;
    font-weight: bold;

    ${props=>props.theme === 'light' && `
        color: #590f6e;
    `}
    ${props=>props.theme === 'dark' && `
        color: white; /*#db92f0*/;
    `}

`

const ExerciseWrapper = styled.div`
    padding: 0px 5px;
`

export default ExerciseComponent;