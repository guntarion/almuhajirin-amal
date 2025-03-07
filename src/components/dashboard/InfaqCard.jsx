'use client';
// src/components/dashboard/InfaqCard.jsx
// Komponen untuk menampilkan card infaq total
// Menampilkan ringkasan status keuangan infaq dengan progress bar dan indikator status

import React from 'react';
import { DollarSign, AlertCircle } from 'lucide-react';
import { formatCurrency } from '@/data/programs';
import styles from './InfaqCard.module.css';

const InfaqCard = ({ infaqData, onClick }) => {
  if (!infaqData) {
    return null; // Or return a loading state
  }

  // Helper function to determine status color
  const getStatusColor = (value) => {
    return value < 0 ? 'text-red-500' : 'text-green-500';
  };

  // Helper function to format percentage with 2 decimal places
  const formatPercentage = (value) => {
    if (typeof value !== 'number') return '0.00%';
    return value.toFixed(2) + '%';
  };

  return (
    <div className={styles.container} style={{ borderLeft: `4px solid ${infaqData.color}` }}>
      <div className={styles.iconContainer} style={{ backgroundColor: infaqData.lightColor }}>
        <DollarSign className={styles.icon} />
      </div>

      <div className={styles.content}>
        {/* Header Section */}
        <div className={styles.header}>
          <h3 className={styles.title}>{infaqData.nama}</h3>
          {infaqData.statusSaldo < 0 && (
            <div className={styles.warningBadge}>
              <AlertCircle size={16} className='mr-1' />
              <span> Saldo Minus</span>
            </div>
          )}
        </div>

        {/* Progress Bar Section */}
        <div className={styles.progressSection}>
          <div className={styles.progressLabel}>
            <span>Pencapaian</span>
            <span className={styles.progressValue}>{formatPercentage(infaqData.prosenPencapaian)}</span>
          </div>
          <div className={styles.progressBarContainer}>
            <div
              className={styles.progressBar}
              style={{
                width: `${Math.min(100, infaqData.prosenPencapaian || 0)}%`,
                backgroundColor: infaqData.color,
              }}
            />
          </div>
        </div>

        {/* Financial Info Grid */}
        <div className={styles.financialGrid}>
          <div className={styles.financialItem}>
            <span className={styles.label}>Total Kebutuhan</span>
            <span className={styles.value}>{formatCurrency(infaqData.totalRupiahKebutuhan || 0)}</span>
          </div>
          <div className={styles.financialItem}>
            <span className={styles.label}>Kekurangan</span>
            <span className={`${styles.value} ${getStatusColor(infaqData.selisihKekurangan)}`}>
              {formatCurrency(Math.abs(infaqData.selisihKekurangan || 0))}
            </span>
          </div>
          <div className={styles.financialItem}>
            <span className={styles.label}>Pemasukan</span>
            <span className={styles.value}>{formatCurrency(infaqData.totalRupiahPemasukan || 0)}</span>
          </div>
          <div className={styles.financialItem}>
            <span className={styles.label}>Pengeluaran</span>
            <span className={styles.value}>{formatCurrency(infaqData.totalRupiahPengeluaran || 0)}</span>
          </div>
        </div>

        {/* Status Saldo */}
        <div className={`${styles.saldoStatus} ${getStatusColor(infaqData.statusSaldo)}`}>
          <span className={styles.label}>Status Saldo:</span>
          <span className={styles.value}>{formatCurrency(Math.abs(infaqData.statusSaldo || 0))}</span>
          <span className={styles.indicator}>{infaqData.statusSaldo < 0 ? '(Minus)' : ''}</span>
        </div>
      </div>

      <button className={styles.detailButton} onClick={onClick}>
        Detail
      </button>
    </div>
  );
};

export default InfaqCard;
