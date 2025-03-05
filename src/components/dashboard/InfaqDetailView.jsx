'use client';
// src/components/dashboard/InfaqDetailView.jsx
// Komponen untuk menampilkan detail infaq
// Digunakan di halaman dashboard donasi

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign } from 'lucide-react';
import { formatCurrency } from '@/data/programs';
import styles from './InfaqDetailView.module.css';

const InfaqDetailView = ({ infaqData }) => {
  // Define gradient colors for the chart
  const gradientId = 'greenYellowGradient';

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <div className={styles.iconContainer} style={{ backgroundColor: infaqData.lightColor }}>
            <DollarSign className={styles.icon} />
          </div>
          <h3 className={styles.title}>{infaqData.nama}</h3>
        </div>

        <div className={styles.totalSection}>
          <h4 className={styles.totalTitle}>Total Infaq</h4>
          <p className={styles.totalAmount}>{formatCurrency(infaqData.chartData.reduce((sum, item) => sum + item.jumlah, 0))}</p>
        </div>

        <div className={styles.chartSection}>
          <h4 className={styles.chartTitle}>Detail per Hari</h4>
          <div className={styles.chartContainer}>
            <ResponsiveContainer width='100%' height='100%'>
              <BarChart data={infaqData.chartData}>
                <defs>
                  <linearGradient id={gradientId} x1='0' y1='0' x2='0' y2='1'>
                    <stop offset='0%' stopColor='#4ade80' stopOpacity={0.9} /> {/* Soft green */}
                    <stop offset='100%' stopColor='#fef08a' stopOpacity={0.9} /> {/* Soft yellow */}
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='hari' tick={{ fontSize: 10 }} />
                <YAxis tick={{ fontSize: 10 }} tickFormatter={(value) => `${value / 1000000}jt`} />
                <Tooltip formatter={(value) => formatCurrency(value)} />
                <Bar dataKey='jumlah' name='Jumlah Infaq' fill={`url(#${gradientId})`} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className={styles.detailsSection}>
        <h4 className={styles.detailsTitle}>Rincian Infaq Harian</h4>
        <div className={styles.itemsList}>
          {infaqData.chartData.map((item) => (
            <div key={item.hari} className={styles.item}>
              <div className={styles.dayLabel}>Hari ke-{item.hari}</div>
              <div className={styles.amount}>{formatCurrency(item.jumlah)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfaqDetailView;
