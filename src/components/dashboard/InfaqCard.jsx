'use client';
// src/components/dashboard/InfaqCard.jsx
// Komponen untuk menampilkan card infaq
// Digunakan di halaman dashboard donasi

import React from 'react';
import { DollarSign } from 'lucide-react';
import { formatCurrency } from '@/data/programs';
import styles from './InfaqCard.module.css';

const InfaqCard = ({ infaqData, onClick }) => {
  return (
    <div className={styles.container} style={{ borderLeft: `4px solid ${infaqData.color}` }}>
      <div className={styles.iconContainer} style={{ backgroundColor: infaqData.lightColor }}>
        <DollarSign className={styles.icon} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{infaqData.nama}</h3>
        <div className={styles.amount}>{formatCurrency(infaqData.chartData.reduce((sum, item) => sum + item.jumlah, 0))}</div>
        <div className={styles.stats}>Total dari {infaqData.chartData.length} hari</div>
      </div>

      <button className={styles.detailButton} onClick={onClick}>
        Detail
      </button>
    </div>
  );
};

export default InfaqCard;
