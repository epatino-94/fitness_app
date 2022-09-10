import React from "react";
import styled from "styled-components";
import Carousel from "../Carousel/Carousel";

const ExerciseComponent= (props) => {

    const {viewport, theme} = props;

    return(
        <ExerciseWrapper viewport={viewport} theme={theme}>
            <Carousel dataKey={props.header} theme={theme} viewport={viewport}/>
        </ExerciseWrapper>
    )
}




const ExerciseWrapper = styled.div`
    padding: 0px 5px;
`

export default ExerciseComponent;