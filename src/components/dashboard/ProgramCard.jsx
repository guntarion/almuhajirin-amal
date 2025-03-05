'use client';
// src/components/dashboard/ProgramCard.jsx
// Komponen untuk menampilkan card program donasi
// Digunakan di halaman dashboard donasi

import React from 'react';
import { getIconComponent } from '@/data/programs';
import styles from './ProgramCard.module.css';

const ProgramCard = ({ program, onClick }) => {
  const IconComponent = getIconComponent(program.icon);

  return (
    <div className={styles.container} style={{ borderLeft: `4px solid ${program.color}` }}>
      <div className={styles.iconContainer} style={{ backgroundColor: program.lightColor }}>
        <IconComponent className={styles.icon} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{program.nama}</h3>
        <div className={styles.progressBarContainer}>
          <div className={styles.progressBar} style={{ width: `${program.progress}%`, backgroundColor: program.color }}></div>
        </div>
        <div className={styles.stats}>
          <span>
            {program.nama === 'Tadarrus'
              ? `${program.terkumpul}/${program.totalKebutuhan} hari`
              : `${program.terkumpul}/${program.totalKebutuhan} porsi`}
          </span>
          <span>{program.progress}%</span>
        </div>
      </div>

      <button className={styles.detailButton} onClick={onClick}>
        Detail
      </button>
    </div>
  );
};

export default ProgramCard;
