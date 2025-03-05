'use client';
// src/components/tv/TVProgresDonasiWidget.jsx
// Komponen untuk menampilkan progres donasi di TV Display

import React from 'react';
import styles from './TVProgresDonasiWidget.module.css';

const TVProgresDonasiWidget = ({ program }) => {
  const IconComponent = program.icon;

  return (
    <div
      className={styles.container}
      style={{
        borderLeft: `8px solid ${program.color}`,
        backgroundColor: program.bgColor,
        boxShadow: `0 4px 6px ${program.borderColor}`,
      }}
    >
      <div className={styles.header}>
        <div className={styles.titleContainer}>
          {program.icon}
          <span className={styles.title}>{program.nama}</span>
        </div>
        <div className={styles.progressPercentage}>{program.progress}%</div>
      </div>

      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{
            width: `${program.progress}%`,
            backgroundColor: program.color,
          }}
        ></div>
      </div>

      <div className={styles.stats}>
        <div className={styles.totalStats}>
          {program.nama === 'Tadarrus'
            ? `${program.terkumpul}/${program.totalTarget} hari`
            : `${program.terkumpul.toLocaleString()} / ${program.totalTarget.toLocaleString()} porsi`}
        </div>
        <div className={styles.achievedStats} style={{ color: program.color }}>
          {program.progress}% tercapai
        </div>
      </div>
    </div>
  );
};

export default TVProgresDonasiWidget;
