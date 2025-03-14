'use client';
// src/components/tv/TVDisplay.jsx
// Komponen utama untuk TV Display - Redesigned to fit 16:9 TV screens
// Tampilan untuk layar TV Masjid (16:9) dengan layout responsif

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import TVTerimaKasihWidget from './TVTerimaKasihWidget';
import TVProgramRotation from './TVProgramRotation';
import TVDonaturTerkini from './TVDonaturTerkini';
import TVInfaqHarianChart from './TVInfaqHarianChart';
import TVAjakanDonasi from './TVAjakanDonasi';
import TVPhotoSlideshow from './TVPhotoSlideshow';
import { infaqHarian } from '@/data/infaq';
import { tvDisplayConfig } from '@/data/tvConfig';
import styles from './TVDisplay.module.css';

const TVDisplay = () => {
  // State untuk konten dinamis
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [currentDay] = useState(tvDisplayConfig.currentDay);
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
              <h1 className={styles.headerTitle}>
                {tvDisplayConfig.rekening.bank}: {tvDisplayConfig.rekening.nomor}
              </h1>

              <h2 className={styles.headerSubtitle}>
                a.n. {tvDisplayConfig.rekening.atasNama} Konfirmasi: {tvDisplayConfig.kontak.whatsapp} (WhatsApp)
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
      {/* Full-width Terima Kasih Widget */}
      <div className={styles.fullWidthSection}>
        <TVTerimaKasihWidget />
      </div>

      {/* Main Content with 3-column layout for better TV display */}
      <div className={styles.mainContent}>
        {/* Left Column - Progress and Ajakan Donasi */}
        <div className={styles.leftColumn}>
          {/* Progress Bar Charts - Featured Program Only */}
          <div className={styles.progressSection}>
            <h3 className={styles.sectionTitle}>Progress Program Donasi</h3>
            <TVProgramRotation />
          </div>

          {/* Compact Ajakan Donasi */}
          {/* <div className={styles.compactAjakanDonasiContainer}>
            <TVAjakanDonasi />
          </div> */}
        </div>

        {/* Middle Column - Photos */}
        <div className={styles.middleColumn}>
          {/* Photo Slideshow */}
          <div className={styles.slideshowSection}>
            <TVPhotoSlideshow />
          </div>
        </div>

        {/* Right Column - Donors List and Infaq Chart */}
        <div className={styles.rightColumn}>
          {/* Donatur Terkini */}
          <div className={styles.donaturTerkiniContainer}>
            <TVDonaturTerkini />
          </div>

          {/* Infaq Harian Chart */}
          <div className={styles.infaqChartContainer}>
            <TVInfaqHarianChart infaqHarian={infaqHarian} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVDisplay;
