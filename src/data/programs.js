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
  progress: 90, // (19/30) * 100
  totalKebutuhan: 5400, // 180 porsi * 30 hari
  terkumpul: 4910, // 19 hari terpenuhi (180 * 19)
  chartData: Array.from({ length: 30 }, (_, i) => ({
    hari: i + 1,
    target: 180,
    terkumpul: i < 27 ? 180 : i === 27 ? 50 : 0,
    terpenuhi: i < 27,
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
  progress: 82, // Belum terpenuhi
  totalKebutuhan: 700, // 70 porsi * 10 hari terakhir
  terkumpul: 570, // Belum ada yang terkumpul
  chartData: Array.from({ length: 10 }, (_, i) => ({
    hari: i + 21, // 10 hari terakhir (21-30)
    target: 700,
    terkumpul: 570,
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
  progress: 100, // (4/30) * 100
  totalKebutuhan: 30, // 30 hari
  terkumpul: 30, // 4 hari sudah terpenuhi
  chartData: Array.from({ length: 30 }, (_, i) => ({
    hari: i + 1,
    target: 1, // 1 paket per hari
    terkumpul: i < 30 ? 1 : 0,
    terpenuhi: i < 30,
  })),
};

// Koleksi semua program untuk mudah diiterasi
// Data Kebutuhan Kurma
export const kurmaData = {
  nama: 'Kebutuhan Kurma',
  icon: 'package',
  color: '#DC2626', // text-red-600
  lightColor: '#FEE2E2', // bg-red-100
  progress: 84,
  totalKebutuhan: 95, // dalam kg
  terkumpul: 80,
  chartData: Array.from({ length: 30 }, (_, i) => ({
    hari: i + 1,
    target: 95,
    terkumpul: 80,
    terpenuhi: false,
  })),
};

// Data Kebutuhan Air Mineral
export const airData = {
  nama: 'Kebutuhan Air Mineral',
  icon: 'package',
  color: '#0EA5E9', // text-sky-500
  lightColor: '#E0F2FE', // bg-sky-100
  progress: 73,
  totalKebutuhan: 150, // dalam dus
  terkumpul: 110,
  chartData: Array.from({ length: 30 }, (_, i) => ({
    hari: i + 1,
    target: 150,
    terkumpul: 110,
    terpenuhi: false,
  })),
};

// Data Bisyaroh
export const bisyarohData = {
  nama: 'Operasional Peribadatan',
  icon: 'coins',
  color: '#9333EA', // text-purple-600
  lightColor: '#F3E8FF', // bg-purple-100
  progress: ((18959000 / 29800000) * 100).toFixed(2), // Calculate percentage automatically
  totalKebutuhan: 29800000,
  terkumpul: 18959000,
  chartData: Array.from({ length: 30 }, (_, i) => ({
    hari: i + 1,
    target: 29800000,
    terkumpul: i < 15 ? 18959000 : 0, // Simplified chart data
    terpenuhi: false,
  })),
};

export const allPrograms = [takjilData, sahurData, snackData, kurmaData, airData, bisyarohData];

// Data Infaq harian
export const infaqData = {
  nama: 'Infaq Harian',
  icon: 'coins', // Nama icon dari lucide-react
  color: '#EC4899', // text-pink-500
  lightColor: '#FCE7F3', // bg-pink-100
  progress: 59, // (11/30) * 100
  totalKebutuhan: 30, // 30 hari
  terkumpul: 14,
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
    { hari: 10, jumlah: 500000 },
    { hari: 11, jumlah: 650000 },
    { hari: 12, jumlah: 650000 },
    { hari: 13, jumlah: 650000 },
    { hari: 14, jumlah: 550000 },
  ],
};

// Data Infaq Total
export const infaqTotalData = {
  nama: 'Infaq Total',
  icon: 'coins', // Nama icon dari lucide-react
  color: '#EC4899', // text-pink-500
  lightColor: '#FCE7F3', // bg-pink-100
  totalRupiahKebutuhan: 132600000,
  totalRupiahPemasukan: 80619500,
  totalRupiahPengeluaran: 65835482,
  selisihKekurangan: -51980500,
  prosenPencapaian: 60.79,
  statusSaldo: 14784018,
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

// Format currency in millions (juta)
export const formatCurrencyJuta = (amount) => {
  const millions = amount / 1000000;
  return `Rp ${millions.toFixed(1)} juta`;
};
