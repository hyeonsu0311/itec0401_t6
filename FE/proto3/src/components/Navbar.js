import { useCallback } from "react";
import { useNavigate  } from "react-router-dom";
import { useContext } from 'react'
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { useIsLogin } from "../IsLoginContext";


const Navbar = () => {
  const navigate = useNavigate();
  const { isLogin,setIsLogin } = useIsLogin();

  const onButtonClickLogin = () => {
    navigate("/login");
  };
  const onButtonClickSites = () => {
    navigate("/place");
  };

  const onButtonClickMain = () => {
    navigate("/");
  };

  const onButtonClickRoute = () => {
    navigate("/routes");
  };

  const onButtonClickCommunity = () => {
    navigate("/community");
  };

  const onButtonClickTest = () => {
    navigate("/test");
  }


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
      onClick={onButtonClickMain}>LOGO</h1>
      <div className={styles.searchBox}>
        <div className={styles.frameParent}>
          <div className={styles.labelWrapper}>
            <div className={styles.label}
          </div>
          <div className={styles.frameChild} />
          <div className={styles.labelContainer}>
            <div className={styles.label1}
          </div>
          <div className={styles.frameChild1} />
          <div className={styles.labelFrame}>
            <div className={styles.label2}
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
