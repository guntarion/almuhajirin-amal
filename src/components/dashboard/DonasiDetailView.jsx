'use client';
// src/components/dashboard/DonasiDetailView.jsx
// Komponen untuk menampilkan detail donasi (takjil/sahur/snack)
// Digunakan di halaman dashboard donasi

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getIconComponent } from '@/data/programs';
import styles from './DonasiDetailView.module.css';

const DonasiDetailView = ({ activeTabData, activeTab }) => {
  const IconComponent = getIconComponent(activeTabData.icon);

  return (
    <div className={styles.container}>
      <div className={styles.infoCard}>
        <div className={styles.header}>
          <div className={styles.titleSection}>
            <div className={styles.iconContainer} style={{ backgroundColor: activeTabData.lightColor }}>
              <IconComponent className={styles.icon} />
            </div>
            <h3 className={styles.title}>{activeTabData.nama}</h3>
          </div>

          <div className={styles.progressSection}>
            <div className={styles.progressLabel}>
              <span>Progress</span>
              <span>{activeTabData.progress}%</span>
            </div>
            <div className={styles.progressBarContainer}>
              <div className={styles.progressBar} style={{ width: `${activeTabData.progress}%`, backgroundColor: activeTabData.color }}></div>
            </div>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statsItem}>
              <h4 className={styles.statsLabel}>Target per hari</h4>
              <p className={styles.statsValue}>
                {activeTab === 'snack'
                  ? new Intl.NumberFormat('id-ID', {
                      style: 'currency',
                      currency: 'IDR',
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(activeTabData.targetPerHari)
                  : `${activeTabData.targetPerHari} porsi`}
              </p>
            </div>
            <div className={styles.statsItem}>
              <h4 className={styles.statsLabel}>{activeTab === 'snack' ? 'Hari terpenuhi' : 'Porsi terkumpul'}</h4>
              <p className={styles.statsValue}>
                {activeTab === 'snack'
                  ? `${activeTabData.terkumpul}/${activeTabData.totalKebutuhan} hari`
                  : `${activeTabData.terkumpul}/${activeTabData.totalKebutuhan}`}
              </p>
            </div>
          </div>
        </div>

        <div className={styles.chartSection}>
          <h4 className={styles.chartTitle}>Progress Harian</h4>
          <div className={styles.chartContainer}>
            <ResponsiveContainer width='100%' height='100%'>
              <LineChart data={activeTabData.chartData.slice(0, 10)}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='hari' tick={{ fontSize: 10 }} />
                <YAxis tick={{ fontSize: 10 }} />
                <Tooltip />
                <Legend />
                <Line type='monotone' dataKey='target' name='Target' stroke='#9CA3AF' strokeDasharray='5 5' />
                <Line type='monotone' dataKey='terkumpul' name='Terkumpul' stroke={activeTabData.color} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Kalender Donasi */}
      <div className={styles.calendarSection}>
        <h3 className={styles.calendarTitle}>Kalender Donasi</h3>
        <div className={styles.calendarGrid}>
          {activeTabData.chartData.slice(0, 30).map((item) => (
            <div key={item.hari} className={`${styles.calendarDay} ${item.terpenuhi ? styles.dayComplete : ''}`}>
              <div className={styles.dayNumber}>{item.hari}</div>
              {activeTab !== 'snack' ? (
                <>
                  <div className={styles.dayStats}>
                    {item.terkumpul}/{item.target}
                  </div>
                  <div className={styles.dayProgressBar}>
                    <div
                      className={styles.dayProgress}
                      style={{
                        width: `${(item.terkumpul / item.target) * 100}%`,
                        backgroundColor: activeTabData.color,
                      }}
                    ></div>
                  </div>
                </>
              ) : (
                <div className={styles.dayCheck}>{item.terpenuhi ? '✓' : ''}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonasiDetailView;
