import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";


const CarouselTile = (props) => {
    const { viewport, theme, data} = props;
    return (
        <DescriptionWrapper theme={theme} viewport={viewport}>
            <HeaderWrapper theme={theme} viewport={viewport}>
                {data.header}
            </HeaderWrapper>
            <ImageWrapper theme={theme} viewport={viewport}>
                <img src={data.src} alt={data.alt} />
            </ImageWrapper>
            <ParagraphWrapper theme={theme} viewport={viewport}>
                <p>{data.desc}</p>
            </ParagraphWrapper>
            {/*<*ButtonWrapper>
                <Button theme={theme} viewport={viewport}>Visualized Exercise</Button>
            </ButtonWrapper>*/}
        </DescriptionWrapper>
    )
}

const ImageWrapper = styled.div`
    display: flex;
    justify-content:center;
    width: 100%;
    img{
        width:30%;
        height: auto;
        margin-top: 20px;
        ${props => props.viewport === 'Mobile' && `
        width: 50%;
    `}
    ${props => props.viewport === 'Tablet' && `
        width: 50%;
    `}
    }
`
const ParagraphWrapper = styled.div`
    display: flex;
    justify-content:center;
    width: 100%;
    ${props => props.theme === 'light' && `
        color: #590f6e;
    `}
    ${props => props.theme === 'dark' && `
        color: white; /*#db92f0*/;
    `}
`

const HeaderWrapper = styled.div`
    text-align:center;
    font-size: 25px;
    font-weight: bold;
    ${props => props.viewport === 'Mobile' && `
        padding: 0px 0px 0px 0px;
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

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px 0px;
`

const DescriptionWrapper = styled.div`
    width: 100%;
    height: 500px;
    ${props => props.viewport === 'Mobile' && `
        width: 90%;
        text-align:center;
        height: 400px;
        padding: 10px 0px;
    `}
    ${props => props.viewport === 'Tablet' && `
        width: 90%;
    `}
    display:flex;
    flex-direction: column;
    justify-content:center;
    p{
        width: 50%;
        text-align:left;
        ${props => props.viewport === 'Mobile' && `
        width: 100%;
        text-align:center;
    `}
    }
    ${props => props.theme === 'light' && `
        color: #590f6e;
    `}
    ${props => props.theme === 'dark' && `
        color: white; /*#db92f0*/;
    `}

`


export default CarouselTile;