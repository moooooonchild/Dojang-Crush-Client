import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 0.625rem;
`;

export const LeftIconContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 4rem;
  line-height: 6rem;
  font-weight: 700;
  flex: 2;
`;

export const RightIconContainer = styled.div`
  flex: 1;
`;

export const BackBtn = ({ width = "36px", height = "36px" }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='3rem'
    height='3rem'
    viewBox='0 0 18 18'
  >
    <path
      d='M16.4994 7.49996H5.10964L10.0617 2.56902C10.3443 2.2868 10.503 1.90402 10.503 1.5049C10.503 1.10577 10.3443 0.722997 10.0617 0.440774C9.77913 0.158551 9.39588 0 8.99626 0C8.59664 0 8.21339 0.158551 7.93082 0.440774L0.427698 7.9346C0.29108 8.07714 0.183988 8.24522 0.112567 8.42919C-0.0375223 8.79408 -0.0375223 9.20336 0.112567 9.56825C0.183988 9.75223 0.29108 9.92031 0.427698 10.0628L7.93082 17.5567C8.07032 17.6971 8.23629 17.8086 8.41915 17.8847C8.60202 17.9608 8.79816 18 8.99626 18C9.19436 18 9.3905 17.9608 9.57336 17.8847C9.75623 17.8086 9.9222 17.6971 10.0617 17.5567C10.2024 17.4173 10.314 17.2516 10.3902 17.0689C10.4664 16.8863 10.5056 16.6904 10.5056 16.4925C10.5056 16.2947 10.4664 16.0988 10.3902 15.9162C10.314 15.7335 10.2024 15.5678 10.0617 15.4284L5.10964 10.4975H16.4994C16.8974 10.4975 17.2791 10.3396 17.5605 10.0585C17.8419 9.77744 18 9.39622 18 8.99872C18 8.60122 17.8419 8.22001 17.5605 7.93893C17.2791 7.65786 16.8974 7.49996 16.4994 7.49996Z'
      fill='#612D1C'
      fillOpacity='0.8'
    />
  </svg>
);
