import React, { createContext, useEffect ,useContext, useState, useMemo } from 'react'


const IsLoginContext = createContext();

export const IsLoginProvider = ({ children }) => {
  // useState를 사용하여 로그인 상태를 저장하고 업데이트하는 함수를 생성
  const [isLogin, setIsLogin] = useState(() => {
    // 로컬 스토리지에서 로그인 상태를 가져옴
    const storedIsLogin = localStorage.getItem('isLogin');
    // 저장된 로그인 상태가 존재하면 파싱하여 반환, 없으면 기본값 false 반환
    return storedIsLogin ? JSON.parse(storedIsLogin) : false;
  });

  // 로그인 상태가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem('isLogin', JSON.stringify(isLogin));
  }, [isLogin]);

  // Provider가 자식 컴포넌트에게 제공할 값을 설정하여 반환
  return (
    <IsLoginContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </IsLoginContext.Provider>
  );
};

// 커스텀 훅 생성
export const useIsLogin = () => {
  // useContext를 사용하여 IsLoginContext에서 값을 가져옴
  const context = useContext(IsLoginContext);

  // 만약 컨텍스트가 존재하지 않으면 에러 발생
  if (!context) {
    throw new Error('useIsLogin must be used within a IsLoginProvider');
  }

  // 로그인 상태와 로그인 함수를 반환
  return context;
};
  
