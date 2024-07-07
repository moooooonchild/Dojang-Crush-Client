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
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;
