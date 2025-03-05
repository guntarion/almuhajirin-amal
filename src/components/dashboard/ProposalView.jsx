'use client';
// src/components/dashboard/ProposalView.jsx
// Komponen untuk menampilkan proposal kegiatan dan RAPB
// Digunakan di halaman dashboard donasi

import React, { useState } from 'react';
import Image from 'next/image';
import { FileText, FileBarChart } from 'lucide-react';
import { rapbData } from '@/data/rapb';
import styles from './ProposalView.module.css';

const ProposalView = () => {
  const [activeTab, setActiveTab] = useState('proposal');

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Proposal Kegiatan Ramadhan 1446 H</h2>
        <div className={styles.tabs}>
          <button className={`${styles.tabButton} ${activeTab === 'proposal' ? styles.activeTab : ''}`} onClick={() => setActiveTab('proposal')}>
            <FileText className={styles.tabIcon} />
            <span>Deskripsi Kegiatan</span>
          </button>
          <button className={`${styles.tabButton} ${activeTab === 'budget' ? styles.activeTab : ''}`} onClick={() => setActiveTab('budget')}>
            <FileBarChart className={styles.tabIcon} />
            <span>Rencana Anggaran</span>
          </button>
        </div>
      </div>

      <div className={styles.content}>
        {activeTab === 'proposal' && (
          <div className={styles.proposalContent}>
            <div className={styles.introSection}>
              <p className={styles.introText}>
                Takmir Masjid Al Muhajirin bermaksud menyelenggarakan serangkaian kegiatan dakwah dan sosial kemasyarakatan yang ditujukan untuk lebih
                meningkatkan arti puasa Ramadhan yang akan kita lalui bersama ini agar menjadi sebuah amalan yang tinggi kedudukannya dan besar
                pahalanya di sisi Allah Ta'ala.
              </p>

              <p className={styles.sectionTitle}>Kegiatan yang direncakan dilangsungkan pada Ramadhan 1446 H antara lain:</p>
            </div>

            {/* Ketua Panitia Section */}
            <div className={styles.ketuaSection}>
              <div className={styles.ketuaInfo}>
                <div className={styles.photoContainer}>
                  <Image src='/masHanung.jpeg' alt='Ketua Panitia' width={120} height={120} className={styles.ketuaPhoto} />
                  <div className={styles.photoCaption}>
                    <p className={styles.captionTitle}>Ketua Panitia Ramadhan 1446</p>
                    <p className={styles.captionName}>M. Hanung Nugroho</p>
                  </div>
                </div>
                <div className={styles.speechBubble}>
                  <p className={styles.speechText}>
                    "Alhamdulillah di tahun ini telah terselenggara tarhib ramadhan berupa kegiatan Futsal, Lomba Mewarnai, Adzan, dan Fashion Show
                    yang membangun atmosfer positif Sambut Ramadhan di antara jama'ah muda dan orangtua masing."
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.programContainer}>
              <div className={styles.programSection}>
                <h3 className={styles.programTitleNumbered}>
                  <span className={styles.programNumber}>1.</span> Tarhib Ramadhan
                </h3>
                <ul className={styles.subprogramList}>
                  <li>
                    <span className={styles.bulletPoint}>a.</span> Lomba Futsal
                  </li>
                  <li>
                    <span className={styles.bulletPoint}>b.</span> Lomba Mewarnai
                  </li>
                  <li>
                    <span className={styles.bulletPoint}>c.</span> Lomba Adzan
                  </li>
                  <li>
                    <span className={styles.bulletPoint}>d.</span> Lomba Fashion Show
                  </li>
                </ul>
              </div>

              <div className={styles.programItem}>
                <h3 className={styles.programTitleNumbered}>
                  <span className={styles.programNumber}>2.</span> Kerja bakti jama'ah menjelang ramadhan
                </h3>
              </div>
              <div className={styles.programItem}>
                <h3 className={styles.programTitleNumbered}>
                  <span className={styles.programNumber}>3.</span> Sholat tarawih dan ceramah
                </h3>
              </div>
              <div className={styles.programItem}>
                <h3 className={styles.programTitleNumbered}>
                  <span className={styles.programNumber}>4.</span> Ceramah shubuh
                </h3>
              </div>
              <div className={styles.programItem}>
                <h3 className={styles.programTitleNumbered}>
                  <span className={styles.programNumber}>5.</span> Tadarrus bersama ba'da tarawih
                </h3>
              </div>
              <div className={styles.programItem}>
                <h3 className={styles.programTitleNumbered}>
                  <span className={styles.programNumber}>6.</span> Pembagian tajil berbuka
                </h3>
              </div>
              <div className={styles.programItem}>
                <h3 className={styles.programTitleNumbered}>
                  <span className={styles.programNumber}>7.</span> Ramadhan on Air
                </h3>
              </div>
              <div className={styles.programItem}>
                <h3 className={styles.programTitleNumbered}>
                  <span className={styles.programNumber}>8.</span> Sahur bersama di 10 hari terakhir
                </h3>
              </div>
              <div className={styles.programItem}>
                <h3 className={styles.programTitleNumbered}>
                  <span className={styles.programNumber}>9.</span> Pembagian zakat, shodaqoh, dan bingkisan lebaran
                </h3>
              </div>
              <div className={styles.programItem}>
                <h3 className={styles.programTitleNumbered}>
                  <span className={styles.programNumber}>10.</span> Ibadah Qiyamul Lail: sholat tasbih
                </h3>
              </div>
              <div className={styles.programItem}>
                <h3 className={styles.programTitleNumbered}>
                  <span className={styles.programNumber}>11.</span> Ibadah Qiyamul Lail: sholat tahajud
                </h3>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'budget' && (
          <div className={styles.budgetContent}>
            <h3 className={styles.budgetTitle}>Rencana Anggaran Biaya Kegiatan Ramadhan 1446 H</h3>
            <div className={styles.tableContainer}>
              <table className={styles.budgetTable}>
                <thead>
                  <tr>
                    <th className={styles.nameColumn}>Item Kegiatan</th>
                    <th className={styles.amountColumn}>Anggaran</th>
                  </tr>
                </thead>
                <tbody>
                  {rapbData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                      <td className={styles.nameCell}>{item.name}</td>
                      <td className={styles.amountCell}>{item.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProposalView;
