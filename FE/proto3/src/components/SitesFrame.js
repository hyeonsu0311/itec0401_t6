import styles from "./SitesFrame.module.css";
import React, { useState } from 'react';

const SitesFrame = () => {

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
        <h1 className={styles.h1}>여행지 탐색</h1>
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
      {items.map((item, index) => (
          <div key={index} 
          className={styles.frameParent}
          
          
          >{item}</div> // 배열의 각 요소를 반복하여 컴포넌트를 렌더링
        ))}
        <div className={styles.frameParent}>
        <button onClick={addItem}>Add Item</button> {/* 아이템 추가 버튼 */}
        <button onClick={removeItem}>Remove Item</button>
        </div>
      </div>
      <div className={styles.frameWrapperButton}>

      <button className={styles.button}>더 보기</button>
      </div>
    </div>)}

    export default SitesFrame;