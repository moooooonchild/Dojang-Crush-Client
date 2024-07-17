import { useState, useRef } from "react";
import TopBarUpload from "../components/TopBarUpload";
import styled from "styled-components";
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
                    {images.length < 4 && (
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
    max-width: 200px;
    max-height: 200px;
    object-fit: cover;
    border-radius: 5px;
`;

const RemoveButton = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    background: rgba(255, 0, 0, 0.7);
    color: white;
    border: none;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    cursor: pointer;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;
