import styled from "styled-components";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const TopBarWithBack = ({ text }) => {
  const navigate = useNavigate();
  return (
    <TopBarWrapper>
      <BackBTN onClick={() => navigate(-1)} />
      <TopBarText>{text}</TopBarText>
    </TopBarWrapper>
  );
};
export default TopBarWithBack;

const TopBarWrapper = styled.div`
  display: flex;
  align-items: center;
  z-index: 1000;
  margin-top: 5vh;
  margin-bottom: 4vh;
  width: 90vw;
  padding: 1vh 5vw;
`;
const BackBTN = styled(IoMdArrowRoundBack)`
  font-size: 4rem;
  color: #7b4f3d;
  cursor: pointer;
`;

const TopBarText = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 4rem;
  font-weight: bold;
`;
