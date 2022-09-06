import React from 'react';
import styled from 'styled-components';

const Dropdown = (props) => {

    const{dropDownData, register, theme} = props;

    return (
        <DropdownWrapper theme={theme}>
            <label htmlFor={props.id}>{props.label}</label>
            <select {...register(`${props.id}`, { required: true })} name={props.id} id={props.id}>
                {dropDownData.map((elem,index)=>{
                    return <option key={index} value={elem.value}>{elem.text}</option>
                })}
            </select>
        </DropdownWrapper>
    )
}

const DropdownWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 0px;
    ${props=>props.theme === 'dark' && `
            color:white;
            font-weight: bold;
        `}
    select{
        height: 35px;
        font-size: 17px;
        margin-top: 5px;
        border: 1px solid black;
        color:black;

    }
`

export default Dropdown;