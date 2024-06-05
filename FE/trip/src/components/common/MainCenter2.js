import styles from "./MainCenter2.module.css";

const MainCenter2 = () => {
  return (
    <div className={styles.frameWrapper}> 
      <div className={styles.frameParent}>
        <div className={styles.componentcardplacecardGenWrapper}>
          <div className={styles.componentcardplacecardGen}>
            <img
              className={styles.componentcardglobalmediaIcon}
              loading="lazy"
              alt=""
              src="/images/componentcardglobalmedia-landscape@2x.png"
            />
            <div className={styles.componentcardglobaldark}>
              국내 여행지 종합 정보
            </div>
            <div className={styles.componentcardglobaldark1}>
              전국 여행지, 관광명소, 문화공간 등을 한 눈에 볼 수 있습니다.
            </div>
            <button className={styles.controlsbuttonmediumbright}>
              <div className={styles.base} />
              <div className={styles.button}>더보기</div>
            </button>
          </div>
        </div>
        <div className={styles.componentcardplacecardGen1}>
          <img
            className={styles.componentcardglobalmediaIcon1}
            alt=""
            src="/images/componentcardglobalmedia-landscape-1@2x.png"
          />
          <div className={styles.componentcardglobaldark2}>여행지 추천</div>
          <div className={styles.componentcardglobaldark3}>
            나만의 맞춤 여행지를 열람하고 저장할 수 있습니다.
          </div>
          <button className={styles.controlsbuttonmediumbright1}>
            <div className={styles.base1} />
            <div className={styles.button1}>더보기</div>
          </button>
        </div>
        <div className={styles.componentcardplacecardGen2}>
          <img
            className={styles.componentcardglobalmediaIcon2}
            alt=""
            src="/images/componentcardglobalmedia-landscape-2@2x.png"
          />
          <div className={styles.componentcardglobaldark4}>여행자 커뮤니티</div>
          <div className={styles.componentcardglobaldark5}>
            <p className={styles.p}>여행지 후기들을 확인하고 동행자들을 찾아볼 수 있습니다.</p>
          </div>
          <button className={styles.controlsbuttonmediumbright2}>
            <div className={styles.base2} />
            <div className={styles.button2}>더보기</div>
          </button>
        </div>
      </div>
    </div>

  )}

  export default MainCenter2;