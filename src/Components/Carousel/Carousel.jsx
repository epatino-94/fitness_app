import React from "react";
import styled from "styled-components";
import CarouselTile from "./CarouselTile";
import ExerciseData from './ExerciseData';
import { ReactSVG } from 'react-svg';

const Carousel = (props) => {

    const { viewport, theme } = props;

    const [currentCarouselIndex, setCarouselIndex] = React.useState(0);
    const [carouselSlides, setCarouselSlides] = React.useState(0);
    const [carouselTiles, setCarouselTiles] = React.useState([]);


    const nextSlide = () => {
        if ((currentCarouselIndex + 1) <= carouselSlides - 1) {
            setCarouselIndex(currentCarouselIndex + 1);
        } else if (carouselSlides > 0) {
            setCarouselIndex(0);
        }
    }

    const prevSlide = () => {
        if ((currentCarouselIndex - 1) >= 0) {
            setCarouselIndex(currentCarouselIndex - 1);
        } else if ((carouselSlides > 0) && (currentCarouselIndex - 1 < 0)) {
            setCarouselIndex(carouselSlides - 1);
        }
    }

    React.useEffect(() => {
        const CarouselTiles = ExerciseData[`${props.dataKey}`].map((elem, index) => {
            return (<CarouselTile key={index} viewport={viewport} theme={theme} data={elem} />)
        })
        setCarouselSlides(CarouselTiles.length);
        setCarouselTiles(CarouselTiles);
    }, [theme, viewport, props.dataKey])



    return (
        <CarouselWrapper viewport={viewport} theme={theme}>
            {carouselTiles.length > 0 &&
                <>
                    <RightCaretWrapper onClick={() => nextSlide()} viewport={viewport} theme={theme}>
                        <ReactSVG alt="right-caret" src='/fitness_app/assets/icons/caret-right-fill.svg'></ReactSVG>
                    </RightCaretWrapper>
                    <LeftCaretWrapper onClick={() => prevSlide()} viewport={viewport} theme={theme}>
                        <ReactSVG alt="left-caret" src='/fitness_app/assets/icons/caret-left-fill.svg'></ReactSVG>
                    </LeftCaretWrapper>
                    <HeaderWrapper viewport={viewport} theme={theme}>
                        {props.dataKey}
                    </HeaderWrapper>
                    {carouselTiles[currentCarouselIndex]}
                </>
            }
        </CarouselWrapper>
    )
}



const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 15px 0px;
    font-size: 35px;
    font-weight: bold;

    ${props => props.theme === 'light' && `
        color: #590f6e;
    `}
    ${props => props.theme === 'dark' && `
        color: black;
    `}

`


const LeftCaretWrapper = styled.div`
    width: 50px;
    height: 50px;
    position: absolute;
    cursor: pointer;
    left: 0px;
    ${props => props.viewport === 'Mobile' && `
        top: 20px;
    `}
    ${props => props.viewport === 'Tablet' && `
        top: 20px;
    `}
    ${props => props.viewport === 'Desktop' && `
        padding: 0px 20px;
    `}
    ${props => props.theme === 'dark' && `
        svg{
            fill:black;
        }
    `}
`
const RightCaretWrapper = styled.div`
    width: 50px;
    height: 50px;
    position: absolute;
    cursor: pointer;
    right: 0px;
    ${props => props.viewport === 'Mobile' && `
        top: 20px;
    `}
    ${props => props.viewport === 'Tablet' && `
        top: 20px;
    `}
    ${props => props.viewport === 'Desktop' && `
        padding: 0px 20px;
    `}
    ${props => props.theme === 'dark' && `
        svg{
            fill: black;
        }
    `}
`

const CarouselWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
    border-radius: 8px;
    background-filter: blur(20px);
    background-color: rgba(255,255,255,0.5);
    box-shadow: 0 1px 12px rgba(0,0,0,0.25);
    border: 1px solid rgba(255,255,255,0.3);
`

export default Carousel;