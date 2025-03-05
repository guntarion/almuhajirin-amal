'use client';
// src/components/tv/TVDisplay.jsx
// Komponen utama untuk TV Display
// Tampilan untuk layar TV Masjid (16:9)

import React, { useState, useEffect } from 'react';
import { Heart, Star, Gift, Calendar, CreditCard, Phone } from 'lucide-react';
import TVTerimaKasihWidget from './TVTerimaKasihWidget';
import TVDonaturTerkini from './TVDonaturTerkini';
import TVInfaqHarianChart from './TVInfaqHarianChart';
import TVAjakanDonasi from './TVAjakanDonasi';
import { infaqHarian } from '@/data/infaq';
import { tvDisplayConfig } from '@/data/tvConfig';
import styles from './TVDisplay.module.css';

const TVDisplay = () => {
  // State untuk konten dinamis
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [currentDay] = useState(tvDisplayConfig.currentDay);

  // Data Program Donasi
  const programData = [
    {
      nama: 'Ifthar',
      targetPerHari: 180,
      totalHari: 30,
      totalTarget: 5400, // 180 * 30
      terkumpul: 3420, // 19 hari sudah terpenuhi
      progress: 63,
      color: '#10B981', // emerald-500
      bgColor: 'rgba(16, 185, 129, 0.1)',
      borderColor: 'rgba(16, 185, 129, 0.5)',
      icon: <Gift className={styles.programIcon} style={{ color: '#10B981' }} />,
    },
    {
      nama: 'Qiyamul Lail',
      targetPerHari: 70,
      totalHari: 10,
      totalTarget: 700, // 70 * 10
      terkumpul: 0,
      progress: 0,
      color: '#6366F1', // indigo-500
      bgColor: 'rgba(99, 102, 241, 0.1)',
      borderColor: 'rgba(99, 102, 241, 0.5)',
      icon: <Star className={styles.programIcon} style={{ color: '#6366F1' }} />,
    },
    {
      nama: 'Tadarrus',
      targetPerHari: 100000,
      totalHari: 30,
      totalTarget: 30,
      terkumpul: 4,
      progress: 13,
      color: '#F59E0B', // amber-500
      bgColor: 'rgba(245, 158, 11, 0.1)',
      borderColor: 'rgba(245, 158, 11, 0.5)',
      icon: <Calendar className={styles.programIcon} style={{ color: '#F59E0B' }} />,
    },
  ];

  // Efek untuk update waktu
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      // Format tanggal: Selasa, 14 Maret 2025
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      setDate(now.toLocaleDateString('id-ID', options));

      // Format waktu: 14:05:32
      setTime(now.toLocaleTimeString('id-ID'));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div>
            <h1 className={styles.headerTitle}>Dashboard Donasi Ramadhan</h1>
            <h2 className={styles.headerSubtitle}>
              {tvDisplayConfig.masjidName} • Ramadhan {tvDisplayConfig.tahunHijriah}
            </h2>
          </div>
          <div className={styles.timeContainer}>
            <div className={styles.time}>{time}</div>
            <div className={styles.date}>{date}</div>
            <div className={styles.dayBadge}>Hari ke-{currentDay} Ramadhan</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          {/* Ucapan Terima Kasih Widget */}
          <TVTerimaKasihWidget />

          {/* Progress Bar Charts */}
          <div className={styles.progressSection}>
            <h3 className={styles.sectionTitle}>Progress Donasi</h3>
            <div className={styles.programList}>
              {programData.map((program, index) => (
                <div
                  key={index}
                  className={styles.programCard}
                  style={{
                    borderLeft: `8px solid ${program.color}`,
                    backgroundColor: program.bgColor,
                    boxShadow: `0 4px 6px ${program.borderColor}`,
                  }}
                >
                  <div className={styles.programHeader}>
                    <div className={styles.programTitleContainer}>
                      <span className={styles.programIcon}>{program.icon}</span>
                      <span className={styles.programTitle}>{program.nama}</span>
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

                  <div className={styles.programStats}>
                    <div className={styles.programTotal}>
                      {program.nama === 'Tadarrus'
                        ? `${program.terkumpul}/${program.totalTarget} hari`
                        : `${program.terkumpul.toLocaleString()} / ${program.totalTarget.toLocaleString()} porsi`}
                    </div>
                    <div className={styles.programAchieved} style={{ color: program.color }}>
                      {program.progress}% tercapai
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.rightColumn}>
          {/* Donatur Terkini */}
          <TVDonaturTerkini />

          {/* Chart Infaq Harian */}
          <TVInfaqHarianChart infaqHarian={infaqHarian} />

          {/* Ajakan Donasi */}
          <TVAjakanDonasi />
        </div>
      </div>
    </div>
  );
};

export default TVDisplay;
