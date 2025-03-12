'use client';
// src/components/tv/TVDisplay.jsx
// Komponen utama untuk TV Display - Redesigned to fit 16:9 TV screens
// Tampilan untuk layar TV Masjid (16:9) dengan layout responsif

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import TVTerimaKasihWidget from './TVTerimaKasihWidget';
import TVDonaturTerkini from './TVDonaturTerkini';
import TVInfaqHarianChart from './TVInfaqHarianChart';
import TVAjakanDonasi from './TVAjakanDonasi';
import TVProgresDonasiWidget from './TVProgresDonasiWidget';
import TVPhotoSlideshow from './TVPhotoSlideshow';
import { infaqHarian } from '@/data/infaq';
import { tvDisplayConfig } from '@/data/tvConfig';
import { takjilData, sahurData, snackData, infaqTotalData, getIconComponent, formatCurrency } from '@/data/programs';
import styles from './TVDisplay.module.css';

const TVDisplay = () => {
  // State untuk konten dinamis
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [currentDay] = useState(tvDisplayConfig.currentDay);
  const [currentProgramIndex, setCurrentProgramIndex] = useState(0);

  // Data Program Donasi
  const programData = [
    {
      ...takjilData,
      totalTarget: takjilData.totalKebutuhan,
      bgColor: `${takjilData.color}1a`,
      borderColor: `${takjilData.color}80`,
      icon: getIconComponent(takjilData.icon),
    },
    {
      ...sahurData,
      totalTarget: sahurData.totalKebutuhan,
      bgColor: `${sahurData.color}1a`,
      borderColor: `${sahurData.color}80`,
      icon: getIconComponent(sahurData.icon),
    },
    {
      ...snackData,
      totalTarget: snackData.totalKebutuhan,
      bgColor: `${snackData.color}1a`,
      borderColor: `${snackData.color}80`,
      icon: getIconComponent(snackData.icon),
    },
    {
      ...infaqTotalData,
      nama: 'Infaq',
      totalTarget: infaqTotalData.totalRupiahKebutuhan,
      terkumpul: infaqTotalData.totalRupiahPemasukan,
      progress: infaqTotalData.prosenPencapaian,
      color: '#EC4899',
      bgColor: 'rgba(236, 72, 153, 0.1)',
      borderColor: 'rgba(236, 72, 153, 0.5)',
      icon: getIconComponent('coins'),
      format: 'currency',
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

  // Efek untuk rotasi program donasi setiap 5 detik
  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setCurrentProgramIndex((prevIndex) => (prevIndex + 1) % programData.length);
    }, 5000);

    return () => clearInterval(rotationInterval);
  }, [programData.length]);

  // No need for section rotation effect

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerTitleContainer}>
            {/* Logo */}
            <div className={styles.logoContainer}>
              <Image src='/logo-yamr.png' alt='Al Muhajirin' width={80} height={80} className={styles.logo} />
            </div>
            <div className={styles.titleWrapper}>
              <h1 className={styles.headerTitle}>Dashboard Donasi Ramadhan</h1>
              <h2 className={styles.headerSubtitle}>
                {tvDisplayConfig.masjidName} • Ramadhan {tvDisplayConfig.tahunHijriah}
              </h2>
            </div>
          </div>
          <div className={styles.timeContainer}>
            <div className={styles.time}>{time}</div>
            <div className={styles.date}>{date}</div>
            <div className={styles.dayBadge}>Hari ke-{currentDay} Ramadhan</div>
          </div>
        </div>
      </div>

      {/* Main Content with 3-column layout for better TV display */}
      <div className={styles.mainContent}>
        {/* Left Column - Thank You and Progress */}
        <div className={styles.leftColumn}>
          {/* Ucapan Terima Kasih Widget - Compact Version */}
          <TVTerimaKasihWidget />

          {/* Progress Bar Charts - Featured Program Only */}
          <div className={styles.progressSection}>
            <h3 className={styles.sectionTitle}>Progress Donasi</h3>
            <div className={styles.programList}>
              <TVProgresDonasiWidget
                key={currentProgramIndex}
                program={programData[currentProgramIndex]}
                formatValue={programData[currentProgramIndex].format === 'currency' ? formatCurrency : undefined}
              />
              <div className={styles.indicatorContainer}>
                {programData.map((_, index) => (
                  <div
                    key={index}
                    className={`${styles.indicator} ${index === currentProgramIndex ? styles.indicatorActive : ''}`}
                    style={{ backgroundColor: index === currentProgramIndex ? programData[index].color : '#CBD5E0' }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column - Infaq Chart and Photos */}
        <div className={styles.middleColumn}>
          {/* Chart Infaq Harian with Reduced Height */}
          <TVInfaqHarianChart infaqHarian={infaqHarian} />

          {/* Photo Slideshow */}
          <div className={styles.slideshowSection}>
            <TVPhotoSlideshow />
          </div>
        </div>

        {/* Right Column - Donors List and Donation Info */}
        <div className={styles.rightColumn}>
          {/* Donatur Terkini - With reduced height */}
          <div className={styles.donaturTerkiniContainer}>
            <TVDonaturTerkini />
          </div>

          {/* Ajakan Donasi */}
          <div className={styles.ajakanDonasiContainer}>
            <TVAjakanDonasi />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVDisplay;
