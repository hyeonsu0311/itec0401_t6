import styles from "./FrameComponent1.module.css";

const FrameComponent1 = () => {
  return (
    <div className={styles.image20Parent}>
      <img className={styles.image20Icon} alt="" src="/image-20@2x.png" />
      <h1 className={styles.h1}>
        <span>100곳 이상의</span>
        <span className={styles.span}>
          {" "}
          여행지를 탐색하고 다양한 여행 계획을 세워 보세요!
        </span>
      </h1>
      <div className={styles.componentCard}>
        <div className={styles.globalMediaLandscape}>
          <div className={styles.professionalsAndPlaces}>
            <h1 className={styles.h11}> 찾고 싶은 여행지 정보</h1>
          </div>
          <div className={styles.productInfo}>
            <div className={styles.productInfoChild} />
            <img
              className={styles.searchIcon}
              loading="lazy"
              alt=""
              src="/search.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
