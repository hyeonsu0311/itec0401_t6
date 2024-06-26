import React from 'react';
import RecommendItem from './RecommendItem';
import styles from './ItemContainer.module.css';

const ItemContainer = ({ places }) => {
    return (
        <div className={styles.container}>
            {Array.isArray(places) && places.length > 0 ? (
                places.map((place, index) => (
                    <RecommendItem key={index} place={place} />
                ))
            ) : (
                <p className={styles.grayText}>등록된 여행지 없음</p>
            )}
        </div>
    );
};

export default ItemContainer;
