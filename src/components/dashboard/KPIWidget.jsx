'use client';
// src/components/dashboard/KPIWidget.jsx
// Komponen untuk menampilkan KPI widget
// Digunakan di halaman dashboard donasi

import React from 'react';
import { formatCurrency } from '@/data/programs';
import styles from './KPIWidget.module.css';

const KPIWidget = ({ title, value, progressValue, progressColor }) => {
  // Jika nilai adalah persentase
  if (typeof value === 'number' && progressValue !== undefined) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.title}>{title}</span>
          <span className={styles.value}>{value}%</span>
          <div className={styles.progressBarContainer}>
            <div
              className={styles.progressBar}
              style={{
                width: `${progressValue}%`,
                backgroundColor: progressColor === 'bg-green-500' ? '#10B981' : progressColor === 'bg-indigo-500' ? '#6366F1' : '#F59E0B',
              }}
            ></div>
          </div>
        </div>
      </div>
    );
  }

  // Jika nilai adalah mata uang
  if (typeof value === 'string' && title === 'Infaq') {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.title}>{title}</span>
          <span className={styles.value}>{value}</span>
          <span className={styles.subValue}>{progressValue}</span>
        </div>
      </div>
    );
  }

  // Default, tanpa progress bar
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        <span className={styles.value}>{value}</span>
      </div>
    </div>
  );
};

export default KPIWidget;
