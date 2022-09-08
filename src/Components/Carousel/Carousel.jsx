import React from "react";
import styled from "styled-components";
import CarouselTile from "./CarouselTile";
import ExerciseData from './ExerciseData';


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
    }, [theme,viewport,props.dataKey])



    return (
        <CarouselWrapper viewport={viewport} theme={theme}>
            <RightCaretWrapper onClick={() => nextSlide()} viewport={viewport} theme={theme}>
                <img alt="right-caret" src='/assets/icons/caret-right-fill.svg'></img>
            </RightCaretWrapper>
            <LeftCaretWrapper onClick={() => prevSlide()} viewport={viewport} theme={theme}>
                <img alt="left-caret" src='/assets/icons/caret-left-fill.svg'></img>
            </LeftCaretWrapper>
            {carouselTiles.length > 0 && carouselTiles[currentCarouselIndex]}
        </CarouselWrapper>
    )
}



const LeftCaretWrapper = styled.div`
    width: 50px;
    height: 50px;
    position: absolute;
    cursor: pointer;
    left: 0px;
    ${props => props.viewport === 'Mobile' && `
        top: 80px;
    `}
    ${props => props.viewport === 'Tablet' && `
        top: 80px;
    `}
    ${props => props.viewport === 'Desktop' && `
    `}
`
const RightCaretWrapper = styled.div`
    width: 50px;
    height: 50px;
    position: absolute;
    cursor: pointer;
    right: 0px;
    ${props => props.viewport === 'Mobile' && `
        top: 80px;
    `}
    ${props => props.viewport === 'Tablet' && `
        top: 80px;
    `}
    ${props => props.viewport === 'Desktop' && `
    `}
`

const CarouselWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content:center;


`

export default Carousel;