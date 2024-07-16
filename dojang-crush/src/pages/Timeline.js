import NavigationBar from "../components/NavigationBar";
import styled from "styled-components";

const TimelinePage = () => {
    return (
        <Container>
            <NavigationBar />
        </Container>
    );
};

export default TimelinePage;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`;
