'use client';
// src/components/tv/TVDisplay.jsx
// Komponen utama untuk TV Display - Redesigned to fit 16:9 TV screens
// Tampilan untuk layar TV Masjid (16:9) dengan layout responsif

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Heart, Star, Gift, Calendar, CreditCard, Phone } from 'lucide-react';
import TVTerimaKasihWidget from './TVTerimaKasihWidget';
import TVDonaturTerkini from './TVDonaturTerkini';
import TVInfaqHarianChart from './TVInfaqHarianChart';
import TVAjakanDonasi from './TVAjakanDonasi';
import TVProgresDonasiWidget from './TVProgresDonasiWidget';
import TVPhotoSlideshow from './TVPhotoSlideshow';
import { infaqHarian } from '@/data/infaq';
import { tvDisplayConfig } from '@/data/tvConfig';
import styles from './TVDisplay.module.css';

const TVDisplay = () => {
  // State untuk konten dinamis
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [currentDay] = useState(tvDisplayConfig.currentDay);
  const [currentProgramIndex, setCurrentProgramIndex] = useState(0);
  // No need for section rotation

  // Data Program Donasi
  const programData = [
    {
      nama: 'Ifthar',
      targetPerHari: 200,
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
    {
      nama: 'Infaq',
      totalTarget: 132600000,
      terkumpul: 4500000,
      progress: 3,
      color: '#EC4899', // pink-500
      bgColor: 'rgba(236, 72, 153, 0.1)',
      borderColor: 'rgba(236, 72, 153, 0.5)',
      icon: <CreditCard className={styles.programIcon} style={{ color: '#EC4899' }} />,
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
              <TVProgresDonasiWidget key={currentProgramIndex} program={programData[currentProgramIndex]} />
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
