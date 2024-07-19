import TopBarUpload from "../components/TopBarUpload";
import styled from "styled-components";

const UploadPage = () => {
  return (
    <UploadWrapper>
      <TopBarUpload text="Upload" />
      <ContentsWrapper>
        <Tags />
        <Contents />
        <IMGBox type="file" accept="image/*" />
      </ContentsWrapper>
    </UploadWrapper>
  );
};

export default UploadPage;

const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vh;
`;

const Tags = styled.input`
  width: 90vw;
  padding: 3vw;
  border: none;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  font-size: 2.5rem;
`;

const Contents = styled.textarea`
  width: 90vw;
  height: 40vh;
  padding: 3vw;
  border: none;
  font-size: 2rem;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;

const IMGBox = styled.input`
  border: none;
`;
