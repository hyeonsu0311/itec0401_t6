import { useDispatch } from 'react-redux';
import { setLocation, setError } from '@/store/slices/locationSlice'
import styles from './LocationPopup.module.css';

export default function LocationPopup({ onClose }) {
  const dispatch = useDispatch();

  const handleAgree = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          dispatch(setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }));
          onClose();
        },
        (err) => {
          dispatch(setError(err.message));
          onClose();
        },
        {
          enableHighAccuracy: true, 
          timeout: 5000,
          maximumAge: 0
        }
      );
    } else {
      dispatch(setError('Geolocation is not supported by this browser.'));
      onClose();
    }
  };

  return (
    <div className={styles.popup}>
      <strong className={styles.title}>위치기반 서비스 이용 동의</strong>
      <p className={styles.content}>현재 위치 확인, 주변 관광지 찾기가 포함된 서비스 이용을 위해서 <br/>
      위치기반 서비스 이용 약관 동의가 필요합니다</p>
      <div className={styles.buttons}>
        <button onClick={handleAgree}> 동의 </button>
        <button onClick={onClose}>거절</button>
      </div>
    </div>
  );
}
