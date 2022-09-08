import React from "react";
import styled from "styled-components";

import ExerciseComponent from "./ExerciseComponent";
import { ReactSVG } from 'react-svg';

const MuscleSection = (props) => {

    const { viewport, theme } = props;

    const [currentMuscle, setCurrentMuscle] = React.useState(null)
    const [hoverMuscle, setHoverMuscle] = React.useState(null);


    const muscleHandler = (muscle) => {
        setCurrentMuscle(muscle);
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
                <ReactSVG src="/assets/icons/figure.svg" />
            </SVGWrapper>
            {currentMuscle !== null ?
                <ExerciseComponentWrapper viewport={viewport} theme={theme}>
                    <ExerciseComponent description='The hamstring muscles are a group of three muscles that run along the back of your thigh from your hip to just below your knee. These muscles make it possible to extend your leg straight behind your body and to bend your knee.' viewport={viewport} theme={theme} header={currentMuscle} />
                </ExerciseComponentWrapper> : null}
        </Section>
    )
}

const ExerciseComponentWrapper = styled.div`
    width: 50%;
    ${props => props.viewport !== 'Desktop' && `
        width: 100%;

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
            cursor:pointer;
            ${props => props.theme === 'light' && `
                fill:black;
            `}
            ${props => props.theme === 'dark' && `
                fill:white;
            `}
        }

    }


    ${props => props.currentMuscle !== null && `
        svg{
            ${props => props.viewport === 'Desktop' && `
                width: 50%;
            `}
            path[data-muscle=${props.currentMuscle}]{
                fill:red;
            }
        }
    `}

    ${props => props.hoverMuscle !== null && `
        svg{
            path[data-muscle=${props.hoverMuscle}]{
                fill:blue;
            }
        }
    `}

`

const Section = styled.section`
    display: flex;
    justify-content: center;
    padding: 0px 0px 50px 0px;
    padding-top: 80px;
    ${props => props.viewport === 'Mobile' && `
        flex-direction: column;
    `}
    ${props => props.viewport === 'Tablet' && `
        flex-direction: column;
    `}
    ${props => props.viewport === 'Desktop' && `
        align-items:center;
    `}

    ${props => props.theme === 'light' && `
        background-color: #e4e5f1;
    `}
    ${props => props.theme === 'dark' && `
        background-color: #373737ff;;
    `}
`




export default MuscleSection;