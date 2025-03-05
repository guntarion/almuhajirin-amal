'use client';
// src/components/tv/TVTerimaKasihWidget.jsx
// Komponen untuk menampilkan ucapan terima kasih di TV Display

import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { ucapanDoaList } from '@/data/ucapan';
import styles from './TVTerimaKasihWidget.module.css';

const TVTerimaKasihWidget = () => {
  const [currentDoaIndex, setCurrentDoaIndex] = useState(0);

  // Efek untuk mengubah ucapan terima kasih setiap 6 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDoaIndex((prevIndex) => (prevIndex + 1) % ucapanDoaList.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.backgroundIcon}>
        <Heart className={styles.backgroundHeartIcon} />
      </div>

      <div className={styles.header}>
        <Heart className={styles.headerIcon} />
        <h3 className={styles.title}>Jazakumullah Khairan</h3>
      </div>

      <div key={currentDoaIndex} className={styles.fadeIn} style={{ minHeight: '100px' }}>
        <p className={styles.message}>
          Terima kasih, <span className={styles.name}>{ucapanDoaList[currentDoaIndex].nama}</span>, atas donasi untuk{' '}
          <span className={styles.program}>{ucapanDoaList[currentDoaIndex].program}</span>-nya.
          <br />
          {ucapanDoaList[currentDoaIndex].doa}. Aamiin.
        </p>
      </div>

      {/* Dots indicator */}
      <div className={styles.dotsContainer}>
        {ucapanDoaList.map((_, index) => (
          <span key={index} className={`${styles.dot} ${index === currentDoaIndex ? styles.activeDot : styles.inactiveDot}`} />
        ))}
      </div>
    </div>
  );
};

export default TVTerimaKasihWidget;
