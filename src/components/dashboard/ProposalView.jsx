'use client';
// src/components/dashboard/ProposalView.jsx
// Komponen untuk menampilkan proposal kegiatan dan RAPB
// Digunakan di halaman dashboard donasi

import React, { useState } from 'react';
import Image from 'next/image';
import { FileText, FileBarChart, AlertCircle } from 'lucide-react';
import { pemasukanData, pengeluaranData } from '@/data/rapb';
import styles from './ProposalView.module.css';

// Fungsi untuk menghasilkan warna berbeda untuk setiap kategori
const getKategoriColor = (kategori) => {
  const colors = {
    BISYAROH: '#4C51BF', // Indigo
    PERLENGKAPAN: '#38B2AC', // Teal
    EVENT: '#ED8936', // Orange
    KONSUMSI: '#48BB78', // Green
    'LAIN-LAIN': '#9F7AEA', // Purple
  };

  return colors[kategori] || '#CBD5E0'; // Default gray if no match
};

const ProposalView = () => {
  const [activeTab, setActiveTab] = useState('proposal');
  const [activeBudgetTab, setActiveBudgetTab] = useState('pemasukan');

  // Menghitung total pemasukan dan realisasi
  const totalTarget = pemasukanData.reduce((acc, item) => {
    if (item.name === 'Jumlah Penerimaan') return acc;
    return acc + parseInt(item.target.replace(/[^0-9]/g, ''), 10);
  }, 0);

  const totalRealisasi = pemasukanData.reduce((acc, item) => {
    if (item.name === 'Jumlah Penerimaan') return acc;
    return acc + parseInt(item.realisasi.replace(/[^0-9]/g, ''), 10);
  }, 0);

  const totalPersenRealisasi = ((totalRealisasi / totalTarget) * 100).toFixed(2);

  // Menghitung total pengeluaran
  const totalPengeluaran = pengeluaranData.reduce((acc, item) => {
    if (item.name === 'Jumlah Pengeluaran') return acc;
    return acc + parseInt(item.amount.replace(/[^0-9]/g, ''), 10);
  }, 0);

  // Pengelompokan pengeluaran berdasarkan kategori
  const pengeluaranByKategori = pengeluaranData.reduce((acc, item) => {
    if (!item.kategori) return acc;
    if (!acc[item.kategori]) {
      acc[item.kategori] = [];
    }
    acc[item.kategori].push(item);
    return acc;
  }, {});

  // Menghitung total per kategori
  const kategoriTotals = {};
  Object.keys(pengeluaranByKategori).forEach((kategori) => {
    if (kategori === 'TOTAL') return;
    kategoriTotals[kategori] = pengeluaranByKategori[kategori].reduce((acc, item) => {
      return acc + parseInt(item.amount.replace(/[^0-9]/g, ''), 10);
    }, 0);
  });

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
                Kepanitiaan Ramadhan 1446 H Masjid Al Muhajirin, dengan dukungan jama'ah, bermaksud menyelenggarakan serangkaian kegiatan dakwah dan
                sosial kemasyarakatan yang ditujukan untuk lebih meningkatkan arti puasa Ramadhan yang akan kita lalui bersama ini agar menjadi sebuah
                amalan yang tinggi kedudukannya dan besar pahalanya di sisi Allah Ta'ala.
              </p>
            </div>

            {/* Ketua Panitia Section */}
            <div className={styles.ketuaSection}>
              <div className={styles.ketuaInfo}>
                <div className={styles.photoContainer}>
                  <Image src='/masHanung.jpeg' alt='Ketua Panitia' width={120} height={120} className={styles.ketuaPhoto} />
                  <div className={styles.photoCaption}>
                    <p className={styles.captionTitle}>Ketua Panitia Ramadhan 1446 H</p>
                    <p className={styles.captionName}>M. Hanung Nugroho</p>
                  </div>
                </div>
                <div className={styles.speechBubble}>
                  <p className={styles.speechText}>
                    "Alhamdulillah, pada tahun ini telah sukses diselenggarakan Tarhib Ramadhan dengan berbagai kegiatan inspiratif seperti turnamen
                    futsal, lomba mewarnai, adzan, dan fashion show. Kegiatan ini berhasil menciptakan atmosfer positif dalam menyambut bulan suci
                    Ramadhan, mempererat silaturahmi antara jamaah muda dan orang tua, serta menumbuhkan semangat kebersamaan dalam menghadapi bulan
                    penuh berkah ini."
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.programContainer}>
              <p className={styles.sectionTitle}>Kegiatan pada Ramadhan 1446 H antara lain:</p>

              <div className={styles.programItem}>
                <h3 className={styles.programTitleNumbered}>
                  <span className={styles.programNumber}>1.</span> Tarhib Ramadhan
                </h3>
                <p className={styles.programDescription}>
                  Tarhib Ramadhan merupakan rangkaian kegiatan untuk menyambut bulan suci Ramadhan dengan penuh semangat dan kegembiraan. Kegiatan ini
                  meliputi <strong>Lomba Futsal</strong> yang mempererat persaudaraan di kalangan pemuda, <strong>Lomba Mewarnai</strong> untuk
                  menumbuhkan kreativitas anak-anak, <strong>Lomba Adzan</strong> sebagai sarana mengasah kemampuan ibadah, serta{' '}
                  <strong>Lomba Fashion Show</strong>
                  yang mengedukasi tentang busana Islami dengan sentuhan modern.
                </p>
              </div>

              <div className={styles.programItem}>
                <h3 className={styles.programTitleNumbered}>
                  <span className={styles.programNumber}>2.</span> Kerja bakti jama'ah menjelang Ramadhan
                </h3>
                <p className={styles.programDescription}>
                  Kegiatan gotong royong membersihkan masjid dan lingkungan sekitar untuk menciptakan suasana yang bersih, nyaman, dan khidmat dalam
                  menyambut bulan suci.
                </p>
              </div>

              <div className={styles.programItem}>
                <h3 className={styles.programTitleNumbered}>
                  <span className={styles.programNumber}>3.</span> Sholat tarawih dan ceramah
                </h3>
                <p className={styles.programDescription}>
                  Dilaksanakan setiap malam selama Ramadhan, menjadi momentum untuk mendekatkan diri kepada Allah melalui ibadah sholat berjamaah
                  serta menambah wawasan keislaman melalui tausiyah yang disampaikan usai tarawih.
                </p>
              </div>

              <div className={styles.programItem}>
                <h3 className={styles.programTitleNumbered}>
                  <span className={styles.programNumber}>4.</span> Ceramah Shubuh
                </h3>
                <p className={styles.programDescription}>
                  Memberikan pencerahan spiritual bagi para jamaah setelah menunaikan sholat Subuh berjamaah, dengan materi yang relevan untuk
                  memotivasi ibadah di bulan Ramadhan.
                </p>
              </div>

              <div className={styles.programItem}>
                <h3 className={styles.programTitleNumbered}>
                  <span className={styles.programNumber}>5.</span> Tadarrus bersama ba'da tarawih
                </h3>
                <p className={styles.programDescription}>
                  Kegiatan membaca Al-Qur'an secara berjamaah setelah sholat tarawih, sebagai upaya meningkatkan kualitas interaksi dengan kitab suci
                  dan memperbanyak amalan di bulan Ramadhan.
                </p>
              </div>

              <div className={styles.programItem}>
                <h3 className={styles.programTitleNumbered}>
                  <span className={styles.programNumber}>6.</span> Pembagian ifthar berbuka
                </h3>
                <p className={styles.programDescription}>
                  Untuk memfasilitasi jamaah yang sedang berbuka puasa dengan snack sebelum sholat jama'ah maghrib dan makanan "berat" setelahnya,
                  dengan makanan yang baik dan bergizi.
                </p>
              </div>

              <div className={styles.programItem}>
                <h3 className={styles.programTitleNumbered}>
                  <span className={styles.programNumber}>7.</span> Ramadhan on Air
                </h3>
                <p className={styles.programDescription}>
                  Program dakwah melalui saluran SHAM FM Surabaya yang menyebarkan konten inspiratif dan edukatif dalam program tadarrus Ramadhan,
                  melibatkan perwakilan jama'ah muda dan senior Masjid Al Muhajirin Rewwin.
                </p>
              </div>

              <div className={styles.programItem}>
                <h3 className={styles.programTitleNumbered}>
                  <span className={styles.programNumber}>8.</span> Sahur bersama di 10 hari terakhir
                </h3>
                <p className={styles.programDescription}>
                  Dilakukan untuk memperkuat ukhuwah islamiyah dan memotivasi jamaah agar lebih giat beribadah, terutama dalam memperbanyak doa dan
                  amalan sunnah pada malam-malam ganjil yang penuh keberkahan.
                </p>
              </div>

              <div className={styles.programItem}>
                <h3 className={styles.programTitleNumbered}>
                  <span className={styles.programNumber}>9.</span> Pembagian zakat, shodaqoh, dan bingkisan lebaran
                </h3>
                <p className={styles.programDescription}>
                  Bentuk kepedulian sosial kepada kaum dhuafa dan mereka yang membutuhkan, agar semua bisa merasakan kebahagiaan di hari raya Idul
                  Fitri.
                </p>
              </div>

              <div className={styles.programItem}>
                <h3 className={styles.programTitleNumbered}>
                  <span className={styles.programNumber}>10.</span> Ibadah Qiyamul Lail: sholat tasbih
                </h3>
                <p className={styles.programDescription}>
                  Salah satu amalan sunnah yang dianjurkan untuk dilakukan pada malam hari, sebagai bentuk penghambaan diri kepada Allah dengan
                  memohon ampunan dan keberkahan.
                </p>
              </div>

              <div className={styles.programItem}>
                <h3 className={styles.programTitleNumbered}>
                  <span className={styles.programNumber}>11.</span> Ibadah Qiyamul Lail: sholat tahajud
                </h3>
                <p className={styles.programDescription}>
                  Menjadi sarana mendekatkan diri kepada Allah di sepertiga malam terakhir, dengan harapan doa-doa yang dipanjatkan lebih mudah
                  dikabulkan oleh-Nya.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'budget' && (
          <div className={styles.budgetContent}>
            <h3 className={styles.budgetTitle}>Rencana Anggaran Biaya Kegiatan Ramadhan 1446 H</h3>

            {/* Ringkasan Anggaran */}
            <div className={styles.budgetSummary}>
              <div className={styles.summaryHeader}>
                <h4 className={styles.summaryTitle}>Ringkasan Anggaran</h4>
              </div>
              <div className={styles.summaryContainer}>
                <div className={styles.summaryCard}>
                  <h5 className={styles.summaryCardTitle}>Total Target Pemasukan</h5>
                  <p className={styles.summaryCardValue}>Rp {totalTarget.toLocaleString('id-ID')}</p>
                </div>
                <div className={styles.summaryCard}>
                  <h5 className={styles.summaryCardTitle}>Total Realisasi Pemasukan</h5>
                  <p className={styles.summaryCardValue}>Rp {totalRealisasi.toLocaleString('id-ID')}</p>
                  <div className={styles.progressBarContainer}>
                    <div className={styles.progressBar} style={{ width: `${totalPersenRealisasi}%` }}></div>
                    <span className={styles.progressText}>{totalPersenRealisasi}%</span>
                  </div>
                </div>
                <div className={styles.summaryCard}>
                  <h5 className={styles.summaryCardTitle}>Total Pengeluaran</h5>
                  <p className={styles.summaryCardValue}>Rp {totalPengeluaran.toLocaleString('id-ID')}</p>
                </div>
                <div className={styles.summaryCard}>
                  <h5 className={styles.summaryCardTitle}>Saldo</h5>
                  <p className={`${styles.summaryCardValue} ${totalRealisasi - totalPengeluaran < 0 ? styles.negative : ''}`}>
                    Rp {(totalRealisasi - totalPengeluaran).toLocaleString('id-ID')}
                  </p>
                </div>
              </div>

              {/* Peringatan jika realisasi rendah */}
              {totalPersenRealisasi < 25 && (
                <div className={styles.warningBox}>
                  <AlertCircle className={styles.warningIcon} />
                  <p className={styles.warningText}>
                    Realisasi pemasukan baru mencapai {totalPersenRealisasi}% dari total target. Perlu upaya lebih untuk mencapai target pemasukan
                    yang ditetapkan.
                  </p>
                </div>
              )}
            </div>

            {/* Tabs untuk Pemasukan dan Pengeluaran */}
            <div className={styles.budgetTabs}>
              <button
                className={`${styles.budgetTabButton} ${activeBudgetTab === 'pemasukan' ? styles.activeBudgetTab : ''}`}
                onClick={() => setActiveBudgetTab('pemasukan')}
              >
                Pemasukan
              </button>
              <button
                className={`${styles.budgetTabButton} ${activeBudgetTab === 'pengeluaran' ? styles.activeBudgetTab : ''}`}
                onClick={() => setActiveBudgetTab('pengeluaran')}
              >
                Pengeluaran
              </button>
            </div>

            {/* Tabel Pemasukan */}
            {activeBudgetTab === 'pemasukan' && (
              <div className={styles.tableContainer}>
                <table className={styles.budgetTable}>
                  <thead>
                    <tr>
                      <th className={styles.nameColumn}>Item Pemasukan</th>
                      <th className={styles.amountColumn}>Target</th>
                      <th className={styles.amountColumn}>Realisasi</th>
                      <th className={styles.percentColumn}>% Realisasi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pemasukanData.map((item, index) => (
                      <tr
                        key={index}
                        className={`${index % 2 === 0 ? styles.evenRow : styles.oddRow} ${item.name === 'Jumlah Penerimaan' ? styles.totalRow : ''}`}
                      >
                        <td className={styles.nameCell}>{item.name}</td>
                        <td className={styles.amountCell}>{item.target}</td>
                        <td className={styles.amountCell}>{item.realisasi}</td>
                        <td className={styles.percentCell}>
                          <div className={styles.percentContainer}>
                            <div className={styles.miniProgressBar} style={{ width: item.persen.replace(',', '.').replace('%', '') + '%' }}></div>
                            <span>{item.persen}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Tabel Pengeluaran */}
            {activeBudgetTab === 'pengeluaran' && (
              <div className={styles.tableContainer}>
                {Object.keys(pengeluaranByKategori).map(
                  (kategori, kategoriIndex) =>
                    kategori !== 'TOTAL' && (
                      <div key={kategoriIndex} className={styles.kategoriSection}>
                        <h4 className={styles.kategoriTitle}>{kategori}</h4>
                        <table className={styles.budgetTable}>
                          <thead>
                            <tr>
                              <th className={styles.nameColumn}>Item Pengeluaran</th>
                              <th className={styles.amountColumn}>Anggaran</th>
                            </tr>
                          </thead>
                          <tbody>
                            {pengeluaranByKategori[kategori].map((item, index) => (
                              <tr key={index} className={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                                <td className={styles.nameCell}>{item.name}</td>
                                <td className={styles.amountCell}>{item.amount}</td>
                              </tr>
                            ))}
                            <tr className={styles.subTotalRow}>
                              <td className={styles.subTotalCell}>Total {kategori}</td>
                              <td className={styles.subTotalAmount}>Rp {kategoriTotals[kategori].toLocaleString('id-ID')}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )
                )}

                {/* Total Pengeluaran */}
                <div className={styles.totalSection}>
                  <table className={styles.budgetTable}>
                    <tbody>
                      {pengeluaranData
                        .filter((item) => item.name === 'Jumlah Pengeluaran')
                        .map((item, index) => (
                          <tr key={index} className={styles.totalRow}>
                            <td className={styles.nameCell}>{item.name}</td>
                            <td className={styles.amountCell}>{item.amount}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>

                {/* Grafik distribusi pengeluaran */}
                <div className={styles.chartSection}>
                  <h4 className={styles.chartTitle}>Distribusi Pengeluaran</h4>
                  <div className={styles.distributionChart}>
                    {Object.keys(kategoriTotals).map((kategori, index) => {
                      const percentage = ((kategoriTotals[kategori] / totalPengeluaran) * 100).toFixed(1);
                      return (
                        <div key={index} className={styles.chartItem}>
                          <div className={styles.chartLabel}>
                            <span className={styles.colorBox} style={{ backgroundColor: getKategoriColor(kategori) }}></span>
                            <span className={styles.kategoriLabel}>{kategori}</span>
                            <span className={styles.kategoriPercentage}>{percentage}%</span>
                          </div>
                          <div className={styles.chartBar}>
                            <div
                              className={styles.chartFill}
                              style={{
                                width: `${percentage}%`,
                                backgroundColor: getKategoriColor(kategori),
                              }}
                            ></div>
                          </div>
                          <span className={styles.chartValue}>Rp {kategoriTotals[kategori].toLocaleString('id-ID')}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Analisis singkat */}
            <div className={styles.analysisSection}>
              <h4 className={styles.analysisTitle}>Analisis Anggaran</h4>
              <div className={styles.analysisContent}>
                <p>Berdasarkan data keuangan yang tercatat hingga saat ini, terdapat beberapa catatan penting untuk diperhatikan:</p>
                <ul className={styles.analysisList}>
                  <li>
                    <strong>Realisasi Pemasukan:</strong> Baru mencapai {totalPersenRealisasi}% dari target yang ditetapkan. Item pemasukan terbesar
                    berasal dari Infaq Taraweh dengan realisasi sebesar Rp 10.000.000 (20% dari target), diikuti oleh Infaq snack petugas takjil
                    dengan realisasi 83,33%.
                  </li>
                  <li>
                    <strong>Alokasi Pengeluaran:</strong> Porsi terbesar dari pengeluaran dialokasikan untuk kategori KONSUMSI (sekitar 60% dari
                    total), dengan item terbesar pada Konsumsi Takjil untuk Jama'ah (Rp 54.400.000). Kategori BISYAROH menempati porsi kedua dengan
                    sekitar 25% dari total pengeluaran.
                  </li>
                  <li>
                    <strong>Saldo:</strong> Saat ini terdapat {totalRealisasi - totalPengeluaran < 0 ? 'defisit' : 'surplus'} sebesar Rp{' '}
                    {Math.abs(totalRealisasi - totalPengeluaran).toLocaleString('id-ID')}.
                    {totalRealisasi - totalPengeluaran < 0
                      ? ' Perlu upaya lebih untuk memenuhi kekurangan dana agar kegiatan Ramadhan dapat berjalan lancar.'
                      : ' Surplus ini dapat dialokasikan untuk kegiatan tambahan atau dialihkan ke program lain.'}
                  </li>
                </ul>
                {/* <p>
                  <strong>Rekomendasi:</strong> Meningkatkan upaya penggalangan dana, terutama untuk Infaq Taraweh, Infaq Takjil, dan Infaq Qiyamul
                  Lail yang memiliki target besar namun realisasinya masih rendah. Juga perlu mempertimbangkan efisiensi pengeluaran pada kategori
                  yang memungkinkan untuk dioptimalkan.
                </p> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProposalView;
