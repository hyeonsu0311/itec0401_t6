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
    navigate("/sites");
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


  const onLogout = () => {
    // 로그아웃 로직을 구현하고, 로그아웃 상태를 설정합니다.
    setIsLogin(false)
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
            onClick={onButtonClickSites}> 여행지 탐색</div>
          </div>
          <div className={styles.frameChild} />
          <div className={styles.labelContainer}>
            <div className={styles.label1}
            onClick={onButtonClickRoute}>여행경로 찾기</div>
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
                <div className={styles.background} />
                <div className={styles.logIn}>User Page</div>
              </button>
              <button className={styles.button1} onClick={onLogout}>
                <div className={styles.background} />
                <div className={styles.logIn}>Logout</div>
              </button>
            </>
          ) : (
            <button className={styles.button1} onClick={onButtonClickLogin}>
              <div className={styles.background} />
              <div className={styles.logIn}>Log in</div>
            </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
