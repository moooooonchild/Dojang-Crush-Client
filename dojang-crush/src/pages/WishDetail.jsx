import NavigationBar from "../components/NavigationBar";
import styled from "styled-components";

const WishDetailPage = () => {
    return (
        <Container>
            <div>Bucket List</div>
            <NavigationBar />
        </Container>
    );
};

export default WishDetailPage;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`;
