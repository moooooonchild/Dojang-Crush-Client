import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getAllPlaces } from '../api/place';

export const SearchPlace = ({ setPlaceId, prevPlace = null }) => {
    const [placeList, setPlaceList] = useState([]);
    const [myPlace, setMyPlace] = useState('');
    const [showList, setShowList] = useState(false);

    useEffect(() => {
        const getPlaces = async () => {
            try {
                const res = await getAllPlaces();
                setPlaceList(res);
            } catch (err) {
                console.error(err);
            }
        };

        getPlaces();
    }, []);

    useEffect(() => {
        if (placeList.length > 0 && prevPlace) {
            setMyPlace(prevPlace);
            const place = placeList.find((p) => p.placeName === prevPlace);
            if (place) {
                setPlaceId(place.placeId);
            }
        }
    }, [placeList, prevPlace]);

    const onChangePlace = (e) => {
        const value = e.target.value;
        setMyPlace(value);

        if (value.trim() === '') {
            setShowList(false);
        } else {
            setShowList(true);
        }
    };

    const onClickPlace = (place) => {
        setShowList(false);
        setPlaceId(place.placeId);
        setMyPlace(place.placeName);
    };

    const filterPlaces = placeList.filter((place) =>
        place.placeName.includes(myPlace)
    );

    return (
        <Container>
            <Tags
                type="text"
                value={myPlace}
                placeholder="장소 검색"
                onChange={onChangePlace}
            />
            <PlaceList>
                {showList &&
                    filterPlaces.map((place, index) => (
                        <Place
                            key={index}
                            onClick={() => {
                                onClickPlace(place);
                            }}
                        >
                            {place.placeName}
                        </Place>
                    ))}
            </PlaceList>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
`;

const Tags = styled.input`
    width: 90vw;
    padding: 3vw;
    border: none;
    background-color: white;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    font-size: 1.3rem;
    font-weight: bold;
    text-align: center;
`;

const PlaceList = styled.div`
    position: absolute;
    top: 100%;
    max-height: 40vh;
    overflow-y: scroll;
    z-index: 10;
`;

const Place = styled.div`
    width: 90vw;
    padding: 3vw;
    border: none;
    background-color: #f5f5f5;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
`;
