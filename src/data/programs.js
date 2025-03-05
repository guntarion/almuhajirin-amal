// src/data/programs.js
// Data program donasi untuk Masjid Al Muhajirin Rewwin
// Data ini dapat diedit manual untuk mengubah informasi program donasi

import { Utensils, Coffee, Package, DollarSign } from 'lucide-react';

// Data Takjil (Ifthar)
export const takjilData = {
  nama: 'Ifthar (Berbuka)',
  targetPerHari: 180,
  hargaPerPorsi: 10000,
  icon: 'utensils', // Nama icon dari lucide-react
  color: '#10B981', // text-emerald-500
  lightColor: '#D1FAE5', // bg-emerald-100
  progress: 63, // (19/30) * 100
  totalKebutuhan: 5400, // 180 porsi * 30 hari
  terkumpul: 3420, // 19 hari terpenuhi (180 * 19)
  chartData: Array.from({ length: 30 }, (_, i) => ({
    hari: i + 1,
    target: 180,
    terkumpul: i < 19 ? 180 : i === 19 ? 90 : 0,
    terpenuhi: i < 19,
  })),
};

// Data Sahur (Qiyamul Lail)
export const sahurData = {
  nama: 'Qiyamul Lail (Sahur)',
  targetPerHari: 70,
  hargaPerPorsi: 10000,
  icon: 'coffee', // Nama icon dari lucide-react
  color: '#6366F1', // text-indigo-500
  lightColor: '#E0E7FF', // bg-indigo-100
  progress: 0, // Belum terpenuhi
  totalKebutuhan: 700, // 70 porsi * 10 hari terakhir
  terkumpul: 0, // Belum ada yang terkumpul
  chartData: Array.from({ length: 10 }, (_, i) => ({
    hari: i + 21, // 10 hari terakhir (21-30)
    target: 70,
    terkumpul: 0,
    terpenuhi: false,
  })),
};

// Data Snack (Tadarrus)
export const snackData = {
  nama: 'Tadarrus',
  targetPerHari: 100000, // Dalam rupiah
  hargaPerPorsi: 100000, // 100ribu per hari
  icon: 'package', // Nama icon dari lucide-react
  color: '#F59E0B', // text-amber-500
  lightColor: '#FEF3C7', // bg-amber-100
  progress: 13, // (4/30) * 100
  totalKebutuhan: 30, // 30 hari
  terkumpul: 4, // 4 hari sudah terpenuhi
  chartData: Array.from({ length: 30 }, (_, i) => ({
    hari: i + 1,
    target: 1, // 1 paket per hari
    terkumpul: i < 4 ? 1 : 0,
    terpenuhi: i < 4,
  })),
};

// Koleksi semua program untuk mudah diiterasi
export const allPrograms = [takjilData, sahurData, snackData];

// Data Infaq harian
export const infaqData = {
  nama: 'Infaq Harian',
  icon: 'dollarSign', // Nama icon dari lucide-react
  color: '#EC4899', // text-pink-500
  lightColor: '#FCE7F3', // bg-pink-100
  progress: 13, // (4/30) * 100
  totalKebutuhan: 30, // 30 hari
  terkumpul: 4, // 4 hari
  chartData: [
    { hari: 1, jumlah: 2000000 },
    { hari: 2, jumlah: 1500000 },
    { hari: 3, jumlah: 1300000 },
    { hari: 4, jumlah: 1100000 },
  ],
};

// Data gabungan untuk overview chart
export const overviewChartData = Array.from({ length: 30 }, (_, i) => {
  const takjilTerkumpul = takjilData.chartData.find((d) => d.hari === i + 1)?.terkumpul || 0;
  const snackTerkumpul = snackData.chartData.find((d) => d.hari === i + 1)?.terkumpul || 0;
  const sahurTerkumpul = sahurData.chartData.find((d) => d.hari === i + 1)?.terkumpul || 0;

  return {
    hari: i + 1,
    ifthar: takjilTerkumpul,
    tadarrus: snackTerkumpul,
    qiyamulLail: i >= 20 ? sahurTerkumpul : 0,
  };
});

// Fungsi untuk mendapatkan icon yang sesuai berdasarkan nama
export function getIconComponent(iconName) {
  switch (iconName) {
    case 'utensils':
      return Utensils;
    case 'coffee':
      return Coffee;
    case 'package':
      return Package;
    case 'dollarSign':
      return DollarSign;
    default:
      return Package;
  }
}

// src/data/infaq.js
// Data infaq harian yang dapat diedit

export const infaqHarian = [
  { hari: 1, jumlah: 2000000 },
  { hari: 2, jumlah: 1500000 },
  { hari: 3, jumlah: 1300000 },
  { hari: 4, jumlah: 1100000 },
];

// src/data/donatur.js
// Data donatur untuk TV Display

export const donaturList = [
  { nama: 'P****** D', program: 'Ifthar', jumlah: 450000 },
  { nama: 'R*** S', program: 'Tadarrus', jumlah: 200000 },
  { nama: 'Keluarga A****', program: 'Qiyamul Lail', jumlah: 350000 },
  { nama: 'Hamba A****', program: 'Ifthar', jumlah: 900000 },
  { nama: 'F***** Z', program: 'Tadarrus', jumlah: 100000 },
  { nama: 'H**** S', program: 'Ifthar', jumlah: 180000 },
  { nama: 'S***** R', program: 'Infaq', jumlah: 500000 },
  { nama: 'Ummi K******', program: 'Qiyamul Lail', jumlah: 280000 },
  { nama: 'M***** Al H', program: 'Ifthar', jumlah: 360000 },
  { nama: 'Kel. B*** S', program: 'Infaq', jumlah: 1000000 },
];

// src/data/ucapan.js
// Data ucapan terima kasih untuk widget

export const ucapanList = [
  {
    nama: 'Pak Djatmiko',
    program: 'Ifthar',
    doa: 'Semoga Allah memberikan kebarokahan pada harta bapak',
  },
  {
    nama: 'Bu Rini',
    program: 'Tadarrus',
    doa: "Semoga putra putrinya menjadi penghafal Al Qur'an",
  },
  {
    nama: 'Keluarga Bapak Ahmad',
    program: 'Qiyamul Lail',
    doa: 'Semoga keluarga selalu diberikan keberkahan dan kebahagiaan',
  },
  {
    nama: 'Hamba Allah',
    program: 'Infaq',
    doa: 'Semoga dilipatgandakan pahalanya oleh Allah SWT',
  },
  {
    nama: 'Ibu Fatimah',
    program: 'Ifthar',
    doa: 'Semoga mendapatkan ampunan di bulan suci Ramadhan',
  },
  {
    nama: 'Pak Hasan',
    program: 'Tadarrus',
    doa: 'Semoga menjadi amal jariyah yang mengalir pahalanya',
  },
];

// Versi lengkap untuk TV Display
export const ucapanDoaList = [
  {
    nama: 'Pak Djatmiko',
    program: 'Ifthar',
    doa: 'Semoga Allah memberikan kebarokahan pada harta dan keluarganya',
  },
  {
    nama: 'Bu Rini',
    program: 'Tadarrus',
    doa: "Semoga putra putrinya menjadi penghafal Al Qur'an yang shaleh dan shalehah",
  },
  {
    nama: 'Keluarga Ahmad',
    program: 'Qiyamul Lail',
    doa: 'Semoga selalu diberikan keberkahan, keharmonisan, dan kebahagiaan',
  },
  {
    nama: 'Bapak Hasan',
    program: 'Infaq',
    doa: 'Semoga dilipatgandakan pahalanya dan diampuni segala dosanya oleh Allah SWT',
  },
  {
    nama: 'Ibu Fatimah',
    program: 'Tadarrus',
    doa: 'Semoga mendapatkan ampunan di bulan suci Ramadhan dan diberikan keberkahan rezeki',
  },
  {
    nama: 'Ustadz Ibrahim',
    program: 'Ifthar',
    doa: 'Semoga menjadi amal jariyah yang mengalir pahalanya dan diberikan umur yang panjang dan barokah',
  },
];

// src/data/tvConfig.js
// Konfigurasi untuk TV Display yang dapat diedit

export const tvDisplayConfig = {
  currentDay: 4, // Hari ke-x Ramadhan
  masjidName: 'Masjid Al Muhajirin Rewwin',
  tahunHijriah: '1446H',
  rekening: {
    bank: 'Bank Muamalat (Kode 147)',
    nomor: '707.000.5656',
    atasNama: 'Al Muhajirin Rewwin Sidoarjo YYS',
  },
  kontak: {
    whatsapp: '081223343416',
  },
};

// src/data/dashboardConfig.js
// Konfigurasi untuk Dashboard yang dapat diedit

export const dashboardConfig = {
  currentDay: 4, // Hari ke-x Ramadhan
  masjidName: 'Masjid Al Muhajirin Rewwin',
  tahunHijriah: '1446H',
  rekening: {
    bank: 'Bank Muamalat (Kode 147)',
    nomor: '707.000.5656',
    atasNama: 'Al Muhajirin Rewwin Sidoarjo YYS',
  },
  kontak: {
    whatsapp: '081223343416',
  },
};

// Format currency (fungsi utilitas)
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};
