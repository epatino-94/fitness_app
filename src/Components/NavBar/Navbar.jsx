import React from "react";
import styled from 'styled-components';
import {ReactComponent as MoonIcon} from '../../assets/icons/moon-fill.svg'
import {ReactComponent as SunIcon} from '../../assets/icons/brightness-alt-high.svg'

const NavBar = (props) => {

    const {viewport,theme,invertTheme} = props //Deconstructing w/o props.viewport

    return(
        <Section viewport={viewport} theme={theme}>
            <HeaderWrapper viewport={viewport} theme={theme}>
                <h1>
                    fitnessApp   
                </h1>
                <IconWrapper onClick={()=>invertTheme(theme)} viewport={viewport} theme={theme}>
                    {theme === 'light' ? <MoonIcon/> : <SunIcon/>}
                </IconWrapper>
            </HeaderWrapper>
        </Section>
    )
}

const IconWrapper = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    right: 20px;
    cursor: pointer;

    height: 30px;
    width: 30px;

    &:hover{
        opacity: 0.5;
        height: 35px;
        width: 35px;
    }

`

const HeaderWrapper = styled.div`
    width: 100%; 
    display: flex;
    padding: 0px 10px;
    align-items: center; /*Align Vertically */
    position: relative;
    h1{
        padding-right: 10px;
    }

    ${props=>props.theme === 'light' && `
        color: #590f6e;
    `}
    ${props=>props.theme === 'dark' && `
        color: white;
    `}

`

const Section = styled.section`
    display: flex;
    margin: 0 auto;
    padding: 0px 0px;
    position: fixed;
    width: 100%;


    ${props=>props.viewport === 'Mobile' && `
    `}
    ${props=>props.viewport === 'Tablet' && `
    `}
    ${props=>props.viewport === 'Desktop' && `
    `}

    ${props=>props.theme === 'light' && `
        background-color: white;
    `}
    ${props=>props.theme === 'dark' && `
        background-color: #141414ff;
    `}


`


export default NavBar;