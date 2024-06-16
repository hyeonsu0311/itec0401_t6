import React from 'react';
import styles from './DetailedInfo.module.css'

function DetailedInfoComponent({ overview , detail }) {
  const infocenterInfo = detail && detail.infocenter ? detail.infocenter : "정보 없음";
  const RestDate = detail && detail.restdate ? detail.restdate : "정보 없음";

  // overview의 줄바꿈 처리
  const overviewWithLineBreaks = overview && overview.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div id="detail" className={styles.detailed}>
      <strong className={styles.Title}>상세 정보</strong>
      <p className={styles.content}>{overviewWithLineBreaks}</p>
      <p className={styles.content}>* InfoCenter : {infocenterInfo}</p>
      <p className={styles.content}>* RestDate : {RestDate}</p>
    </div>
  );
}

export default DetailedInfoComponent;
