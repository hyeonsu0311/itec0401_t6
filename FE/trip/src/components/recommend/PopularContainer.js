import React from 'react';
import PopluarItem from './PopularItem'
import styles from './PopularContainer.module.css';

const PopluarItem = ({ places }) => {
    return (
        <div className={styles.container}>
            {Array.isArray(places) && places.length > 0 ? (
                places.map((place, index) => (
                    <PopluarItem key={index} place={place} />
                ))
            ) : (
                <p className={styles.grayText}>등록된 여행지 없음</p>
            )}
        </div>
    );
};

export default PopluarItem;
