import styled from "styled-components";
import TopBarWithBack from "../components/TopBarWithBack";
import { useNavigate } from "react-router-dom";

const WithdrawalPage = () => {
  const navigate = useNavigate();
  return (
    <WithdrawalWrapper>
      <TopBarWithBack text="회원 탈퇴" />
      <PWInput placeholder="&nbsp; 비밀번호를 입력해주세요." />
      <CheckBTN onClick={() => navigate("/register")}>탈퇴하기</CheckBTN>
    </WithdrawalWrapper>
  );
};

export default WithdrawalPage;

const WithdrawalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PWInput = styled.input`
  display: flex;
  justify-content: center;
  width: 90vw;
  margin-top: 2vh;
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
  margin-top: 3vh;
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
