import React from 'react';
import { Calendar, Clock, Users, ClipboardList, TrendingDown, Target, AlignCenter } from 'lucide-react';
import styles from '@/components/notulen/7maret/notulen7maret.module.css';

const NotulensiRapat7Maret = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Header with title and decoration */}
        <div className={styles.header}>
          <div className={styles.headerDecoration}></div>
          <h1 className={styles.title}>Notulensi Rapat Panitia Ramadhan</h1>
          <h2 className={styles.subtitle}>Masjid Al Muhajirin Rewwin 1446 H</h2>
        </div>

        {/* Meeting details */}
        <div className={styles.detailsSection}>
          <div className={styles.detailItem}>
            <Calendar className={styles.icon} />
            <span>Jumat 7 Maret 2025 - Ba'da Tarawih</span>
          </div>
          <div className={styles.detailItem}>
            <Clock className={styles.icon} />
            <span>Di Ruang Utama Masjid Al Muhajirin Rewwin</span>
          </div>
          <div className={styles.detailItem}>
            <Users className={styles.icon} />
            <div>
              <span className={styles.label}>Peserta:</span> Hanung, Hasan, Iwan, Safuwan, Guntar, Cahyo, Arifin, Pandhu, Halim, Linda, Mita, Wawa,
              Putri
            </div>
          </div>
        </div>

        {/* Agenda */}
        <div className={styles.sectionContainer}>
          <h3 className={styles.sectionTitle}>
            <ClipboardList className={styles.sectionIcon} />
            Agenda
          </h3>
          <ul className={styles.bulletList}>
            <li>Kondisi penurunan perolehan infaq</li>
            <li>Penyikapan yang diperlukan</li>
            <li>Kerapian barisan sholat dan penertiban infaq</li>
          </ul>
        </div>

        {/* Discussion sections */}
        <h3 className={styles.mainSectionTitle}>PEMBAHASAN</h3>

        {/* Section 1 */}
        <div className={styles.discussionSection}>
          <h4 className={styles.discussionTitle}>
            <TrendingDown className={styles.sectionIcon} />
            1. Mengapa Perolahan Infaq menurun
          </h4>
          <ul className={styles.bulletList}>
            <li>Jumlah jama'ah relatif tidak berkurang, tidak diketahui alasan penurunan infaq. Bukan dalam lingkup "kendali" kita</li>
            <li>Kita punya kebutuhan banyak: karpet, pengecatan, renovasi, ramadhan - sementara pihak2 yang ditarget proposal sama saja</li>
            <li>
              Kurang koordinasi perihal penyebaran proposal: akhirnya lambat disampaikan, satu orang bisa didatangi lebih dari satu orang. Koordinasi
              sebatas di grup inti.
            </li>
            <li>Kurang dokumentasi dan publikasi. Terhambat keterbatasan SDM.</li>
            <li>Peredaran kotak infaq kurang terkoordinir. Perlu waspada "petugas" yang tidak resmi.</li>
            <li>Jama'ah juga punya saluran QRIS dan brankas infaq yang tidak otomatis terdeteksi sbg pemasukan ramadhan</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className={styles.discussionSection}>
          <h4 className={styles.discussionTitle}>
            <Target className={styles.sectionIcon} />
            2. Penyikapan
          </h4>
          <ul className={styles.bulletList}>
            <li>
              Ditentukan 1 koordinator (Safuwan): penyebaran proposal fisik dg surat pengantar, update disampaikan bukan di grup inti tapi grup umum
            </li>
            <li>Telah dibuat proposal versi digital, dg dashboard update perolehan, untuk disebarkan ke jama'ah/relasi luar Rewwin</li>
            <li>
              Telah dibuat dashboard versi display televisi (almuhajirin-amal.vercel.app/tv), untuk ditampilkan di TV saat jelang maghrib s.d. tarawih
            </li>
            <li>
              Jumlah porsi takjil ifthar harian dikurangi menjadi 150/hari. Pembagian kupon perlu dibatasi/dikontrol. Jika target masih tidak
              tercapai, pengurangan akan terus dilakukan.
            </li>
            <li>Untuk konsumsi sholat malam, masih diusahakan. Prinsipnya sama: disediakan jika ada dananya.</li>
            <li>Konsumsi petugas takjil dan tadarus berikut khatamannya, alhamdulillah tercukupi.</li>
            <li>Perlu diusahakan pengajuan partisipasi takjil di rumah makan sekitar Rewwin</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className={styles.discussionSection}>
          <h4 className={styles.discussionTitle}>
            <AlignCenter className={styles.sectionIcon} />
            3. Kerapian barisan sholat dan penertiban pengedaran kotak infaq
          </h4>
          <ul className={styles.bulletList}>
            <li>
              Perlu ada petugas khusus untuk mengedarkan dan mengontrol peredaran kotak infaq, baik dari jama'ah putra dan utamanya juga di jama'ah
              putri
            </li>
            <li>Kotak infaq juga diedarkan di saat shubuh, untuk pengumpulan/penghitungan bisa ditunda hingga sekretariat (Pak Kirman) tersedia</li>
            <li>Agar pengedaran kotak infaq lancar, maka barisan/shaf perlu dirapikan, baik untuk jama'ah putra dan terutama jama'ah putri</li>
            <li>Perlu ada petugas putra dan putri khusus, dengan atribut keplek, untuk petugas bersangkutan di jama'ah putra maupun putri</li>
          </ul>
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <p>Masjid Al Muhajirin Rewwin &copy; 2025</p>
        </div>
      </div>
    </div>
  );
};

export default NotulensiRapat7Maret;
