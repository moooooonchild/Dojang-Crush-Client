import styled from 'styled-components';
<style>
    @import
    url('https://fonts.googleapis.com/css2?family=Gaegu&family=Noto+Sans+KR:wght@100..900&display=swap');
</style>;

export const CalendarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;

    font-family: 'Noto Sans KR', sans-serif;
`;

export const MonthSelector = styled.div`
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: space-between;
    font-size: 1.25rem;
    margin: 1.2rem 0 1.2rem 0;
    font-weight: 600;
`;

export const WeekDaysaContainer = styled.div`
    display: flex;
`;

export const DateSelector = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`;

export const DateContainer = styled.div`
    background-color: #ffd0d0;
    box-shadow: 0 0 0.1rem rgba(0.1, 0, 0, 0.1);
    height: 5.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.3rem;
    align-items: center;
    font-size: 0.785rem;
    font-weight: 500;
    padding: 0.2rem;
    color: ${({ day }) =>
        day === 0 ? '#FF3300' : day === 6 ? '#0066FF' : 'black'};
`;

export const PrevDateContainer = styled(DateContainer)`
    background-color: #ffebeb;
    background-color: transparent;
    box-shadow: none;
    /* display: none; */
    /* color: #dedede; */
`;

export const IconsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.2rem;
    /* margin-top: 0.2rem; */
`;
