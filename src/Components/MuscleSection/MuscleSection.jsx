import React from "react";
import styled from "styled-components";

import ExerciseComponent from "./ExerciseComponent";
import { ReactSVG } from 'react-svg';

const MuscleSection = (props) => {

    const { viewport, theme } = props;

    const [currentMuscle, setCurrentMuscle] = React.useState(null)
    const [hoverMuscle, setHoverMuscle] = React.useState(null);
    const exerciseComponentRef = React.useRef(null);



    const muscleHandler = (muscle) => {
        setCurrentMuscle(muscle);
        window.setTimeout(function(){
            exerciseComponentRef.current.scrollIntoView({behavior: "smooth"});
    }, 100);
    }
    const muscleHoverHandlerCallback = (muscle) => {
        setHoverMuscle(muscle);
    }

    React.useEffect(() => {
        window.muscleHandler = muscleHandler;
        window.muscleHoverHandler = muscleHoverHandlerCallback;
    }, [])



    return (
        <Section viewport={viewport} theme={theme}>
            <SVGWrapper viewport={viewport} theme={theme} hoverMuscle={hoverMuscle} currentMuscle={currentMuscle}>
                <HeaderWrapper theme={theme} viewport={viewport}>
                    Muscle Anatomy
                    <p>Please select a muscle group to see respective detailed exercises.</p>
                </HeaderWrapper>
                <ReactSVG src="/fitness_app/assets/icons/figure.svg" />
            </SVGWrapper>
            {currentMuscle !== null ?
                <ExerciseComponentWrapper ref={exerciseComponentRef} viewport={viewport} theme={theme}>
                    <ExerciseComponent description='The hamstring muscles are a group of three muscles that run along the back of your thigh from your hip to just below your knee. These muscles make it possible to extend your leg straight behind your body and to bend your knee.' viewport={viewport} theme={theme} header={currentMuscle} />
                </ExerciseComponentWrapper> : null}
        </Section>
    )
}


const HeaderWrapper = styled.div`
    text-align: center;
    padding: 0px 0px 50px 0px;
    font-size: 30px;
    font-weight: bold;
    p{
        font-size: 14px;
        font-style: italic;
    }
    ${props => props.viewport === 'Mobile' && `
        padding: 20px 0px 0px 0px;
        width: 100%;
        font-size: 20px;
    `}
    ${props => props.viewport === 'Tablet' && `
        padding: 0px 0px 0px 0px;
    `}
    ${props => props.theme === 'light' && `
        color: #590f6e;
    `}
    ${props => props.theme === 'dark' && `
        color: white; /*#db92f0*/;
    `}
`

const ExerciseComponentWrapper = styled.div`
    width: 50%;
    padding: 0px 50px 0px 0px;
    ${props => props.viewport !== 'Desktop' && `
        width: 90%;
        display: flex;
        justify-content:center;
    `}
    ${props => props.viewport === 'Mobile' && `
       padding: 20px 0px 0px 0px;
    `}
    ${props => props.viewport === 'Tablet' && `
        padding: 20px 0px 0px 0px;
    `} 
`


const SVGWrapper = styled.div`
    width: 70%;
    height: auto;

    ${props => props.viewport !== 'Desktop' && `
        width: 100%;
    `}


    svg{
        path{
            ${props => props.theme === 'light' && `
                fill:black;
            `}
            ${props => props.theme === 'dark' && `
                fill:white;
            `}
        }
        path[data-muscle]{
            ${props => props.viewport === 'Mobile' && `
                    fill:red;
                    opacity: 0.5;
            `}
        }

    }


    ${props => props.currentMuscle !== null && `
        svg{
            border: 1px solid blue
            ${props => props.viewport === 'Desktop' && `
                width: 50%;
            `}
            path[data-muscle=${props.currentMuscle}]{
                fill:red;
                opacity: 1;
            }

        }
    `}

    ${props => props.hoverMuscle !== null && props.viewport !== 'Mobile' &&
            props.hoverMuscle !== props.currentMuscle && `
        svg{ 
            path[data-muscle=${props.hoverMuscle}]{
                fill:red;
                opacity: 0.5;
                cursor:pointer;
            }
        }
    `}

`

const Section = styled.section`
    display: flex;
    justify-content: center;
    padding: 40px 0px 50px 0px;
    align-items:center;
    ${props => props.viewport === 'Mobile' && `
        flex-direction: column;
        padding: 0px 0px 50px 0px;
    `}
    ${props => props.viewport === 'Tablet' && `
        flex-direction: column;
        padding: 0px 0px 50px 0px;
    `}
    ${props => props.viewport === 'Desktop' && `
    `}

    ${props => props.theme === 'light' && `
        background-color: #e4e5f1;
    `}
    ${props => props.theme === 'dark' && `
        background-color: #373737ff;;
    `}
`




export default MuscleSection;