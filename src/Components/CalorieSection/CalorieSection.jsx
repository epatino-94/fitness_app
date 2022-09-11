import React from "react";
import styled from 'styled-components'

import CalorieForm from "./CalorieForm";

const CalorieSection = (props) =>{


    const {viewport,theme} = props //Deconstructing w/o props.viewport

    return(
    <Section viewport={viewport} theme={theme}>
        <HeaderWrapper viewport={viewport} theme={theme}>
            <FormHeader viewport={viewport} theme={theme}>
                <h1>TDEE Calculator</h1>
                <DescriptionWrapper viewport={viewport} theme={theme}>
                    <p>Use the TDEE calculator to learn your Total Daily Energy Expenditure, a measure of how many calories you burn per day.</p>
                    <p>Your Total Daily Energy Expenditure (TDEE) is an estimation of how many calories you burn per day when exercise is taken into account. It is calculated by first figuring out your Basal Metabolic Rate, then multiplying that value by an activity multiplier.</p>
                    <p>Since your BMR represents how many calories your body burns when at rest, it is necessary to adjust the numbers upwards to account for the calories you burn during the day. This is true even for those with a sedentary lifestyle. Our TDEE calculator uses the best formulas and displays your score in a way that's easy to read and meaningful.</p>
                </DescriptionWrapper>
            </FormHeader>
        </HeaderWrapper>
        <FormWrapper>
        <CalorieForm viewport={viewport} theme={theme}/>
        </FormWrapper>
    </Section>)
}

const DescriptionWrapper = styled.div`
    display: flex;
    justify-content:center;
    alig-items:center;
    flex-direction: column;
    width: 50%;
    ${props=>props.viewport === 'Mobile' && `
            width: 90%;
        `}
    p{
        ${props=>props.viewport === 'Mobile' && `
            text-align:center;
        `}
    }
`
const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const HeaderWrapper = styled.div`
    padding-top: 80px;
    display: block;
    justify-content: center;
    align-content:center;
    text-align:center;
    ${DescriptionWrapper}{
        text-align: left;
    }
`
const FormHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    ${props=>props.theme === 'light' && `
        color: #590f6e;
    `}
    ${props=>props.theme === 'dark' && `
        color: white; /*#db92f0*/;
    `}
`

const Section = styled.div`
    display: block;
    justify-content: center;
    padding: 0px 0px;
    align-items: center;
    ${props=>props.viewport === 'Mobile' && `
    `}
    ${props=>props.viewport === 'Tablet' && `
    `}
    ${props=>props.viewport === 'Desktop' && `
    `}



`

export default CalorieSection;