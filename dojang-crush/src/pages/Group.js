import styled from "styled-components";
import TopBarWithSetting from "../components/TopBarWithSetting";
import { ReactComponent as PersonUI } from "../assets/ui/person.svg";
import { getGroupMember } from "../api/group";
import { useParams } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import { useEffect, useState } from "react";

const GroupPage = ({ groupId }) => {
    const [groupName, setGroupName] = useState("그룹명");
    const [groupLeader, setGroupLeader] = useState(null);
    const [groupMembers, setGroupMembers] = useState([]);

    useEffect(() => {
        const fetchGroupMembers = async () => {
            try {
                const data = await getGroupMember(groupId);
                const leader = data.members.reduce((prev, curr) => {
                    return prev.id < curr.id ? prev : curr;
                }, data.members[0]);
                setGroupLeader(leader);
                setGroupName(data.groupName);
                const members = data.members.filter(
                    (member) => member.id !== leader.id
                );
                setGroupMembers(members);
            } catch (error) {
                console.log("그룹원 조회에 실패했습니다", error);
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
                        <Name>{groupLeader.nickname} (그룹장)</Name>
                    </MemberWrapper>
                )}
                <GroupMembers>
                    {groupMembers.map((member) => (
                        <MemberWrapper key={member.id}>
                            {member.profileImageUrl ? (
                                <ProfileImage
                                    src={member.profileImageUrl || ""}
                                    alt="Group Member"
                                />
                            ) : (
                                <GroupMemberUI />
                            )}

                            <Name>{member.nickname}</Name>
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
    font-size: 3.5rem;
    font-weight: bold;
`;

const MemberWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1vh;
`;

const Name = styled.div`
    font-size: 2.5rem;
    font-weight: bold;
`;

const GroupMembers = styled.div`
    display: flex;
    gap: 10vw;
`;

const ProfileImage = styled.img`
    width: 26vw;
    height: auto;
    border-radius: 50%;
`;

const GroupMemberUI = styled(PersonUI)`
    width: 26vw;
    height: auto;
`;
