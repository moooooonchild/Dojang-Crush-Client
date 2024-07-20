import styled from "styled-components";
import TopBarWithSetting from "../components/TopBarWithSetting";
import { ReactComponent as PersonUI } from "../assets/ui/person.svg";
import NavigationBar from "../components/NavigationBar";

const GroupPage = () => {
    return (
        <GroupPageWrapper>
            <TopBarWithSetting text="Group Page" />
            <GroupInfo>
                <GroupName>그룹명</GroupName>
                <MemberWrapper>
                    <GroupLeader />
                    <Name>그룹장</Name>
                </MemberWrapper>

                <GroupMembers>
                    <MemberWrapper>
                        <GroupMember />
                        <Name>그룹원</Name>
                    </MemberWrapper>
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
const GroupLeader = styled(PersonUI)`
    width: 26vw;
    height: auto;
`;

const Name = styled.div`
    font-size: 2.5rem;
    font-weight: bold;
`;

const GroupMembers = styled.div`
    display: flex;
    gap: 10vw;
`;
const GroupMember = styled(PersonUI)`
    width: 26vw;
    height: auto;
`;
