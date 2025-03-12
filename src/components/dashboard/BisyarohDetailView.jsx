'use client';
// src/components/dashboard/BisyarohDetailView.jsx
// Komponen untuk menampilkan detail bisyaroh
// Menampilkan data dalam format rupiah

import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { formatCurrencyJuta } from '@/data/programs';
import styles from './DonasiDetailView.module.css';

const BisyarohDetailView = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.mainStats}>
        <div className={styles.statCard}>
          <h3>Total Target</h3>
          <div className={styles.value}>{formatCurrencyJuta(data.totalKebutuhan)}</div>
        </div>

        <div className={styles.statCard}>
          <h3>Telah Terkumpul</h3>
          <div className={styles.value}>{formatCurrencyJuta(data.terkumpul)}</div>
        </div>

        <div className={styles.statCard}>
          <h3>Sisa Kebutuhan</h3>
          <div className={styles.value}>{formatCurrencyJuta(data.totalKebutuhan - data.terkumpul)}</div>
        </div>

        <div className={styles.statCard}>
          <h3>Progress</h3>
          <div className={styles.value}>{data.progress}%</div>
        </div>
      </div>

      <div className={styles.warningSection}>
        <AlertTriangle className={styles.warningIcon} size={24} />
        <p>
          Masih dibutuhkan <strong>{formatCurrencyJuta(data.totalKebutuhan - data.terkumpul)}</strong> untuk memenuhi kebutuhan operasional ibadah
          ramadhan.
        </p>
      </div>

      <div className={styles.chartContainer}>
        <div className={styles.progressBarContainer}>
          <div className={styles.progressBarLabel}>
            <span>Progress Pengumpulan</span>
            <span>{data.progress}%</span>
          </div>
          <div className={styles.progressBarBg}>
            <div className={styles.progressBarFill} style={{ width: `${data.progress}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BisyarohDetailView;
