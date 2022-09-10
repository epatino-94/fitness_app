import React from "react";
import { useForm } from 'react-hook-form'
import styled from 'styled-components';
import InputBox from "../Inputs/InputBox";
import RadioButton from "../Inputs/RadioButton";
import Dropdown from "../Inputs/Dropdown";
import CalorieResults from "./CalorieResults";

const CalorieForm = (props) => {

    const { viewport, theme } = props;

    const { register, handleSubmit, watch, formState: { errors } } = useForm({mode:'onChange'});

    const [maintenanceCalories, setMaintenanceCalories] = React.useState(null);

    console.log('Current Errors:',errors)


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
                    <RadioButton errors={errors} validation={{required: 'Gender is required.'}} theme={theme} id='gender' register={register} buttonData={genderData} label='Gender' />
                    <InputBox errors={errors} validation={{required: 'Age is required.', pattern: {value:/^(18|19|2\d|3\d|4\d|5\d|6\d|7\d|80)$/, message:'Age must be number between 18-80.'}}} placeHolder='ages 18-80' theme={theme} register={register} label="Age" id="age" />
                    <InputBox errors={errors} validation={{required: 'Height is required.',pattern: {value:/^\d*\.?\d*$/, message:'Height must be a number.'}}} placeHolder='height in cm' theme={theme} register={register} label="Height" id="height" />
                    <InputBox errors={errors} validation={{required: 'Weight is required.',pattern: {value:/^\d*\.?\d*$/, message:'Weight must be a number.'}}} placeHolder='weight in kg' theme={theme} register={register} label="Weight" id="weight" />
                    <Dropdown errors={errors} validation={{required: 'Activity level is required.'}} theme={theme} register={register} id='activity' dropDownData={dropDownData} label="Activity Level" />
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
    padding-bottom: 20px;
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
    width:270px;
    ${props=>props.viewport === 'Mobile' && `
            width: 80%;
    `}

    padding: 10px 10px;
    border-radius: 8px;
    background-filter: blur(20px);
    background-color: rgba(255,255,255,0.5);
    box-shadow: 0 1px 12px rgba(0,0,0,0.25);
    border: 1px solid rgba(255,255,255,0.3);
`

const Section = styled.section`
    padding: 20px 0px;
    width: 100%;
    display: flex;
    justify-content:center;
    
`


export default CalorieForm;