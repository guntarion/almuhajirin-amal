'use client';
// src/components/tv/TVProgramRotation.jsx
// Komponen untuk menampilkan rotasi semua program donasi
// Digunakan di TVDisplay.jsx

import React, { useState, useEffect } from 'react';
import {
  kurmaData,
  airData,
  bisyarohData,
  takjilData,
  sahurData,
  snackData,
  infaqTotalData,
  formatCurrencyJuta,
  formatCurrency,
  getIconComponent,
} from '@/data/programs';
import TVProgresDonasiWidget from './TVProgresDonasiWidget';
import styles from './TVProgresDonasiWidget.module.css';

const TVProgramRotation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const programs = [
    {
      ...takjilData,
      totalTarget: takjilData.totalKebutuhan,
      format: 'number',
      icon: getIconComponent(takjilData.icon),
      bgColor: `${takjilData.color}1a`,
      borderColor: `${takjilData.color}80`,
    },
    {
      ...sahurData,
      totalTarget: sahurData.totalKebutuhan,
      format: 'number',
      icon: getIconComponent(sahurData.icon),
      bgColor: `${sahurData.color}1a`,
      borderColor: `${sahurData.color}80`,
    },
    {
      ...snackData,
      totalTarget: snackData.totalKebutuhan,
      format: 'number',
      icon: getIconComponent(snackData.icon),
      bgColor: `${snackData.color}1a`,
      borderColor: `${snackData.color}80`,
    },
    {
      ...kurmaData,
      totalTarget: kurmaData.totalKebutuhan,
      format: 'number',
      icon: getIconComponent('package'),
      bgColor: `${kurmaData.color}1a`,
      borderColor: `${kurmaData.color}80`,
    },
    {
      ...airData,
      totalTarget: airData.totalKebutuhan,
      format: 'number',
      icon: getIconComponent('package'),
      bgColor: `${airData.color}1a`,
      borderColor: `${airData.color}80`,
    },
    {
      ...bisyarohData,
      totalTarget: bisyarohData.totalKebutuhan,
      format: 'currency',
      icon: getIconComponent('coins'),
      bgColor: `${bisyarohData.color}1a`,
      borderColor: `${bisyarohData.color}80`,
    },
    {
      ...infaqTotalData,
      nama: 'Infaq',
      totalTarget: infaqTotalData.totalRupiahKebutuhan,
      terkumpul: infaqTotalData.totalRupiahPemasukan,
      progress: Number(infaqTotalData.prosenPencapaian),
      format: 'currency',
      icon: getIconComponent('coins'),
      color: '#EC4899',
      bgColor: 'rgba(236, 72, 153, 0.1)',
      borderColor: 'rgba(236, 72, 153, 0.5)',
    },
  ];

  // Effect untuk rotasi setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % programs.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.programList}>
        <TVProgresDonasiWidget
          key={currentIndex}
          program={programs[currentIndex]}
          formatValue={
            programs[currentIndex].nama === 'Infaq' ? formatCurrency : programs[currentIndex].format === 'currency' ? formatCurrencyJuta : undefined
          }
        />
        <div className={styles.indicatorContainer}>
          {programs.map((_, index) => (
            <div
              key={index}
              className={`${styles.indicator} ${index === currentIndex ? styles.indicatorActive : ''}`}
              style={{ backgroundColor: index === currentIndex ? programs[index].color : '#CBD5E0' }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TVProgramRotation;
