// src/app/layout.js
// Root layout untuk aplikasi Next.js - berlaku untuk semua halaman

import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Dashboard Donasi Masjid Al Muhajirin',
  description: 'Dashboard Donasi Ramadhan Masjid Al Muhajirin Rewwin',
};

export default function RootLayout({ children }) {
  return (
    <html lang='id'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
