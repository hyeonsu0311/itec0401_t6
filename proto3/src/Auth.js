// auth.js

import React, { useState, useEffect } from 'react';

export const getToken = () => {
    return sessionStorage.getItem('accessToken');
  };
  
  export const setToken = (token) => {
    sessionStorage.setItem('accessToken', token);
  };
  
  export const clearToken = () => {
    sessionStorage.removeItem('accessToken');
  };
  
  export const useAuth = () => {
    const [isLogin, setIsLogin] = React.useState(!!getToken());  // !! 연산자로 토큰 존재 유무에 따라 boolean 값 반환
  
    React.useEffect(() => {
      const handleStorageChange = () => {
        setIsLogin(!!getToken());  // 세션 스토리지 변경 감지 시 로그인 상태 업데이트
      };
  
      window.addEventListener('storage', handleStorageChange);
  
      return () => {
        window.removeEventListener('storage', handleStorageChange);
      };
    }, []);
  
    return [isLogin, setIsLogin];
  };
  