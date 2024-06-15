import styles from "./MainCenter2.module.css";
import { useRouter } from'next/navigation';

const MainCenter2 = () => {

  const router = useRouter();
  const navigate = (page) => {
    router.push(page);
  }
  
  const onButtonClickSites = () => {
    navigate("/places");
  };
  
  const onButtonClickRoute = () => {
    navigate("/recommend");
  };
  
  const onButtonClickCommunity = () => {
    navigate("/community");
  };

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
              <div className={styles.button} onClick={onButtonClickSites}>더보기</div>
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
            <div className={styles.button1}  onClick={onButtonClickRoute}>더보기</div>
          </button>
        </div>
        <div className={styles.componentcardplacecardGen2}>
          <img
            className={styles.componentcardglobalmediaIcon2}
            alt=""
            src="/images/friends.png"
          />
          <div className={styles.componentcardglobaldark4}>동행 구하기</div>
          <div className={styles.componentcardglobaldark5}>
            <p className={styles.p}>자신과 비슷한 여행 조건을 가진 사람을 찾아보세요.</p>
          </div>
          <button className={styles.controlsbuttonmediumbright2}>
            <div className={styles.base2} />
            <div className={styles.button2}>더보기</div>
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
            <p className={styles.p}>여행지 후기들을 확인하고 동행자들을 찾아보세요.</p>
          </div>
          <button className={styles.controlsbuttonmediumbright2}>
            <div className={styles.base2} />
            <div className={styles.button2}  onClick={onButtonClickCommunity}>더보기</div>
          </button>
        </div>
      </div>
    </div>

  )}

  export default MainCenter2;