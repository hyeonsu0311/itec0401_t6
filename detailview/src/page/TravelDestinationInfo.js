
import React, { useState, useEffect } from 'react';
import './traveldestionation.css';

function TravelDestinationInfo({ info }) {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{info}</h1>
      
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#picture">사진보기</a></li>
          <li><a href="#map">위치정보</a></li>
          <li><a href="#detail">상세정보</a></li>
        </ul>
      </nav>

    </div>
  );
}

export default TravelDestinationInfo;



