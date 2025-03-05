// src/app/page.js
// Halaman utama aplikasi - redirect ke halaman dashboard

import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/dashboard');
}
