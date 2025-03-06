'use client';
// src/components/dashboard/TerimaKasihWidget.jsx
// Komponen untuk menampilkan ucapan terima kasih dengan animasi
// Digunakan di halaman dashboard donasi

import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { ucapanDoaList } from '@/data/ucapan';
import styles from './TerimaKasihWidget.module.css';

const TerimaKasihWidget = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Efek untuk mengubah ucapan setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ucapanDoaList.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const ucapan = ucapanDoaList[currentIndex];

  return (
    <div className={styles.container}>
      {/* Background Pattern */}
      <div className={styles.backgroundIcon}>
        <Heart className={styles.largeIcon} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.header}>
          <Heart className={styles.headerIcon} />
          <h3 className={styles.title}>Jazakumullah Khairan</h3>
        </div>

        <div className={styles.fadeIn}>
          <p className={styles.message}>
            Terima kasih, <span className={styles.name}>{ucapan.nama}</span>, atas donasi untuk{' '}
            <span className={styles.program}>{ucapan.program}</span>-nya.
            <br />
            {ucapan.doa}. Aamiin.
          </p>
        </div>

        {/* Dots indicator */}
        <div className={styles.dotsContainer}>
          {ucapanDoaList.map((_, index) => (
            <span key={index} className={`${styles.dot} ${index === currentIndex ? styles.activeDot : styles.inactiveDot}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TerimaKasihWidget;
