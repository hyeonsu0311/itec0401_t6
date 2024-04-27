import Navbar from "../components/Navbar";
import FrameComponent1 from "../components/FrameComponent1";

import FrameComponent from "../components/FrameComponent";
import styles from "./SurfacePro8.module.css";
import MainCenter1 from "../components/MainCenter1";
import MainCenter2 from "../components/MainCenter2";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SurfacePro8 = () => {

  const location = useLocation();

  useEffect(() => {
    // URLSearchParams 객체를 사용하여 쿼리 파라미터를 파싱
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get('code');
    console.log('인가 코드:', code);
    if (code) {
      console.log('인가 코드:', code);
      // 인가 코드를 사용하여 서버에 액세스 토큰 요청 등의 처리를 수행
    }
  }, [location]);

  return (
    <div className={styles.surfacePro811}>
      <section className={styles.navbarParent}>
        <Navbar />
        <FrameComponent1 />
      </section>
      <MainCenter1/>
      <MainCenter2/>
      <FrameComponent />
    </div>
  );
};

export default SurfacePro8;
