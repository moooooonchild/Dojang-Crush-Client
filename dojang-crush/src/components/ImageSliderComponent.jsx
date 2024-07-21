import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: true,
        centerMode: true,
    };

    return (
        <SliderWrapper>
            <Slider {...settings}>
                {images.map((img, index) => {
                    return (
                        <Slide key={index}>
                            <SlideImage src={img} />
                        </Slide>
                    );
                })}
            </Slider>
        </SliderWrapper>
    );
};

export default ImageSlider;

const SliderWrapper = styled.div`
    width: 100%;
    margin: auto;
`;

const Slide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SlideImage = styled.img`
    width: 80vw;
`;
