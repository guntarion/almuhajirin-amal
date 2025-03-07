'use client';
// src/components/tv/TVDonaturTerkini.jsx
// Komponen untuk menampilkan donatur terkini di TV Display - Optimized for TV screens

import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { donaturList } from '@/data/donatur';
import { formatCurrency } from '@/data/programs';
import styles from './TVDonaturTerkini.module.css';

const TVDonaturTerkini = () => {
  const [currentDonaturIndex, setCurrentDonaturIndex] = useState(0);

  // Mengurangi jumlah donatur yang ditampilkan untuk TV
  const maxVisibleDonors = 5; // Reduced to fit in smaller container

  // Efek untuk mengubah daftar donatur setiap 4 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDonaturIndex((prevIndex) => {
        // Ensure we never try to display beyond the list length
        if (prevIndex + maxVisibleDonors >= donaturList.length) {
          return 0;
        }
        return prevIndex + maxVisibleDonors;
      });
    }, 8000); // Increased from 4000 to give more time to read

    return () => clearInterval(interval);
  }, []);

  // Animation delay styling
  const getAnimationDelay = (idx) => ({
    animationDelay: `${idx * 0.12}s`, // Slightly faster animation
  });

  // Calculate end index, ensuring we don't go past the array length
  const endIndex = Math.min(currentDonaturIndex + maxVisibleDonors, donaturList.length);

  // Get current donors to display
  const currentDonors = donaturList.slice(currentDonaturIndex, endIndex);

  // If we don't have enough donors to fill the view, add from the beginning
  const displayDonors =
    currentDonors.length < maxVisibleDonors ? [...currentDonors, ...donaturList.slice(0, maxVisibleDonors - currentDonors.length)] : currentDonors;

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        <Star className={styles.starIcon} />
        Donatur Terkini
      </h3>

      <div className={styles.donaturList}>
        <div className={styles.donaturItems} key={currentDonaturIndex}>
          {displayDonors.map((donatur, idx) => (
            <div key={`${donatur.nama}-${idx}`} className={styles.donaturItem} style={getAnimationDelay(idx)}>
              <div
                className={`${styles.donaturCard} ${
                  donatur.program === 'Ifthar'
                    ? styles.iftharBorder
                    : donatur.program === 'Qiyamul Lail'
                    ? styles.qiyamulLailBorder
                    : styles.tadarrusBorder
                }`}
              >
                <div className={styles.donaturInfo}>
                  <span className={styles.donaturName}>{donatur.nama}</span>
                  <span className={styles.donaturProgram}>({donatur.program})</span>
                </div>
                <div className={styles.donaturAmount}>{formatCurrency(donatur.jumlah)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Page indicators */}
      <div className={styles.pageIndicators}>
        {Array.from({ length: Math.ceil(donaturList.length / maxVisibleDonors) }).map((_, idx) => (
          <div
            key={idx}
            className={`${styles.pageIndicator} ${idx === Math.floor(currentDonaturIndex / maxVisibleDonors) ? styles.activePageIndicator : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TVDonaturTerkini;
