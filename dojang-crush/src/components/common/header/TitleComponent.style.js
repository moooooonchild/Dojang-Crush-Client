import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0.625rem;
`;

export const LeftIconContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
    flex: 2;
`;

export const RightIconContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BackBtn = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5rem"
        height="1.5rem"
        viewBox="0 0 19 18"
        fill="none"
    >
        <path
            d="M17.3021 7.49996H5.91238L10.8644 2.56902C11.147 2.2868 11.3058 1.90402 11.3058 1.5049C11.3058 1.10577 11.147 0.722997 10.8644 0.440774C10.5819 0.158551 10.1986 0 9.79899 0C9.39937 0 9.01612 0.158551 8.73355 0.440774L1.23043 7.9346C1.09381 8.07714 0.986723 8.24522 0.915301 8.42919C0.765212 8.79408 0.765212 9.20336 0.915301 9.56825C0.986723 9.75223 1.09381 9.92031 1.23043 10.0628L8.73355 17.5567C8.87305 17.6971 9.03902 17.8086 9.22189 17.8847C9.40475 17.9608 9.60089 18 9.79899 18C9.99709 18 10.1932 17.9608 10.3761 17.8847C10.559 17.8086 10.7249 17.6971 10.8644 17.5567C11.0051 17.4173 11.1167 17.2516 11.1929 17.0689C11.2691 16.8863 11.3083 16.6904 11.3083 16.4925C11.3083 16.2947 11.2691 16.0988 11.1929 15.9162C11.1167 15.7335 11.0051 15.5678 10.8644 15.4284L5.91238 10.4975H17.3021C17.7001 10.4975 18.0818 10.3396 18.3632 10.0585C18.6446 9.77744 18.8027 9.39622 18.8027 8.99872C18.8027 8.60122 18.6446 8.22001 18.3632 7.93893C18.0818 7.65786 17.7001 7.49996 17.3021 7.49996Z"
            fill="#612D1C"
            fill-opacity="0.8"
        />
    </svg>
);
