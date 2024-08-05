import React, { useState, useEffect } from 'react';

const useTimeSince = (createdDate) => {
    const [timeSince, setTimeSince] = useState('');

    useEffect(() => {
        const calculateTimeSince = () => {
            const now = new Date();
            const created = new Date(createdDate);
            const diffInMilliseconds = now - created;
            const diffInMinutes = Math.floor(diffInMilliseconds / 60000);
            const diffInHours = Math.floor(diffInMilliseconds / (60000 * 60));
            const diffInDays = Math.floor(
                diffInMilliseconds / (60000 * 60 * 24)
            );

            if (diffInMinutes < 60) {
                setTimeSince(`${diffInMinutes}분 전`);
            } else if (diffInHours < 24) {
                setTimeSince(`${diffInHours}시간 전`);
            } else {
                setTimeSince(`${diffInDays}일 전`);
            }
        };

        calculateTimeSince();
        const intervalId = setInterval(calculateTimeSince, 60000); // 1분마다 업데이트

        return () => clearInterval(intervalId);
    }, [createdDate]);

    return timeSince;
};

export default useTimeSince;
