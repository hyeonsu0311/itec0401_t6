import React from 'react';

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
    <div id="detail">
      <h2>상세 정보</h2>
      <p>{overviewWithLineBreaks}</p>
      <p>* InfoCenter : {infocenterInfo}</p>
      <p>* RestDate : {RestDate}</p>
    </div>
  );
}

export default DetailedInfoComponent;
