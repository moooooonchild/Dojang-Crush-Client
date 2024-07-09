import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import TimelinePage from "./pages/Timeline";
import BucketListPage from "./pages/BucketList";
import UploadPage from "./pages/Upload";
import WishListPage from "./pages/WishList";
import GroupPage from "./pages/Group";
import RegisterPage from "./pages/Register";
import BucketDetailPage from "./pages/BucketDetail";
import WishDetailPage from "./pages/WishDetail";
import SignupPage from "./pages/Signup";

function App() {
    return (
        <Container>
            <Routes>
                <Route path="/" element={<TimelinePage />}></Route>
                <Route path="/bucketlist" element={<BucketListPage />}></Route>
                <Route
                    path="/bucketlist/:theme"
                    element={<BucketDetailPage />}
                ></Route>
                <Route path="/upload" element={<UploadPage />}></Route>
                <Route path="/wishlist" element={<WishListPage />}></Route>
                <Route
                    path="/wishlist/:theme"
                    element={<WishDetailPage />}
                ></Route>
                <Route path="/group" element={<GroupPage />}></Route>
                <Route path="/register" element={<RegisterPage />}></Route>
                <Route path="/signup" element={<SignupPage />}></Route>
            </Routes>
        </Container>
    );
}

export default App;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`;
