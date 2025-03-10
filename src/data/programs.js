// src/data/programs.js
// Data program donasi untuk Masjid Al Muhajirin Rewwin
// Data ini dapat diedit manual untuk mengubah informasi program donasi

import { Utensils, Coffee, Package, Coins } from 'lucide-react';

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
  targetPerHari: 50000, // Dalam rupiah
  hargaPerPorsi: 50000, // 100ribu per hari
  icon: 'package', // Nama icon dari lucide-react
  color: '#F59E0B', // text-amber-500
  lightColor: '#FEF3C7', // bg-amber-100
  progress: 90, // (4/30) * 100
  totalKebutuhan: 30, // 30 hari
  terkumpul: 28, // 4 hari sudah terpenuhi
  chartData: Array.from({ length: 30 }, (_, i) => ({
    hari: i + 1,
    target: 1, // 1 paket per hari
    terkumpul: i < 28 ? 1 : 0,
    terpenuhi: i < 28,
  })),
};

// Koleksi semua program untuk mudah diiterasi
export const allPrograms = [takjilData, sahurData, snackData];

// Data Infaq harian
export const infaqData = {
  nama: 'Infaq Harian',
  icon: 'coins', // Nama icon dari lucide-react
  color: '#EC4899', // text-pink-500
  lightColor: '#FCE7F3', // bg-pink-100
  progress: 30, // (8/30) * 100
  totalKebutuhan: 30, // 30 hari
  terkumpul: 9, // hari ke-8 - mengikuti jumlah hari perolehan
  chartData: [
    { hari: 1, jumlah: 100000 },
    { hari: 2, jumlah: 900000 },
    { hari: 3, jumlah: 900000 },
    { hari: 4, jumlah: 800000 },
    { hari: 5, jumlah: 1000000 },
    { hari: 6, jumlah: 500000 },
    { hari: 7, jumlah: 600000 },
    { hari: 8, jumlah: 0 },
    { hari: 9, jumlah: 900000 },
  ],
};

// Data Infaq Total
export const infaqTotalData = {
  nama: 'Infaq Total',
  icon: 'coins', // Nama icon dari lucide-react
  color: '#EC4899', // text-pink-500
  lightColor: '#FCE7F3', // bg-pink-100
  totalRupiahKebutuhan: 132600000,
  totalRupiahPemasukan: 64765500,
  totalRupiahPengeluaran: 58824482,
  selisihKekurangan: -67834500,
  prosenPencapaian: 48.84,
  statusSaldo: 5941018,
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
    case 'coins':
      return Coins;
    default:
      return Package;
  }
}

// Format currency (fungsi utilitas)
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};
