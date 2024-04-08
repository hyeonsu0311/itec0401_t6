import styles from "./CommunityFrame.module.css";
import React, { useState } from 'react';

const CommunityFrame = () => {

    const [items, setItems] = useState(["item1", "item2"]); // 초기 상태 설정
  
    const addItem = () => {
      const newItem = `item${items.length + 1}`;
      setItems([...items, newItem]); // 새로운 요소를 배열에 추가
    };
  
    const removeItem = () => {
      if (items.length > 0) {
        setItems(items.slice(0, -1)); // 배열에서 마지막 요소를 제거
      }
    };
  




  return (
    
    <div className={styles.searchButtonParent}>     
      <div className={styles.backgroundWrapper}>
      <div className={styles.searchButton}>
        <h1 className={styles.h1}>커뮤니티</h1>
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

    export default CommunityFrame;