import ImageSlider from "../components/ImageSliderComponent";
import styled from "styled-components";

const TestPage = () => {
    return (
        <Container>
            <ImageSlider />
        </Container>
    );
};

export default TestPage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: center;

    width: 100vw;
    height: 100vh;
`;
