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
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;
