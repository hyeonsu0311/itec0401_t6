'use client'

import FrameComponent1 from "./FrameComponent1";
import axios from 'axios';
import FrameComponent from "./FrameComponent";
import styles from "./SurfacePro8.module.css";
import MainCenter1 from "./MainCenter1";
import MainCenter2 from "./MainCenter2";
import { useEffect } from 'react';
import { useIsLogin } from '../user/IsLoginContext';
import { useRouter } from 'next/navigation'



const SurfacePro8 = () => {

 
  const { isLogin, setIsLogin } = useIsLogin();


  useEffect(() => {
   
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get('code');
    console.log('인가 코드:', code);
    if (code) {
      sendCodeToBackend(code);
      // 인가 코드를 사용하여 서버에 액세스 토큰 요청 등의 처리를 수행

    }
  }, []);

  const sendCodeToBackend = (code) => {
    axios.post('http://localhost:8001/service2/get-token', { code })
      .then(response => {
        console.log('액세스 토큰:', response.data.access_token);
        sessionStorage.setItem('accessToken', response.data.access_token);
        console.log('액세스 토큰이 세션 스토리지에 저장되었습니다.');
        setIsLogin(true); // 로그인 상태 업데이트
        // 추가 작업: 액세스 토큰을 사용하여 사용자 정보 요청 등
      })
      .catch(error => {
        console.error('인가 코드를 백엔드로 전송하는데 실패했습니다:', error);
      });
  };

  return (
    <div className={styles.surfacePro811}>
      <section className={styles.navbarParent}>

        <FrameComponent1 />
      </section>
      <MainCenter1/>
      <MainCenter2/>
      <FrameComponent />
    </div>
  );
};

export default SurfacePro8;
