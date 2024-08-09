import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TopBarWithBack from '../components/TopBarWithBack';
import { ModalComponent } from '../components/ModalComponent';
import { useNavigate } from 'react-router-dom';
import { patchGroupName } from '../api/group';
import { getMemberInfo } from '../api/member';

const ChangeGroupNamePage = () => {
    const [groupname, setGroupName] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState(null);
    const [groupId, setGroupId] = useState(null);

    const handleGroupNameChange = (e) => {
        setGroupName(e.target.value);
    };
    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const userInfo = await getMemberInfo();

                setUserInfo(userInfo);
                setGroupId(userInfo.group.groupId);
                setGroupName(userInfo.group.groupName);

                console.log('사용자 정보:', userInfo);
                console.log('그룹 아이디: ', groupId);
            } catch (err) {
                console.error('사용자 정보를 가져오는 데 실패했습니다:', err);
            }
        };
        getUserInfo();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await patchGroupName(groupId, groupname);
            setIsModalOpen(true);
        } catch (error) {
            alert('그룹명 변경에 실패했습니다. 다시 시도해주세요.');
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <ChangeNameWrapper>
            <TopBarWithBack text="그룹명 변경" />
            <form onSubmit={handleSubmit}>
                <ChangeNameInput
                    value={groupname}
                    onChange={handleGroupNameChange}
                    placeholder="그룹명"
                    required
                />
                <CheckBTN type="submit">변경하기</CheckBTN>
            </form>
            <ModalComponent
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Change Group Name"
                buttonText="완료"
                buttonAction={() => navigate(-1)}
            >
                정상적으로
                <br />
                변경 되었습니다.
            </ModalComponent>
        </ChangeNameWrapper>
    );
};

export default ChangeGroupNamePage;

const ChangeNameWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const ChangeNameInput = styled.input`
    display: flex;
    justify-content: center;
    width: 90vw;
    margin-top: 2vh;
    padding: 1vh 1vh;
    border: none;
    border-radius: 4px;

    font-size: 1rem;
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
    font-size: 1rem;
    font-weight: bold;
    &:hover {
        background-color: #c48a7a;
    }
`;
