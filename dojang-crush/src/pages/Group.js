import styled from 'styled-components';
import TopBarWithSetting from '../components/TopBarWithSetting';
import { ReactComponent as PersonUI } from '../assets/ui/person.svg';
import { getGroupMember } from '../api/group';
import { useParams } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import { useEffect, useState } from 'react';
import { getMemberInfo } from '../api/member';

const GroupPage = () => {
    const [groupName, setGroupName] = useState('그룹명');
    const [groupLeader, setGroupLeader] = useState(null);
    const [groupMembers, setGroupMembers] = useState([]);
    const [userInfo, setUserInfo] = useState(null);
    const [groupId, setGroupId] = useState(null);

    useEffect(() => {
        const fetchMemberInfo = async () => {
            try {
                const userInfo = await getMemberInfo();
                setUserInfo(userInfo);
                // console.log('사용자 정보:', userInfo);

                const token = localStorage.getItem('token');
                console.log('토큰:', token);
                if (!token) {
                    alert('로그인이 필요합니다.');
                    window.location.href = '/register';
                }

                if (userInfo.group) {
                    const { groupId, groupName } = userInfo.group;
                    setGroupId(groupId);
                    setGroupName(groupName);
                }
            } catch (err) {
                console.error('사용자 정보를 가져오는 데 실패했습니다:', err);
            }
        };
        fetchMemberInfo();
    }, []);

    useEffect(() => {
        const fetchGroupMembers = async () => {
            try {
                const data = await getGroupMember(groupId);

                const leader = data.member.find((member) => member.leader);
                setGroupLeader(leader);

                setGroupMembers(data.member.filter((member) => !member.leader));
            } catch (error) {
                console.error('그룹원 조회에 실패했습니다', error);
            }
        };
        fetchGroupMembers();
    }, [groupId]);

    return (
        <GroupPageWrapper>
            <TopBarWithSetting text="Group Page" />
            <GroupInfo>
                <GroupName>{groupName}</GroupName>
                {groupLeader && (
                    <MemberWrapper>
                        {groupLeader.profileImageUrl ? (
                            <ProfileImage
                                src={groupLeader.profileImageUrl}
                                alt="Group Leader"
                            />
                        ) : (
                            <GroupMemberUI />
                        )}
                        <Name>{groupLeader.name} (그룹장)</Name>
                    </MemberWrapper>
                )}
                <GroupMembers>
                    {groupMembers.map((member) => (
                        <MemberWrapper key={member.id}>
                            {member.profileImageUrl ? (
                                <ProfileImage
                                    src={member.profileImageUrl || ''}
                                    alt="Group Member"
                                />
                            ) : (
                                <GroupMemberUI />
                            )}

                            <Name>{member.name}</Name>
                        </MemberWrapper>
                    ))}
                </GroupMembers>
            </GroupInfo>
            <NavigationBar />
        </GroupPageWrapper>
    );
};

export default GroupPage;

const GroupPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

// 그룹명&그룹원
const GroupInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80vw;
    margin-top: 6vh;
    gap: 10vh;
`;
const GroupName = styled.div`
    font-size: 1rem;
    font-weight: bold;
`;

const MemberWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1vh;
`;

const Name = styled.div`
    font-size: 0.8rem;
    font-weight: bold;
`;

const GroupMembers = styled.div`
    display: flex;
    gap: 10vw;
`;

const ProfileImage = styled.img`
    width: 26vw;
    height: auto;
    border-radius: 10%;
`;

const GroupMemberUI = styled(PersonUI)`
    width: 26vw;
    height: auto;
`;
