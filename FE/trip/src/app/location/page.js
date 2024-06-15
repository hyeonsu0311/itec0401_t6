'use client'

import { useState } from 'react';
import LocationPopup from '@/components/common/LocationPopup'
import styles from '@/components/common/LocationPopup.module.css';

export default function LocationPage() {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={styles.page}>
      <button onClick={handleOpenPopup}>Get Current Location</button>
      {showPopup && <LocationPopup onClose={handleClosePopup} />}
    </div>
  );
}
