import styles from "./RouteFrame.module.css";
import React, { useState } from 'react';

const RouteFrame = () => {

  return (
    <div className={styles.searchButtonParent}>
      
      <div className={styles.backgroundWrapper}>
      <div className={styles.searchButton}>
        <h1 className={styles.h1}>여행경로 찾기</h1>
        <div className={styles.whatAreYouLookingForParent}>
          <input
            className={styles.whatAreYouLookingFor}
            placeholder="What are you looking for?"
            type="text"
          />
          <div className={styles.vectorParent}>
            <img className={styles.frameChild} alt="" src="/rectangle-1.svg" />
            <img className={styles.searchIcon} alt="" src="/search.svg" />
          </div>
        </div>
      </div>
        
      </div>
      <div className={styles.frameWrapper}>
      
    
      </div>
      <div className={styles.frameWrapperButton}>

      <button className={styles.button}>더 보기</button>
      </div>
    </div>)}

    export default RouteFrame;