'use client';
// src/components/tv/TVProgresDonasiWidget.jsx
// Komponen untuk menampilkan progres donasi di TV Display

import React, { useEffect, useState } from 'react';
import styles from './TVProgresDonasiWidget.module.css';

const TVProgresDonasiWidget = ({ program, formatValue }) => {
  // Animation state for progress bar
  const [animateProgress, setAnimateProgress] = useState(0);

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

  // Animate the progress bar when component mounts or when program changes
  useEffect(() => {
    setAnimateProgress(0);
    const timer = setTimeout(() => {
      setAnimateProgress(progress);
    }, 300); // Small delay for animation effect

    return () => clearTimeout(timer);
  }, [progress, nama]);

  // Format display values based on program type
  const renderStats = () => {
    const displayValue = (value) => {
      if (formatValue) {
        return formatValue(value);
      }
      return value.toLocaleString();
    };

    const unit = format === 'currency' ? '' : nama === 'Tadarrus' ? ' hari' : ' porsi';

    return (
      <div className={styles.stats}>
        <div className={styles.totalStats}>
          {displayValue(terkumpul)} / {displayValue(totalTarget)}
          {unit}
        </div>
        <div className={styles.achievedStats} style={{ color }}>
          {progress.toFixed(2)}% tercapai
        </div>
      </div>
    );
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
          {program?.icon && React.createElement(program.icon, { className: styles.programIcon, style: { color } })}
          <span className={styles.title}>{nama}</span>
        </div>
        <div className={styles.progressPercentage}>
          <span className={styles.percentCounter}>{progress.toFixed(2)}%</span>
        </div>
      </div>

      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{
            width: `${animateProgress}%`,
            backgroundColor: color,
          }}
        ></div>
      </div>

      {renderStats()}
    </div>
  );
};

export default TVProgresDonasiWidget;
