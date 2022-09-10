import React from "react";
import styled from "styled-components";


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
        width: 100%;
        font-size: 20px;
    `}
    ${props => props.theme === 'light' && `
        color: #590f6e;
    `}
    ${props => props.theme === 'dark' && `
        color: black; /*#db92f0*/;
    `}
`

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
    padding: 30px 0px;
    ${props => props.theme === 'light' && `
        color: #590f6e;
    `}
    ${props => props.theme === 'dark' && `
        color: black; /*#db92f0*/;
    `}
`


const DescriptionWrapper = styled.div`
    width: 100%;
    min-height: 500px;
    ${props => props.viewport === 'Mobile' && `
        width: 90%;
        text-align:center;
        padding: 10px 0px;
        min-height: 0px;
    `}
    ${props => props.viewport === 'Tablet' && `
        width: 90%;
        text-align:center;
        padding: 10px 0px;
        min-height: 0px;
    `}
    display:flex;
    flex-direction: column;
    justify-content:center;
    p{
        width: 50%;
        text-align:left;
        ${props => props.viewport !== 'Desktop' && `
        width: 100%;
        text-align:center;
    `}
    }
    ${props => props.theme === 'light' && `
        color: #590f6e;
    `}
    ${props => props.theme === 'dark' && `
        color: black; /*#db92f0*/;
    `}
    -webkit-animation: fadein 0.5s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 0.5s; /* Firefox < 16 */
        -ms-animation: fadein 0.5s; /* Internet Explorer */
         -o-animation: fadein 0.5s; /* Opera < 12.1 */
            animation: fadein 0.5s;


    @keyframes fadein{
        from { opacity: 0; }
        to   { opacity: 1; }
    }
    /* Firefox < 16 */
    @-moz-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Safari, Chrome and Opera > 12.1 */
    @-webkit-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Internet Explorer */
    @-ms-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Opera < 12.1 */
    @-o-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
`


export default CarouselTile;