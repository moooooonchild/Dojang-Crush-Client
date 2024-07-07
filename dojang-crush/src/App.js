import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import TimelinePage from "./pages/Timeline";
import BucketListPage from "./pages/BucketList";
import UploadPage from "./pages/Upload";
import WishListPage from "./pages/WishList";
import GroupPage from "./pages/Group";
import RegisterPage from "./pages/Register";

function App() {
    return (
        <Container>
            <Routes>
                <Route path="/" element={<TimelinePage />}></Route>
                <Route path="/bucketlist" element={<BucketListPage />}></Route>
                <Route path="/upload" element={<UploadPage />}></Route>
                <Route path="/wishlist" element={<WishListPage />}></Route>
                <Route path="/group" element={<GroupPage />}></Route>
                <Route path="/register" element={<RegisterPage />}></Route>
            </Routes>
        </Container>
    );
}

export default App;

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;
