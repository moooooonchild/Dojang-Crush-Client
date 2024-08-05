import { useState, useRef, useEffect } from 'react';
import TopBarUpload from '../components/TopBarUpload';
import styled from 'styled-components';
import { ReactComponent as FirstUploadButton } from '../assets/ui/1stphoto_upload.svg';
import { ReactComponent as UploadButton } from '../assets/ui/photo_upload.svg';
import { DatePickerCalendar } from '../components/DatePicker';

import { postPost } from '../api/post';
import { useNavigate } from 'react-router-dom';
import { getMemberInfo } from '../api/member';

const UploadPage = () => {
    const [content, setContent] = useState('');
    const [placeId, setPlaceId] = useState(null);
    const [groupId, setGroupId] = useState(null);
    const [date, setDate] = useState(new Date());
    const [formattedDate, setFormattedDate] = useState('');
    const [images, setImages] = useState([]);
    const [prevImages, setPrevImages] = useState([]);
    const fileInputRef = useRef(null);
    const nav = useNavigate();

    useEffect(() => {
        const getGroupId = async () => {
            try {
                const res = await getMemberInfo();
                setGroupId(res.group.groupId);
            } catch (err) {
                console.log(err);
            }
        };

        getGroupId();
    }, []);

    useEffect(() => {
        const formatDate = (date) => {
            if (!date) return '';
            return date.toLocaleDateString('en-CA'); // "yyyy-MM-dd" 형식으로 반환
        };

        if (date) {
            setFormattedDate(formatDate(date));
        }
    }, [date]);

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        const newImages = []; //미리보기 이미지
        const fileObjects = []; //실제 보낼 이미지

        files.forEach((file) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                newImages.push(reader.result);
                fileObjects.push(file);

                if (newImages.length === files.length) {
                    setImages((prev) => [...prev, ...fileObjects].slice(0, 4)); // 서버에 보낼 파일을 설정 (최대 4개)
                    setPrevImages((prev) =>
                        [...prev, ...newImages].slice(0, 4)
                    );
                }
            };
            reader.readAsDataURL(file);
        });
    };

    const handleRemoveImage = (index) => {
        setImages(images.filter((_, i) => i !== index));
        setPrevImages(prevImages.filter((_, i) => i !== index));
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const onChangesPost = (e) => {
        const { value } = e.target;
        setContent(value);
    };

    const onClickUploadButton = () => {
        if (placeId === null) {
            alert('장소를 선택해주세요');
        } else if (content.trim() === '') {
            alert('내용을 입력해주세요.');
        } else if (images.length === 0) {
            alert('사진을 첨부해주세요.');
        } else {
            const data = {
                content: content,
                placeId: 3,
                groupId: groupId,
                visitedDate: formattedDate,
            };

            postPost(data, images);
            nav('/');
            window.location.reload();
        }
    };

    return (
        <UploadWrapper>
            <TopBarUpload text="Upload" onClickUpload={onClickUploadButton} />
            <ContentsWrapper>
                <DatePickerCalendar
                    selectedDate={date}
                    onDateChange={setDate}
                />
                <Tags>장소 선택</Tags>
                <Contents
                    type="text"
                    value={content}
                    placeholder="포스트를 작성해주세요"
                    onChange={onChangesPost}
                />
                <ImageContainer>
                    {prevImages.map((src, index) => (
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
                    {images.length === 0 && (
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
    gap: 2vh;
`;

const Tags = styled.div`
    width: 90vw;
    padding: 3vw;
    border: none;
    background-color: white;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
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
    align-items: center;
    gap: 2vw;
`;

const FirstImageUploadButton = styled(FirstUploadButton)`
    width: 25vw;
    height: 25vw;
    cursor: pointer;
`;

const ImageUploadButton = styled(UploadButton)`
    width: 25vw;
    height: 25vw;
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
    width: 20vw;
    height: 20vw;
    border-radius: 5px;
    object-fit: cover;
`;

const RemoveButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0.3vh;
    right: 0.3vh;

    border: none;
    border-radius: 50%;
    background: rgba(255, 0, 0, 0.7);
    width: 4vw;
    height: 4vw;
    color: white;
    cursor: pointer;
    font-size: 1.5rem;
`;
