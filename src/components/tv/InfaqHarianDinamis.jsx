'use client';
// src/components/tv/InfaqHarianDinamis.jsx
// Komponen untuk menampilkan perolehan infaq harian secara dinamis
// Digunakan di TV Display

import React, { useState, useEffect } from 'react';
import { formatCurrency } from '@/data/programs';
import styles from './InfaqHarianDinamis.module.css';

const InfaqHarianDinamis = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <div className={styles.container}>
      <div className={styles.dayContainer}>
        <div className={styles.dayBadge}>{data[currentIndex].hari}</div>
        <div className={styles.dayInfo}>
          <div className={styles.dayLabel}>Hari ke-{data[currentIndex].hari}</div>
          <div className={styles.dayAmount}>{formatCurrency(data[currentIndex].jumlah)}</div>
        </div>
      </div>

      <div className={styles.dotsContainer}>
        {data.map((_, index) => (
          <span key={index} className={`${styles.dot} ${index === currentIndex ? styles.activeDot : styles.inactiveDot}`} />
        ))}
      </div>
    </div>
  );
};

export default InfaqHarianDinamis;
