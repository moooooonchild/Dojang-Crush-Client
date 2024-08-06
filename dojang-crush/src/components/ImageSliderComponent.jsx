import React from 'react';
import * as S from './styles/imageSlider.styles';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
        <S.SliderWrapper>
            <S.CustomSlider {...settings}>
                {images.map((img, index) => {
                    return (
                        <S.Slide key={index}>
                            <S.SlideImage src={img} />
                        </S.Slide>
                    );
                })}
            </S.CustomSlider>
        </S.SliderWrapper>
    );
};

export default ImageSlider;
