import { useState, useRef } from "react";
import TopBarUpload from "../components/TopBarUpload";
import styled from "styled-components";
import { ReactComponent as FirstUploadButton } from "../assets/ui/1stphoto_upload.svg";
import { ReactComponent as UploadButton } from "../assets/ui/photo_upload.svg";

const UploadPage = () => {
    const [images, setImages] = useState([]);
    const fileInputRef = useRef(null);

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        const newImages = [];

        files.forEach((file) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                newImages.push(reader.result);
                if (newImages.length === files.length) {
                    setImages((prevImages) =>
                        [...prevImages, ...newImages].slice(0, 4)
                    );
                }
            };
            reader.readAsDataURL(file);
        });
    };

    const handleRemoveImage = (index) => {
        setImages(images.filter((_, i) => i !== index));
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };

    return (
        <UploadWrapper>
            <TopBarUpload text="Upload" />
            <ContentsWrapper>
                <Tags />
                <Contents />
                <ImageContainer>
                    {images.map((src, index) => (
                        <ImagePreviewWrapper key={index}>
                            <RemoveButton
                                onClick={() => handleRemoveImage(index)}
                            >
                                X
                            </RemoveButton>
                            <ImagePreview
                                src={src}
                                alt={`uploaded image ${index + 1}`}
                            />
                        </ImagePreviewWrapper>
                    ))}
                    {images.length == 0 && (
                        <>
                            <FirstImageUploadButton onClick={handleClick} />
                            <IMGBox
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleImageUpload}
                                ref={fileInputRef}
                            />
                        </>
                    )}
                    {images.length > 0 && images.length < 4 && (
                        <>
                            <ImageUploadButton onClick={handleClick} />
                            <IMGBox
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleImageUpload}
                                ref={fileInputRef}
                            />
                        </>
                    )}
                </ImageContainer>
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

const ImageContainer = styled.div`
    display: flex;
    align-items: start;
    gap: 2vw;
`;

const FirstImageUploadButton = styled(FirstUploadButton)`
    cursor: pointer;
`;

const ImageUploadButton = styled(UploadButton)`
    cursor: pointer;
`;
const IMGBox = styled.input`
    display: none;
`;
const ImagePreviewWrapper = styled.div`
    position: relative;
    display: inline-block;
`;

const ImagePreview = styled.img`
    max-width: 20vw;
    max-height: 15vh;
    border-radius: 5px;
    object-fit: cover;
`;

const RemoveButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0.2vh;
    right: 0.2vh;
    width: 1vh;
    height: 1vh;
    border: none;
    border-radius: 50%;
    background: rgba(255, 0, 0, 0.7);
    width: 1vh;
    height: 1vh;
    color: white;
    cursor: pointer;
    font-size: 1rem;
`;
