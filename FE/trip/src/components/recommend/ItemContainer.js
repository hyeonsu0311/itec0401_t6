import React from 'react';
import RecommendItem from './RecommendItem';
import styles from './ItemContainer.module.css';

const ItemContainer = ({ places }) => {
    return (
        <div className={styles.container}>
            {places.map((place, index) => (
                <RecommendItem key={index} place={place} />
            ))}
        </div>
    );
}

export default ItemContainer;
