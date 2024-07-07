const BucketDetailPage = () => {
    return (
        <Container>
            <div>Bucket List</div>
            <NavigationBar />
        </Container>
    );
};

export default BucketDetailPage;

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;
