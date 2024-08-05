import styled from 'styled-components';

// profile lines

export const ProfileContainer = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    justify-content: flex-start;
    gap: 0.7rem;
    align-items: center;
`;

export const ProfileImageContainer = styled.img`
    display: flex;
    width: 2.3rem;
    height: 2.3rem;
    border-radius: 0.625rem;
`;

export const ProfileName = styled.div`
    display: flex;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.875rem;
`;

export const UploadTime = styled.div`
    display: flex;
    position: absolute;
    right: 0;
`;

// images

export const ImageContainer = styled.div`
    display: flex;
    width: 100%;
    height: 20rem;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);
    border-radius: 0.3rem;
`;

export const Image = styled.img`
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 0.025rem;
    object-fit: cover;
`;

// hashtag lines
export const HashTagContainer = styled.div`
    display: flex;
    justify-content: baseline;
    align-items: center;
    position: relative;
    width: 100%;
    gap: 0.2rem;
    /* border: solid 1px; */
`;

export const HastTagText = styled.span`
    display: flex;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.875rem;
`;

export const LikeIconContainer = styled.div`
    display: flex;
    position: absolute;
    right: 0;
`;

export const EmptyLikeIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.3rem"
        height="1.3rem"
        viewBox="0 0 18 18"
        fill="none"
    >
        <path
            d="M12.1489 4.60269C13.046 4.90517 13.6834 5.75531 13.7631 6.75556M8.79875 16.87C6.97086 15.6826 5.27041 14.285 3.72782 12.7024C2.64332 11.5626 1.81769 10.1731 1.31419 8.64034C0.408121 5.66694 1.46647 2.26296 4.42831 1.25557C5.98494 0.726609 7.68501 1.02894 8.99671 2.06798C10.3089 1.0302 12.0084 0.72798 13.5651 1.25557C16.527 2.26296 17.5929 5.66694 16.6868 8.64034C16.1833 10.1731 15.3577 11.5626 14.2732 12.7024C12.7306 14.285 11.0302 15.6826 9.20229 16.87L9.00432 17L8.79875 16.87Z"
            stroke="#612D1C"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
);

export const FillLikeIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.3rem"
        height="1.3rem"
        viewBox="0 0 18 18"
        fill="none"
    >
        <path
            d="M5.02396 0.000130242C5.52796 0.0162644 6.01595 0.108894 6.48874 0.278155H6.53594C6.56794 0.294155 6.59194 0.311839 6.60794 0.327838C6.78474 0.387627 6.95194 0.454994 7.11194 0.547624L7.41594 0.69078C7.53593 0.758147 7.67993 0.883618 7.75993 0.934986C7.83993 0.984669 7.92793 1.03604 7.99993 1.09414C8.88872 0.379206 9.96791 -0.00815621 11.0799 0.000130242C11.5847 0.000130242 12.0887 0.0752108 12.5679 0.244471C15.5206 1.25498 16.5846 4.66545 15.6958 7.64645C15.1919 9.1698 14.3679 10.5601 13.2887 11.6961C11.7439 13.2708 10.0487 14.6687 8.22393 15.8728L8.02393 16L7.81593 15.8644C5.98475 14.6687 4.27997 13.2708 2.72078 11.6877C1.6488 10.5517 0.824005 9.1698 0.31201 7.64645C-0.591981 4.66545 0.472009 1.25498 3.45678 0.226787C3.68877 0.142578 3.92797 0.0836317 4.16797 0.0507902H4.26397C4.48877 0.0162644 4.71196 0.000130242 4.93596 0.000130242H5.02396ZM12.1519 2.66127C11.8239 2.54254 11.4639 2.72864 11.3439 3.08232C11.2319 3.436 11.4079 3.82336 11.7439 3.94883C12.2567 4.15093 12.5999 4.68229 12.5999 5.27091V5.29702C12.5847 5.48986 12.6399 5.67596 12.7519 5.81912C12.8639 5.96227 13.0319 6.04564 13.2079 6.06332C13.5359 6.05406 13.8159 5.77701 13.8399 5.42249V5.32228C13.8639 4.14251 13.1847 3.0739 12.1519 2.66127Z"
            fill="#200E32"
        />
    </svg>
);

// post component

export const PostContainer = styled.div`
    display: flex;
    width: 100vw;
    padding: 1.5rem;
    flex-direction: column;
    gap: 0.7rem;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);
`;
