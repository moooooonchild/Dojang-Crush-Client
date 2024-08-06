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
    font-size: 1.3rem;
    font-weight: bold;
    text-align: center;
`;

const StyledDatePicker = styled.div`
    .react-datepicker__day--selected,
    .react-datepicker__day--keyboard-selected {
        background-color: #ffeee9;
        color: black;
    }

    .react-datepicker__day--today {
        font-weight: bold;
        color: #ff5722;
    }
`;
