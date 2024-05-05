import React from 'react';

function ImageComponent({ firstimage }) {
  return (
    <div id= "picture">
      <h2>여행 사진</h2>
      <img src={firstimage} alt="여행 사진" />
    </div>
  );
}

export default ImageComponent;
