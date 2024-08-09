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
    FoodIcon,
    CafeIcon,
    ExhibitionIcon,
    ShoppingIcon,
} from './Icons';
import { getMonthlyPosts } from '../../api/post';

const themeIcons = {
    스포츠: <SportsIcon key="sports" />,
    음악: <MusicIcon key="music" />,
    이색: <SpecialIcon key="special" />,
    힐링: <HealingIcon key="healing" />,
    게임: <GameIcon key="game" />,
    자연: <NatureIcon key="nature" />,
    맛집: <FoodIcon key="food" />,
    카페: <CafeIcon key="cafe" />,
    전시: <ExhibitionIcon key="exhibition" />,
    쇼핑: <ShoppingIcon key="shopping" />,
};

const Days = ['일', '월', '화', '수', '목', '금', '토'];
const WEEK_LENGTH = Object.keys(Days).length;

const createArray = (count) => {
    return new Array(count).fill(true);
};

const groupActivitiesByDate = (activities) => {
    return activities.reduce((acc, activity) => {
        const date = activity.visitedDate.split('T')[0]; // 날짜만 추출
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(activity);
        return acc;
    }, {});
};

const DateContainer = ({
    date,
    day,
    activities,
    setIsOpen,
    setDate,
    formattedDate,
}) => {
    const iconsToShow = [
        ...new Set(activities.map((activity) => activity.theme)),
    ].map((theme) => themeIcons[theme]);

    return (
        <S.DateContainer
            onClick={() => {
                setIsOpen(true);
                setDate(formattedDate);
            }}
            day={day}
        >
            {date}
            <S.IconsContainer>
                {iconsToShow.length > 0 ? iconsToShow : <></>}
            </S.IconsContainer>
        </S.DateContainer>
    );
};

export const Calendar = ({ setIsOpen, setDate }) => {
    const [monthlyPost, setMonthlyPost] = useState([]);

    const { currentDate, getFirstDay, getLastDate } = useCurrentDate();
    const [calendarDate, setCalendarDate] = useState(currentDate);

    const firstDay = getFirstDay(calendarDate);
    const lastDate = getLastDate(calendarDate);
    const currMonth = calendarDate.getMonth() + 1;
    const prevMonth = currMonth === 1 ? 12 : currMonth - 1;
    const nextMonth = currMonth === 12 ? 1 : currMonth + 1;

    const daysBeforeFirstDay = createArray(firstDay);
    const monthDays = createArray(lastDate);

    const groupedActivities = groupActivitiesByDate(monthlyPost);

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

    useEffect(() => {
        getMonthlyPosts(2024, currMonth).then((res) => {
            if (res && res.postList) {
                setMonthlyPost(res.postList);
            }
        });
    }, [currMonth]);

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
                        <S.PrevDateContainer key={idx}></S.PrevDateContainer>
                    );
                })}
                {monthDays.map((_, idx) => {
                    const dateStr = `${calendarDate.getFullYear()}-${String(
                        currMonth
                    ).padStart(2, '0')}-${String(idx + 1).padStart(2, '0')}`;
                    return (
                        <DateContainer
                            key={idx}
                            date={idx + 1}
                            day={(firstDay + idx) % WEEK_LENGTH}
                            activities={groupedActivities[dateStr] || []}
                            setIsOpen={setIsOpen}
                            formattedDate={dateStr}
                            setDate={setDate}
                        />
                    );
                })}
            </S.DateSelector>
        </S.CalendarContainer>
    );
};
