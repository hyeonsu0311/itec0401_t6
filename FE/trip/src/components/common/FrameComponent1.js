import styles from "./FrameComponent1.module.css";

const FrameComponent1 = () => {
  return (
    <div className={styles.image20Parent}>
      <img className={styles.image20Icon} alt="" src="/images/backgroundMain.jpg" />
      <h1 className={styles.h1}>
        <span>100곳 이상의</span>
        <span className={styles.span}>
          {" "}
          여행지를 탐색하고 다양한 여행 계획을 세워 보세요!
        </span>
      </h1>
      <div className={styles.componentCard}>
        <div className={styles.globalMediaLandscape}>
          <input className={styles.professionalsAndPlaces}
           placeholder="검색어를 입력하세요">
           
          </input>
          <div className={styles.productInfo}>
            <div className={styles.productInfoChild} />
            <img
              className={styles.searchIcon}
              loading="lazy"
              alt=""
              src="/icons/search.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
