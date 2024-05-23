import styles from "./MainCenter1.module.css";

const MainCenter1 = () => {
  return (
    <div className={styles.appDownloadsParent}>
      <div className={styles.appDownloads}>
        <div className={styles.wrapper}>
          <h1 className={styles.h1}>{`국내 여행지 `}</h1>
        </div>
        <div className={styles.copyrightNoticeWrapper}>
          <button className={styles.copyrightNotice}>
            <div className={styles.div}>정보 컨텐츠</div>
          </button>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <button className={styles.baseParent}>
          <img className={styles.baseIcon} alt="" src="/icons/base.svg" />
          <div className={styles.button}>View all</div>
          <div className={styles.professorsStudentsLibraries}>
            <img
              className={styles.arrowRightIcon}
              alt=""
              src="/arrowright.svg"
            />
          </div>
        </button>
      </div>
    </div>
    ) 
}

export default MainCenter1;