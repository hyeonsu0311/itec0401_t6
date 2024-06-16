'use client'

import * as React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import ItemContainer from '@/components/recommend/ItemContainer';
import styles from './RecommendTemplate.module.css';
import { setLocation, setError } from '@/store/slices/locationSlice';
import Button from '@mui/joy/Button';
import LocationPopup from '../common/LocationPopup';

function secureUrl(url) {
    if (url && url.startsWith('http://')) {
      return url.replace('http://', 'https://');
    }
    return url;
  }
  
const RecommendTemplate = () => {
    const [topLikedPlaces, setTopLikedPlaces] = useState([]);
    const [recentPlaces, setRecentPlaces] = useState([]);

    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                const response = await fetch('/api/recommend');
                if (!response.ok) {
                    throw new Error('Failed to fetch recommendations');
                }
                const data = await response.json();
                setTopLikedPlaces(data.topLikedPlaces);
                setRecentPlaces(data.recentPlaces);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchRecommendations();
    }, []);

    const [showPopup, setShowPopup] = React.useState(false);
    const location = useSelector((state) => state.location.location);
    const dispatch = useDispatch();
    console.log(location);

    const handleOpenPopup = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const [places, setPlaces] = React.useState([]);
    useEffect(() => {
        const fetchPlaces = async () => {
            if (location) {
                const randomPageNo = Math.floor(Math.random() * 10) + 1; // 임의의 페이지 번호
                try {
                    const response = await axios.get('https://apis.data.go.kr/B551011/KorService1/locationBasedList1', {
                        params: {
                            numOfRows: 4,
                            pageNo: randomPageNo,
                            MobileOS: 'ETC',
                            MobileApp: 'trip',
                            serviceKey: 'XUwyR/mV8IUBoZtsh7NeDQG18pmA1/UY40IWuP1MZt3A+/s+xihFUEsy7bMXZ66sNmDVWxcTRu/jbm8Gu0r8qw==',
                            _type: 'json',
                            arrange: 'O Q R',
                            mapX: location.longitude,
                            mapY: location.latitude,
                            radius: 10000
                        },
                    });

                    const placesData = response.data.response.body.items.item.map(place => ({
                        addr: place.addr1,
                        image: secureUrl(place.firstimage) || '',
                        title: place.title,
                        contentid: place.contentid,
                        contenttypeid: place.contenttypeid,
                        areacode: place.areacode,
                        modifiedtime: place.modifiedtime || '',
                    }));
                    setPlaces(placesData);
                } catch (error) {
                    dispatch(setError(error.message));
                }
            }
        };

        fetchPlaces();
    }, [location, dispatch]);

    return (
        <div className={styles.RecommendTemplate}>
            <div className={styles.titleDiv}>
                <p className={styles.title}>추천 여행지</p>
                <p className={styles.content}> 나와 비슷한 성향의 사용자 데이터를 분석하여 맞춤형 여행 정보를 제공합니다.</p>
            </div>
            <strong className={styles.stit}>나만의 여행지: </strong>
            <ItemContainer />
            <div className={styles.titleContainer}>
            <strong className={styles.stit}>내 주변 여행지: </strong>
                {location ? (
                    ""
                ) : (
                    <Button
                     color="neutral"
                     variant="outlined"
                     onClick={handleOpenPopup} className={styles.locationButton}>위치 정보 수집</Button>
                )}
            </div>
            {showPopup && <LocationPopup onClose={handleClosePopup} />}
            <ItemContainer places={places} />
            <div className={styles.popular}>
                <strong className={styles.stit}>인기 여행지: </strong>
                <ItemContainer places={topLikedPlaces} />
            </div>
            <strong className={styles.stit}>최근 등록된 여행지: </strong>
            <ItemContainer places={recentPlaces} />
        </div>
    )
};

export default RecommendTemplate;