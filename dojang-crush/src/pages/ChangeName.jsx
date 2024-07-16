import styled from "styled-components";
import TopBarWithBack from "../components/TopBarWithBack";
import { useNavigate } from "react-router-dom";

const ChangeNamePage = () => {
  const navigate = useNavigate();
  return (
    <ChangeNameWrapper>
      <TopBarWithBack text="이름 변경" />
      <ChangeNameInput placeholder="&nbsp; 이름" />
      <CheckBTN onClick={() => navigate(-1)}>변경하기</CheckBTN>
    </ChangeNameWrapper>
  );
};

export default ChangeNamePage;

const ChangeNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChangeNameInput = styled.input`
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
