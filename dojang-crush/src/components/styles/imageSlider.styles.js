import styled from 'styled-components';
import Slider from 'react-slick';

export const SliderWrapper = styled.div`
    width: 100%;
    padding-bottom: 3vw;
`;

export const CustomSlider = styled(Slider)`
    .slick-dots li button:before {
        font-size: 0.7rem;
    }
`;

export const Slide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    height: 80vw;
    border: solid 1px whitesmoke;
`;

export const SlideImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
