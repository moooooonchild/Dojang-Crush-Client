import { useState } from 'react';

const useCurrentDate = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const getPrevMonth = () => {
        return currentDate.setMonth(currentDate.getMonth() - 1);
    };
    const getNextMonth = () => {
        return currentDate.setMonth(currentDate.getMonth() + 1);
    };

    const getPrevDate = () => {
        currentDate.setDate(currentDate.getDate() - 1);
        setCurrentDate(new Date(currentDate));
    };
    const getNextDate = () => {
        currentDate.setDate(currentDate.getDate() + 1);
        setCurrentDate(new Date(currentDate));
    };

    const getNewDate = ({ year, month, date }) => {
        setCurrentDate(new Date(year, month, date));
    };

    const getFirstDay = (date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const getLastDate = (date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const getMonth = (date) => {
        return date.getMonth();
    };

    const getYear = (date) => {
        return date.getFullYear();
    };

    const getDate = (date) => {
        return date.getDate();
    };

    const getDay = (date) => {
        return date.getDay();
    };

    const getFormattedDate = (date) => {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    };

    return {
        currentDate,
        getPrevMonth,
        getNextMonth,
        getPrevDate,
        getNextDate,
        getNewDate,
        getFirstDay,
        getLastDate,
        getMonth,
        getYear,
        getDate,
        getFormattedDate,
        // getLastDay,
        getDay,
    };
};

export default useCurrentDate;
