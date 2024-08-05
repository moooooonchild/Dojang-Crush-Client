import React, { useEffect, useState } from 'react';
import * as S from './Calendar.style';
import useCurrentDate from '../../hooks/useCurrentDate';
import {
    GameIcon,
    HealingIcon,
    MusicIcon,
    NatureIcon,
    SpecialIcon,
    SportsIcon,
} from './Icons';

const Days = ['일', '월', '화', '수', '목', '금', '토'];
const WEEK_LENGTH = Object.keys(Days).length;

const createArray = (count) => {
    return new Array(count).fill(true);
};

const DateContainer = ({ date, day, setIsOpen, modalContent }) => {
    return (
        <S.DateContainer
            onClick={() => {
                setIsOpen(true);
                modalContent(date);
            }}
            day={day}
        >
            {date}
            <S.IconsContainer>
                <SportsIcon />
                <MusicIcon />
                <SpecialIcon />
                <HealingIcon />
                <GameIcon />
                <NatureIcon />
            </S.IconsContainer>
        </S.DateContainer>
    );
};

export const Calendar = ({ setIsOpen, modalContent }) => {
    const { currentDate, getFirstDay, getDay, getLastDate } = useCurrentDate();
    const [calendarDate, setCalendarDate] = useState(currentDate);

    const firstDay = getFirstDay(calendarDate);
    const lastDate = getLastDate(calendarDate);
    const currMonth = calendarDate.getMonth() + 1;
    const prevMonth = currMonth === 1 ? 12 : currMonth - 1;
    const nextMonth = currMonth === 12 ? 1 : currMonth + 1;

    const daysBeforeFirstDay = createArray(firstDay);
    const monthDays = createArray(lastDate);

    const handlePrevMonth = () => {
        calendarDate.setMonth(calendarDate.getMonth() - 1);
        setCalendarDate(new Date(calendarDate));
    };

    const handleNextMonth = () => {
        calendarDate.setMonth(calendarDate.getMonth() + 1);
        setCalendarDate(new Date(calendarDate));
    };

    useEffect(() => {
        setCalendarDate(currentDate);
    }, [currentDate]);

    return (
        <S.CalendarContainer>
            <S.MonthSelector>
                <div onClick={handlePrevMonth}>{prevMonth}월</div>
                <div>{`${calendarDate.getFullYear()}년 ${currMonth}월`}</div>
                <div onClick={handleNextMonth}>{nextMonth}월</div>
            </S.MonthSelector>
            <S.DateSelector>
                {daysBeforeFirstDay.map((_, idx) => {
                    return (
                        <S.PrevDateContainer key={idx}>
                            {/* {idx} */}
                        </S.PrevDateContainer>
                    );
                })}
                {monthDays.map((_, idx) => {
                    return (
                        <DateContainer
                            date={idx + 1}
                            day={(firstDay + idx) % WEEK_LENGTH}
                            calendarDate={calendarDate}
                            setIsOpen={setIsOpen}
                            modalContent={modalContent}
                        ></DateContainer>
                    );
                })}
            </S.DateSelector>
        </S.CalendarContainer>
    );
};
