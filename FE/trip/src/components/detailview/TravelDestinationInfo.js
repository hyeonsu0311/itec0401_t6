
import React, { useState, useEffect } from 'react';
import styles from './TravelDestinationInfo.module.css';

function TravelDestinationInfo({ info }) {
  return (
    <div className={styles.TitleBar}>
      <strong className={styles.Title}>
        {info}
      </strong>
      
      <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
          <li><a href="#picture">사진보기</a></li>
          <li><a href="#map">위치정보</a></li>
          <li><a href="#detail">상세정보</a></li>
        </ul>
      </nav>

    </div>
  );
}

export default TravelDestinationInfo;



