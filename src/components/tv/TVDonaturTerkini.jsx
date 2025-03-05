'use client';
// src/components/tv/TVDonaturTerkini.jsx
// Komponen untuk menampilkan donatur terkini di TV Display

import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { donaturList } from '@/data/donatur';
import { formatCurrency } from '@/data/programs';
import styles from './TVDonaturTerkini.module.css';

const TVDonaturTerkini = () => {
  const [currentDonaturIndex, setCurrentDonaturIndex] = useState(0);

  // Efek untuk mengubah daftar donatur setiap 4 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDonaturIndex((prevIndex) => (prevIndex + 1) % (donaturList.length - 2));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Animation delay styling
  const getAnimationDelay = (idx) => ({
    animationDelay: `${idx * 0.2}s`,
  });

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        <Star className={styles.starIcon} />
        Donatur Terkini
      </h3>

      <div className={styles.donaturList}>
        <div className={styles.donaturItems}>
          {donaturList.slice(currentDonaturIndex, currentDonaturIndex + 3).map((donatur, idx) => (
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
                <div>
                  <span className={styles.donaturName}>{donatur.nama}</span>
                  <span className={styles.donaturProgram}>({donatur.program})</span>
                </div>
                <div className={styles.donaturAmount}>{formatCurrency(donatur.jumlah)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TVDonaturTerkini;
