import React from "react";
import styled from 'styled-components';
import CalorieMacrosTiles from "./CalorieMacrosTiles";

const CalorieResults = (props) => {

    const { viewport, maintenanceCalories, theme } = props;


    const maintenanceCaloriesDailyComma = maintenanceCalories.toLocaleString("en-US");
    const maintenanceCaloriesWeeklyComma = (maintenanceCalories * 7).toLocaleString("en-US");

    return (
        <Section viewport={viewport} theme={theme}>
            <ResultsTileWrapper viewport={viewport} theme={theme}>
                <HeaderWrapper theme={theme}>
                    {props.header}
                </HeaderWrapper>
                <TileWrapper theme={theme}>
                    {maintenanceCaloriesDailyComma}
                    <p>calories per day</p>
                </TileWrapper>
                <TileWrapper theme={theme}>
                    {maintenanceCaloriesWeeklyComma}
                    <p>calories per week</p>
                </TileWrapper>
            </ResultsTileWrapper>
            <DescriptionWrapper theme={theme} viewport={viewport}>
                <p>Based on your stats, the best estimate for your maintenance calories is
                    <b>{` ${maintenanceCaloriesDailyComma}`}</b> calories per day based on the Mifflin-St Jeor Formula, which is widely known to be the most accurate.</p>
                <HeaderWrapper viewport={viewport} theme={theme}>
                        <h1>Suggested Macronutrients</h1>
                </HeaderWrapper>
                <MacrosWrapper viewport={viewport}>
                    <CalorieMacrosTiles viewport={viewport} maintenanceCalories={maintenanceCalories} carbLevel='moderate' theme={theme} header='Moderate Carb (30-35-35)'/>
                    <CalorieMacrosTiles viewport={viewport} maintenanceCalories={maintenanceCalories}  carbLevel='lower'theme={theme} header='Lower Carb (40-40-20)'/>
                    <CalorieMacrosTiles viewport={viewport} maintenanceCalories={maintenanceCalories} carbLevel='higher'theme={theme} header='Higher Carb (30-20-50)'/>
                </MacrosWrapper>
            </DescriptionWrapper>
        </Section>
    )
}

const DescriptionWrapper = styled.div`
    width: 45%; 
    padding: 10px 50px;
    display: flex;
    flex-direction: column;
    ${props => props.viewport !== 'Desktop' && `
            width: 100%;
            padding: 0px 0px;
            display: block;
        `}
        ${props => props.theme === 'light' && `
        color: #590f6e;
    `}
    ${props => props.theme === 'dark' && `
        color: white; /*#db92f0*/;
    `}
`
const MacrosWrapper = styled.div`
    display: flex;
    ${props => props.viewport === 'Mobile' && `
        flex-direction: column;
    `}
`

const HeaderWrapper = styled.div`
    font-size: 20px;
    padding: 0px 0px 0px 0px;
    text-align: center;
    ${props => props.theme === 'light' && `
        color: #590f6e;
    `}
    ${props => props.theme === 'dark' && `
        color: white; /*#db92f0*/;
    `}
    ${props => props.viewport === 'Mobile' && `
            padding: 10px 0px;
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

    padding: 20px 20px;
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
    padding: 25px 0px;
    ${props => props.viewport !== 'Desktop' && `
        padding: 0px 5px;
    `}
`

const Section = styled.section`
    display: flex;
    justify-content:center;
    ${props => props.viewport !== 'Desktop' && `
        flex-direction: column;
    `}
`

export default CalorieResults;