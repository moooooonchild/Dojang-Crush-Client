import React, { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

export const DatePickerCalendar = ({ selectedDate, onDateChange }) => {
    const CustomInput = forwardRef(({ value, onClick }, ref) => (
        <StyledInput
            type="text"
            className="custom-input"
            value={value}
            onClick={onClick}
            ref={ref}
        ></StyledInput>
    ));

    return (
        <StyledDatePicker>
            <DatePicker
                dateFormat="yyyy.MM.dd"
                shouldCloseOnSelect
                minDate={new Date('2024-01-01')}
                maxDate={new Date()}
                selected={selectedDate}
                onChange={(date) => onDateChange(date)}
                customInput={<CustomInput />}
            />
        </StyledDatePicker>
    );
};

const StyledInput = styled.input`
    width: 90vw;
    padding: 3vw;
    border: none;
    background-color: white;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
`;

const StyledDatePicker = styled.div`
    .react-datepicker-popper * {
        font-size: 1.5rem; /* 텍스트 크기 증가 */
    }

    .react-datepicker__header {
        padding-top: 1em;
    }

    .react-datepicker__day,
    .react-datepicker__day-name {
        width: 3em;
        height: 3em;
        line-height: 3em;
    }

    .react-datepicker__current-month {
        font-size: 2rem;
    }

    .react-datepicker__day--selected,
    .react-datepicker__day--keyboard-selected {
        background-color: #ffeee9;
        color: black;
    }

    .react-datepicker__day--today {
        font-weight: bold;
        color: #ff5722;
    }

    .react-datepicker__navigation--previous,
    .react-datepicker__navigation--next {
        width: 10em; /* 너비 설정 */
        height: 4em; /* 높이 설정 */
        background-size: 4rem; /* 아이콘 크기 설정 */
    }
`;
