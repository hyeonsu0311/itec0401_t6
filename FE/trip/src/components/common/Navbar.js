'use client'

import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { useIsLogin } from '@/components/user/IsLoginContext';
import { useRouter } from'next/navigation';


const Navbar = () => {
    const { isLogin, setIsLogin } = useIsLogin();
    const router = useRouter();

    const navigate = (page) => {
        router.push(page);
    }
    const onButtonClickLogin = () => {
        router.push("/login");
    };

    const onButtonClickSites = () => {
        navigate("/places");
    };

    const onButtonClickRoute = () => {
        navigate("/recommend");
    };

    const onButtonClickCommunity = () => {
        navigate("/community");
    };

  const onLogout = () => {
    if (window.confirm("로그아웃합니다")){ 
    // 세션 스토리지나 쿠키에서 액세스 토큰 삭제
  sessionStorage.removeItem('accessToken');
  // 또는 쿠키 삭제
  document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  
  // 로그인 상태 변경
    setIsLogin(false); // 로그인 상태 업데이트
    navigate("/");
    }
  };

  const onUserPage = () => {
    navigate("/user"); // 사용자 페이지로 이동하는 경로
  };


  return (
    <header className={styles.navbar}>
      <h1 className={styles.logo}
      onClick={() => navigate('/')}></h1>
      <div className={styles.searchBox}>
        <div className={styles.frameParent}>
          <div className={styles.labelWrapper}>
            <div className={styles.label}
            onClick={onButtonClickSites}> 여행지 탐색 </div>
          </div>
          <div className={styles.frameChild} />
          <div className={styles.labelContainer}>
            <div className={styles.label1}
            onClick={onButtonClickRoute}> 여행지 추천 </div>
          </div>
          <div className={styles.frameChild1} />
          <div className={styles.labelFrame}>
            <div className={styles.label2}
            onClick={onButtonClickCommunity}>커뮤니티</div>
          </div>
        </div>
      </div>
      <div className={styles.button}>
      {isLogin ? (
            <>
              <button className={styles.button2} onClick={onUserPage}>
              </button>
              <button className={styles.button1} onClick={onLogout}>
         
                <div className={styles.logIn}>Logout</div>
              </button>
              {/* 로그아웃 알림창 */}
      
            </>
          ) : (
            <button className={styles.button1} onClick={onButtonClickLogin}>
       
              <div className={styles.logIn}>Log in</div>
            </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
