import styled from "styled-components";
import TopBarWithBack from "../components/TopBarWithBack";
import { useNavigate } from "react-router-dom";

const ChangeIDPWPage = () => {
  const navigate = useNavigate();
  return (
    <ChangeNameWrapper>
      <TopBarWithBack text="아이디/비번 변경" />
      <ChangeIDPWContainer>
        <ChangeIDInput placeholder="&nbsp; 아이디 (영문,숫자 조합 8~15자)" />
        <ChangePWInput placeholder="&nbsp; 비밀번호 (영문,숫자 조합 8~16자)" />
        <ChangePWInput placeholder="&nbsp; 비밀번호 확인" />
        <CheckBTN>변경하기</CheckBTN>
      </ChangeIDPWContainer>
    </ChangeNameWrapper>
  );
};

export default ChangeIDPWPage;

const ChangeNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChangeIDPWContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2vh;
  gap: 3vh;
`;

const ChangeIDInput = styled.input`
  display: flex;
  justify-content: center;
  width: 90vw;

  padding: 1vh 0vh;
  border: none;
  border-radius: 4px;

  font-size: 2.5rem;
  font-weight: bold;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  &::placeholder {
    color: #dee2e6;
  }
`;

const ChangePWInput = styled.input`
  display: flex;
  justify-content: center;
  width: 90vw;

  padding: 1vh 0vh;
  border: none;
  border-radius: 4px;

  font-size: 2.5rem;
  font-weight: bold;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  &::placeholder {
    color: #dee2e6;
  }
`;

const CheckBTN = styled.button`
  display: flex;
  justify-content: center;
  width: 90vw;
  padding: 1vh 0vh;
  border: none;
  border-radius: 4px;
  background-color: #dba290;
  color: #612d1c;
  font-size: 2.5rem;
  font-weight: bold;
  &:hover {
    background-color: #c48a7a;
  }
`;
