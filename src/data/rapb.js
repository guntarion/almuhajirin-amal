// src/data/rapb.js
// Data untuk Rencana Anggaran Pendapatan dan Belanja Ramadhan

export const rapbData = [
  { name: 'Infaq Taraweh', amount: 'Rp 50.000.000' },
  { name: 'Infaq Kajian Shubuh', amount: 'Rp 10.000.000' },
  { name: 'Infaq Tarhib Ramadhan', amount: 'Rp 15.000.000' },
  { name: 'Infaq Ifthar', amount: 'Rp 54.000.000' },
  { name: 'Infaq Qiyamul Lail', amount: 'Rp 7.000.000' },
  { name: 'Infaq Tadarrus', amount: 'Rp 3.000.000' },
  { name: 'Infaq Zakat dan Bingkisan', amount: 'Rp 120.000.000' },
  { name: 'Total Pendapatan', amount: 'Rp 259.000.000' },
  { name: 'Tarhib Ramadhan', amount: 'Rp 20.000.000' },
  { name: 'Lomba Futsal', amount: 'Rp 7.500.000' },
  { name: 'Lomba Mewarnai', amount: 'Rp 2.500.000' },
  { name: 'Lomba Adzan', amount: 'Rp 2.500.000' },
  { name: 'Lomba Fashion Show', amount: 'Rp 7.500.000' },
  { name: 'Kebersihan Masjid', amount: 'Rp 5.000.000' },
  { name: 'Ceramah Tarawih (30 hari)', amount: 'Rp 30.000.000' },
  { name: 'Ceramah Shubuh (30 hari)', amount: 'Rp 15.000.000' },
  { name: 'Kegiatan Tadarrus', amount: 'Rp 5.000.000' },
  { name: 'Tajil Berbuka (30 hari)', amount: 'Rp 65.000.000' },
  { name: 'Ramadhan on Air', amount: 'Rp 3.000.000' },
  { name: 'Sahur Bersama', amount: 'Rp 10.000.000' },
  { name: 'Zakat dan Bingkisan', amount: 'Rp 100.000.000' },
  { name: 'Qiyamul Lail Sholat Tasbih', amount: 'Rp 3.000.000' },
  { name: 'Qiyamul Lail Sholat Tahajud', amount: 'Rp 3.000.000' },
  { name: 'Total Belanja', amount: 'Rp 259.000.000' },
];

// Function untuk memformat angka ke format Rupiah
export const formatCurrency = (value) => {
  // Hapus semua karakter non-numerik
  const numericValue = value.replace(/[^0-9]/g, '');

  // Convert ke number dan format dengan separasi ribuan
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(parseInt(numericValue, 10));
};
