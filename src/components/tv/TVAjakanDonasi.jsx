'use client';
// src/components/tv/TVAjakanDonasi.jsx
// Komponen untuk menampilkan ajakan donasi di TV Display

import React from 'react';
import { CreditCard, Phone } from 'lucide-react';
import { tvDisplayConfig } from '@/data/tvConfig';
import styles from './TVAjakanDonasi.module.css';

const TVAjakanDonasi = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Mari Berdonasi</h3>
      <div className={styles.content}>
        <div className={styles.row}>
          <CreditCard className={styles.icon} />
          <div className={styles.text}>
            <span className={styles.label}>{tvDisplayConfig.rekening.bank}:</span>{' '}
            <span className={styles.value}>{tvDisplayConfig.rekening.nomor}</span>
          </div>
        </div>
        <p className={styles.accountName}>a.n. {tvDisplayConfig.rekening.atasNama}</p>
        <div className={styles.row}>
          <Phone className={styles.icon} />
          <div className={styles.text}>
            <span className={styles.label}>Konfirmasi:</span> <span className={styles.value}>{tvDisplayConfig.kontak.whatsapp}</span> (WhatsApp)
          </div>
        </div>
      </div>
      <p className={styles.footer}>Jazaakumullaahu khairan wa Baarakallaah fiikum wa Amwaalikum</p>
    </div>
  );
};

export default TVAjakanDonasi;
