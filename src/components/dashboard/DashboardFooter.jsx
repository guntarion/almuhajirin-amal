'use client';
// src/components/dashboard/DashboardFooter.jsx
// Komponen untuk footer dashboard
// Digunakan di halaman dashboard donasi

import React from 'react';
import { dashboardConfig } from '@/data/dashboardConfig';
import styles from './DashboardFooter.module.css';

const DashboardFooter = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.intro}>Untuk donasi, silakan transfer ke rekening resmi:</p>
          <p className={styles.accountNumber}>
            💳 {dashboardConfig.rekening.bank} : {dashboardConfig.rekening.nomor}
          </p>
          <p className={styles.accountName}>a.n. {dashboardConfig.rekening.atasNama}</p>
          <p className={styles.contact}>
            Informasi dan konfirmasi: <span className={styles.contactNumber}>{dashboardConfig.kontak.whatsapp}</span> (WhatsApp)
          </p>
          <p className={styles.reminder}>📲 Jangan Lupa Konfirmasi setelah Transfer ...</p>
          <p className={styles.doa}>Jazaakumullaahu khairan wa Baarakallaah fiikum wa Amwaalikum</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardFooter;
