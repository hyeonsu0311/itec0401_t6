import React from 'react';
import styles from './imageComponent.module.css';

function ImageComponent({ firstimage }) {
  return (
    <div id="picture" className={styles.picture}>
      <img src={firstimage} alt="여행 사진" />
    </div>
  );
}

export default ImageComponent;
