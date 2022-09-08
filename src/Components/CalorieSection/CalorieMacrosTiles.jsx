import React from "react";
import styled from 'styled-components';

const CalorieMacrosTiles = (props) => {
    


    const { viewport, theme, maintenanceCalories, carbLevel } = props;

    console.log('viewport',viewport);
    const calculateMacros = (maintenanceCalories,carbLevel) =>{
        let protein = 4.0;
        let carbs = 4.0;
        let fat = 9.0;

        let proteinMultiplier = carbLevel === 'moderate' ? .30 : carbLevel === 'lower' ? .40 : .30;
        let fatMultiplier = carbLevel === 'moderate' ? .35 : carbLevel === 'lower' ? .40 : .20;
        let carbMultiplier = carbLevel === 'moderate' ? .35 : carbLevel === 'lower' ? .20 : .50;


        const proteinGram = Math.round((maintenanceCalories * proteinMultiplier) / protein);
        const fatGram = Math.round((maintenanceCalories * fatMultiplier) / fat);
        const carbGram = Math.round((maintenanceCalories * carbMultiplier) / carbs);
        let macros = {protein:proteinGram,fat:fatGram,carb:carbGram}

        return macros;

    
        

    }

    const macros = calculateMacros(maintenanceCalories,carbLevel);


    return (

        <ResultsTileWrapper viewport={viewport} theme={theme}>
            <HeaderWrapper viewport={viewport} theme={theme}>
                {props.header}
            </HeaderWrapper>
            <TileWrapper viewport={viewport} theme={theme}>
                {macros.protein}g
                <p>protein</p>
            </TileWrapper>
            <TileWrapper viewport={viewport} theme={theme}>
                {macros.fat}g
                <p>fats</p>
            </TileWrapper>
            <TileWrapper viewport={viewport} theme={theme}>
                {macros.carb}g
                <p>carbs</p>
            </TileWrapper>
        </ResultsTileWrapper>

    )
}

const HeaderWrapper = styled.div`
    font-size: 18px;
    font-weight: bold;
    padding: 0px 0px 20px 0px;
    ${props => props.theme === 'light' && `
        color: #590f6e;
    `}
    ${props => props.theme === 'dark' && `
        color: white; /*#db92f0*/;
    `}
    ${props => props.viewport === 'Mobile' && `
        padding: 20px 0px;
    `}

`

const TileWrapper = styled.div`

    ${props => props.theme === 'light' && `
        color: #590f6e;
        border: 1px solid #590f6e;
    `}
    ${props => props.theme === 'dark' && `
        color: white; /*#db92f0*/;
        border: 1px solid white;
    `}

    ${props => props.viewport === 'Mobile' && `
        width: 95%;
    `}

    display: flex;
    justify-content:center;
    flex-direction: column;
    text-align:center;

    border-radius: 10px;
    margin-bottom: 5px;
    font-size: 40px;
    font-weight: bold;
    p{
        font-size: 14px;
        font-weight: normal;
        font-style: italic;
    }


`

const ResultsTileWrapper = styled.div`
    width: 100%;
    
    

    ${props => props.viewport === 'Mobile' && `
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
    `}
`

export default CalorieMacrosTiles;