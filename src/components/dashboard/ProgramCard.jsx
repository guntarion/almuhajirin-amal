'use client';
// src/components/dashboard/ProgramCard.jsx
// Komponen untuk menampilkan card program donasi
// Digunakan di halaman dashboard donasi

import React from 'react';
import { getIconComponent, formatCurrency } from '@/data/programs';
import styles from './ProgramCard.module.css';

const ProgramCard = ({ program, onClick, formatValue }) => {
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
            {program.icon === 'coins'
              ? `${formatValue ? formatValue(program.terkumpul) : formatCurrency(program.terkumpul)} / ${
                  formatValue ? formatValue(program.totalKebutuhan) : formatCurrency(program.totalKebutuhan)
                }`
              : program.nama === 'Tadarrus'
              ? `${program.terkumpul}/${program.totalKebutuhan} hari`
              : program.nama === 'Kebutuhan Kurma'
              ? `${program.terkumpul}/${program.totalKebutuhan} kg`
              : program.nama === 'Kebutuhan Air Mineral'
              ? `${program.terkumpul}/${program.totalKebutuhan} dus`
              : `${program.terkumpul}/${program.totalKebutuhan} porsi`}
          </span>
          <span>{program.progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
