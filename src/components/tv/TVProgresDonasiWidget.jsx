'use client';
// src/components/tv/TVProgresDonasiWidget.jsx
// Komponen untuk menampilkan progres donasi di TV Display

import React from 'react';
import styles from './TVProgresDonasiWidget.module.css';

const TVProgresDonasiWidget = ({ program }) => {
  // Default values if properties are missing
  const defaultColor = '#3B82F6'; // blue-500
  const defaultBgColor = 'rgba(59, 130, 246, 0.1)';
  const defaultBorderColor = 'rgba(59, 130, 246, 0.5)';

  // Safely access program properties with defaults
  const color = program?.color || defaultColor;
  const bgColor = program?.bgColor || defaultBgColor;
  const borderColor = program?.borderColor || defaultBorderColor;
  const progress = program?.progress || 0;
  const nama = program?.nama || 'Program';
  const terkumpul = program?.terkumpul || 0;
  const totalTarget = program?.totalTarget || 0;
  const format = program?.format || '';

  // Format nilai berdasarkan jenis program
  const formatValue = (value, type) => {
    if (type === 'currency') {
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value);
    }
    return value.toLocaleString();
  };

  // Menentukan format tampilan berdasarkan jenis program
  const renderStats = () => {
    if (format === 'currency') {
      return (
        <div className={styles.stats}>
          <div className={styles.totalStats}>
            {formatValue(terkumpul, format)} / {formatValue(totalTarget, format)}
          </div>
          <div className={styles.achievedStats} style={{ color }}>
            {progress}% tercapai
          </div>
        </div>
      );
    } else if (nama === 'Tadarrus') {
      return (
        <div className={styles.stats}>
          <div className={styles.totalStats}>
            {terkumpul}/{totalTarget} hari
          </div>
          <div className={styles.achievedStats} style={{ color }}>
            {progress}% tercapai
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.stats}>
          <div className={styles.totalStats}>
            {terkumpul.toLocaleString()} / {totalTarget.toLocaleString()} porsi
          </div>
          <div className={styles.achievedStats} style={{ color }}>
            {progress}% tercapai
          </div>
        </div>
      );
    }
  };

  return (
    <div
      className={styles.container}
      style={{
        borderLeft: `8px solid ${color}`,
        backgroundColor: bgColor,
        boxShadow: `0 4px 6px ${borderColor}`,
      }}
    >
      <div className={styles.header}>
        <div className={styles.titleContainer}>
          {program?.icon}
          <span className={styles.title}>{nama}</span>
        </div>
        <div className={styles.progressPercentage}>{progress}%</div>
      </div>

      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{
            width: `${progress}%`,
            backgroundColor: color,
          }}
        ></div>
      </div>

      {renderStats()}
    </div>
  );
};

export default TVProgresDonasiWidget;
