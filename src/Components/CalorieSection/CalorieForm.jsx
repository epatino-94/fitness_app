import React from "react";
import { useForm } from 'react-hook-form'
import styled from 'styled-components';
import InputBox from "../Inputs/InputBox";
import RadioButton from "../Inputs/RadioButton";
import Dropdown from "../Inputs/Dropdown";
import CalorieResults from "./CalorieResults";

const CalorieForm = (props) => {

    const { viewport, theme } = props;

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [maintenanceCalories, setMaintenanceCalories] = React.useState(3000);

    //console.log('Current Errors:',errors)


    const calculateMultipler = (activity) => {
        switch (activity) {
            case 'BMR': return 1;
            case 'Sedentary': return 1.2;
            case 'Light': return 1.375;
            case 'Moderate': return 1.55;
            case 'Very': return 1.725;
            case 'Extra': return 1.9;
            default: return 1;
        }
    }

    const calculateBMR = (data) => {
        let multiplier = calculateMultipler(data.activity);
        if (data.gender === 'Male') {
            let calculatedBMR = (10 * data.weight) + (6.25 * data.height) - (5 * data.age) + 5;
            return calculatedBMR * multiplier
        }
        let calculatedBMR = (10 * data.weight) + (6.25 * data.height) - (5 * data.age) - 161
        return calculatedBMR * multiplier;
    }


    const onSubmit = (data) => {
        const BMR = calculateBMR(data)
        setMaintenanceCalories(Math.round(BMR));
    }

    const genderData = ['Male', 'Female'];

    const dropDownData = [{ text: "Basal Metabolic Rate (BMR)", value: "BMR" }, { text: "Sedentary: little or no exercise", value: "Sedentary" }, { text: "Light: exercise 1-3 times per week", value: "Light" }
        , { text: "Moderate: exercise 4-5 times per week", value: "Moderate" }, { text: "Very Active: daily exercise or intense exercise 3-4 times per week", value: "Very" }, { text: "Extra Active: daily intenese exercise or physical job", value: "Extra" }];


    return (
        <Section>
            {maintenanceCalories !== null ? 
            <CalorieResults theme={theme} viewport={viewport} header="Your maintenance calories" maintenanceCalories={maintenanceCalories}/> 
            :
            <FormWrapper viewport={viewport}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <RadioButton theme={theme} id='gender' register={register} buttonData={genderData} label='Gender' />
                    <InputBox placeHolder='ages 18-80' theme={theme} register={register} label="Age" id="age" />
                    <InputBox placeHolder='height in cm' theme={theme} register={register} label="Height" id="height" />
                    <InputBox placeHolder='weight in kg' theme={theme} register={register} label="Weight" id="weight" />
                    <Dropdown theme={theme} register={register} id='activity' dropDownData={dropDownData} label="Activity Level" />
                    <SubmitWrapper theme={theme}>
                        <input value='Calculate' type="submit" />
                    </SubmitWrapper>
                </form>
            </FormWrapper>
            }
        </Section>
    )
}

const SubmitWrapper = styled.div`
    padding: 10px 0px;
    input{
        width: 100%;
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
        border-radius: 50px;
        height: 45px;
        cursor: pointer;
    }
`

const FormWrapper = styled.section`
    width: 250px;
    ${props=>props.viewport === 'Mobile' && `
            width: 90%;
        `}
    ${props=>props.viewport !== 'Mobile' && `
            padding-bottom: 135px;
        `}
`

const Section = styled.section`
    padding: 40px 0px;
    width: 100%;
    display: flex;
    justify-content:center;
`


export default CalorieForm;